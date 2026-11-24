// Shared engine for the one-off list name cleanups in src/scripts.
//
// Imports only pure modules: importing the models would start the bots.
import { createConnection, Types } from "mongoose";
import type { IList } from "@models/tenthings/list";
import { normalizeListName, standardizeListPhrases } from "@utils/list-names";
import { mergeLists } from "@utils/list-merge";
import { removeAllButLetters } from "@utils/string-helpers";

const MIN_ANSWERS = 10;

type Doc = IList & { _id: Types.ObjectId };

const answerKey = (value: string) => removeAllButLetters(value);

/** The merged list's answers, each once, limited to `keep` when given. Throws on a `keep` entry it can't find. */
const pickAnswers = (list: IList, keep?: string[]) => {
  const wanted = keep && new Set(keep.map(answerKey));
  const seen = new Set<string>();
  const values = list.values.filter(({ value }) => {
    const k = answerKey(value);
    if (seen.has(k) || (wanted && !wanted.has(k))) return false;
    seen.add(k);
    return true;
  });
  const unmatched = keep?.filter((value) => !seen.has(answerKey(value))) ?? [];
  if (unmatched.length) throw new Error(`"${list.name}": answers to keep not found: ${unmatched.join(", ")}`);
  if (values.length < MIN_ANSWERS) throw new Error(`"${list.name}" would have only ${values.length} answers`);
  return values;
};

const key = (list: Pick<IList, "language" | "name">) => `${list.language}|${list.name.toLowerCase()}`;

export interface ListCleanup {
  /** Reviewed renames by list id. */
  renames: Record<string, string>;
  /** Lists to delete outright. */
  deletes?: string[];
  /** The answers a merged list keeps, by the id of the list it merges into. Others keep every answer. */
  keep?: Record<string, string[]>;
  /** Answers to drop from lists that aren't merged, by list id. */
  drop?: Record<string, string[]>;
  /** The languages the automatic fixes run on. Every language when left out. */
  languages?: string[];
  /** Name of the collection the lists are copied to before writing. */
  backup: string;
}

/**
 * Renames lists to the house style, merges lists that end up with the same name into the oldest, trims and
 * deletes. Prints what would change; writes only with --apply, after copying the lists collection to `backup`.
 */
