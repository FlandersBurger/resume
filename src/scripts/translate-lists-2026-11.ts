// Translates every starred original List into the bot languages it isn't in yet.
//
// The writing is done by the server's translation queue worker (src/controllers/bots/tenthings/translations),
// the same one starring a List uses, so there's one way Lists get translated. This script only previews,
// queues and reports. It imports no models: importing them would start the bots.
//
//   npx tsx --env-file=.env src/scripts/translate-lists-2026-11.ts --limit 5        dry run: Claude translates, nothing is saved
//   npx tsx --env-file=.env src/scripts/translate-lists-2026-11.ts --ids a,b,c      dry run of those Lists
//   npx tsx --env-file=.env src/scripts/translate-lists-2026-11.ts --apply [--limit N]   backs up the lists, then queues them
//   npx tsx --env-file=.env src/scripts/translate-lists-2026-11.ts --resume         resumes a queue paused by its daily budget
//   npx tsx --env-file=.env src/scripts/translate-lists-2026-11.ts --report         what's been translated so far
import { writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { createConnection, Types } from "mongoose";
import type { IList } from "@models/tenthings/list";
import { checkTranslatable, translateList } from "@root/connections/claude";
import { queueListTranslation, translationQueue } from "@tenthings/translations/queue";
import { BotLanguage } from "@tenthings/languages";
import { buildTranslatedList, EVERY_LANGUAGE, targetLanguages } from "@utils/list-translation";

const BACKUP = "lists_backup_translations_2026_11";

const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const option = (name: string) => {
  const at = args.indexOf(`--${name}`);
  return at >= 0 ? args[at + 1] : undefined;
};

const ORIGINALS = { enabled: true, starred: true, translationOf: { $exists: false } };

const main = async () => {
  if (flag("resume")) {
    await translationQueue.resume();
    console.log("Translation queue resumed.");
    return;
  }

  const connection = await createConnection(process.env.MONGO_URL!).asPromise();
  const lists = connection.collection<IList>("lists");

  if (flag("report")) {
    const perLanguage = await lists
      .aggregate([{ $match: { translationOf: { $exists: true } } }, { $group: { _id: "$language", n: { $sum: 1 } } }])
      .sort({ _id: 1 })
      .toArray();
    console.log("Translations per language:");
    for (const { _id, n } of perLanguage) console.log(`  ${_id}: ${n}`);
    const originals = await lists.find(ORIGINALS).project<IList>({ language: 1, translationSkips: 1 }).toArray();
    const groups = await lists
      .aggregate<{ _id: Types.ObjectId; languages: string[] }>([
        { $match: { translationOf: { $exists: true } } },
        { $group: { _id: "$translationOf", languages: { $addToSet: "$language" } } },
      ])
      .toArray();
    const done = new Map(groups.map(({ _id, languages }) => [String(_id), languages]));
    const missing = originals.filter(
      (list) => targetLanguages(list.language, done.get(String(list._id)) ?? [], list.translationSkips).length,
    );
    const untranslatable = originals.filter((list) =>
      list.translationSkips?.some(({ language }) => language === EVERY_LANGUAGE),
    );
    console.log(
      `${originals.length} starred originals: ${missing.length} still missing languages, ` +
        `${untranslatable.length} can't be translated.`,
    );
    console.log(`Queue: ${JSON.stringify(await translationQueue.getJobCounts())}`);
    return;
  }

  const ids = option("ids")
    ?.split(",")
    .map((id) => new Types.ObjectId(id.trim()));
  const limit = Number(option("limit")) || (flag("apply") ? 0 : 5);
  const query = ids ? { _id: { $in: ids } } : { ...ORIGINALS, "translationSkips.language": { $ne: EVERY_LANGUAGE } };
  const selected = await lists
    .find(query)
    .sort({ plays: -1 })
    .limit(ids ? 0 : limit)
    .toArray();
  console.log(`${selected.length} Lists selected.`);

  if (flag("apply")) {
    if (await connection.db!.listCollections({ name: BACKUP }).hasNext()) {
      console.log(`${BACKUP} already exists, from an earlier run; keeping it.`);
    } else {
      await lists.aggregate([{ $match: {} }, { $out: BACKUP }]).toArray();
      console.log(`Backed up ${await connection.collection(BACKUP).countDocuments()} lists to ${BACKUP}`);
    }
    for (const list of selected) await queueListTranslation(list._id);
    console.log(`Queued ${selected.length} Lists. The server's worker translates them and reports each one.`);
    return;
  }

  // Dry run: the same steps as the worker, printed instead of saved.
  let cost = 0;
  const preview: object[] = [];
  for (const list of selected) {
    const existing = await lists.distinct("language", { translationOf: list._id });
    const targets = targetLanguages(list.language, existing, list.translationSkips);
    console.log(`\n=== ${list.name} (${list.language}, ${list.values.length} answers) → ${targets.join(", ") || "-"}`);
    if (!targets.length) continue;
    const source = {
      name: list.name,
      description: list.description,
      language: list.language,
      categories: list.categories,
      values: list.values.map(({ value, blurb }) => ({ value, blurb })),
    };
    const check = await checkTranslatable(source);
    cost += check.cost;
    if (!check.translatable && !existing.length && !list.translationSkips?.length) {
      console.log(`  skipped: can't be translated (${check.reason})`);
      preview.push({ id: list._id, name: list.name, untranslatable: check.reason });
      continue;
    }
    if (check.needsLookup) console.log("  looking up official names");
    const { translations, cost: spent } = await translateList(source, targets, { lookup: check.needsLookup });
    cost += spent;
    for (const language of targets) {
      const translation = translations.find((t) => t.language === language);
      if (!translation) {
        console.log(`  ${language}: not returned`);
        continue;
      }
      const built = buildTranslatedList(list, translation);
      if ("skip" in built) {
        console.log(`  ${language}: skipped (${built.skip})`);
        continue;
      }
      const taken = await lists.findOne(
        { name: built.list.name, language: language as unknown as IList["language"], enabled: true },
        { collation: { locale: "en", strength: 1 }, projection: { name: 1 } },
      );
      console.log(`  ${language}: ${built.list.name}${taken ? `  ← skipped, "${taken.name}" exists` : ""}`);
      if (language === BotLanguage.NL)
        for (const { value, blurb } of built.list.values) console.log(`      ${value}${blurb ? ` | ${blurb}` : ""}`);
      preview.push({ id: list._id, from: list.name, taken: taken?.name, ...built.list });
    }
  }
  const out = option("out") ?? join(tmpdir(), "translate-lists-dry-run.json");
  writeFileSync(out, JSON.stringify(preview, null, 2));
  console.log(`\nDry run: nothing saved. Cost $${cost.toFixed(4)}. Full preview: ${out}`);
};

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => process.exit());