export const runListCleanup = async ({
  renames: RENAMES,
  deletes: DELETES = [],
  keep: KEEP = {},
  drop: DROP = {},
  languages,
  backup,
}: ListCleanup) => {
  const apply = process.argv.includes("--apply");
  const connection = await createConnection(process.env.MONGO_URL!).asPromise();
  const lists = connection.collection<Doc>("lists");
  const everything = await lists.find({}).toArray();

  const ids = [...Object.keys(RENAMES), ...Object.keys(DROP), ...DELETES];
  const missing = ids.filter((id) => !everything.some(({ _id }) => String(_id) === id));
  if (missing.length) throw new Error(`Lists not found: ${missing.join(", ")}`);
  const all = everything.filter(({ _id }) => !DELETES.includes(String(_id)));

  const renamed = new Map<string, string>();
  for (const list of all) {
    const name =
      RENAMES[String(list._id)] ??
      (languages && !languages.includes(list.language)
        ? list.name
        : standardizeListPhrases(normalizeListName(list.name ?? "", list.language), list.language));
    if (name !== list.name) renamed.set(String(list._id), name);
  }
  const nameOf = (list: Doc) => renamed.get(String(list._id)) ?? list.name;

  // Enabled lists in the same language that end up with the same name, where a rename caused it.
  const groups = new Map<string, Doc[]>();
  for (const list of all.filter(({ enabled }) => enabled)) {
    const k = key({ language: list.language, name: nameOf(list) });
    groups.set(k, [...(groups.get(k) ?? []), list]);
  }
  const merges = [...groups.values()]
    .filter((group) => group.length > 1 && group.some(({ _id }) => renamed.has(String(_id))))
    .map((group) => group.sort((a, b) => +new Date(a.date) - +new Date(b.date)));

  for (const [id, name] of renamed)
    console.log(`rename ${id}  ${all.find(({ _id }) => String(_id) === id)!.name}  →  ${name}`);
  for (const group of merges)
    console.log(
      `merge into ${group[0]._id} "${nameOf(group[0])}" ← ${group
        .slice(1)
        .map((l) => `${l._id} "${l.name}"`)
        .join(", ")}`,
    );
  const unknownKeep = Object.keys(KEEP).filter((id) => !merges.some((group) => String(group[0]._id) === id));
  if (unknownKeep.length) throw new Error(`KEEP lists that aren't merged into: ${unknownKeep.join(", ")}`);

  // Worked out before anything is written, so a typo in KEEP or DROP stops the run.
  const mergedLists = merges.map((group) => {
    const name = nameOf(group[0]);
    const result = group.slice(1).reduce<IList>((acc, list) => mergeLists(acc, list), group[0]);
    const before = group.reduce((n, list) => n + list.values.length, 0);
    const values = pickAnswers({ ...result, name }, KEEP[String(group[0]._id)]);
    console.log(`  ${name}: ${before} answers across ${group.length} lists → ${values.length}`);
    return { group, doc: { ...result, name, search: removeAllButLetters(name), values } as Doc };
  });
  const drops = Object.entries(DROP).map(([id, values]) => {
    const list = all.find(({ _id }) => String(_id) === id)!;
    const gone = new Set(values);
    const absent = values.filter((value) => !list.values.some((v) => v.value === value));
    if (absent.length) throw new Error(`"${list.name}": answers to drop not found: ${absent.join(", ")}`);
    const kept = list.values.filter(({ value }) => !gone.has(value));
    if (kept.length < MIN_ANSWERS) throw new Error(`"${list.name}" would have only ${kept.length} answers`);
    console.log(`drop from "${nameOf(list)}": ${values.join(" | ")}`);
    return { id: list._id, values: kept };
  });
  for (const id of DELETES) console.log(`delete ${id}  ${everything.find(({ _id }) => String(_id) === id)!.name}`);

  console.log(
    `\n${renamed.size} renames, ${merges.length} merges removing ${merges.reduce((n, g) => n + g.length - 1, 0)} lists, ` +
      `${drops.length} lists trimmed, ${DELETES.length} deleted`,
  );

  if (!apply) {
    console.log("Dry run: nothing written. Rerun with --apply to write.");
    return process.exit(0);
  }

  if (await connection.db!.listCollections({ name: backup }).hasNext())
    throw new Error(`${backup} already exists; a cleanup that already ran won't overwrite its backup`);
  await lists.aggregate([{ $match: {} }, { $out: backup }]).toArray();
  console.log(`Backed up ${await connection.collection(backup).countDocuments()} lists to ${backup}`);

  const merged = new Set(merges.flatMap((group) => group.map(({ _id }) => String(_id))));
  const renames = [...renamed].filter(([id]) => !merged.has(id));
  if (renames.length)
    await lists.bulkWrite(
      renames.map(([id, name]) => ({
        updateOne: {
          filter: { _id: new Types.ObjectId(id) },
          update: { $set: { name, search: removeAllButLetters(name) } },
        },
      })),
    );
  for (const { group, doc } of mergedLists) {
    await lists.replaceOne({ _id: group[0]._id }, doc);
    await lists.deleteMany({ _id: { $in: group.slice(1).map(({ _id }) => _id) } });
  }
  for (const { id, values } of drops) await lists.updateOne({ _id: id }, { $set: { values } });
  await lists.deleteMany({ _id: { $in: DELETES.map((id) => new Types.ObjectId(id)) } });
  console.log(
    `Wrote ${renames.length} renames, ${merges.length} merges, ${drops.length} trims and ${DELETES.length} deletions.`,
  );
  process.exit(0);
};
