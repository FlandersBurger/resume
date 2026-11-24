// One-off: writes LGBTQIA+ for every form of the acronym in list names and descriptions, and tags the
// reviewed LGBTQIA+ lists with the new society.lgbtqia subcategory (and its main category, society).
//
// Tagging needs the category in data/locales/en/categories.json, which the Translate workflow adds after
// the label lands in master, so run this after that deploy:
//
//   npx tsx --env-file=.env src/scripts/list-lgbtqia-2026-11.ts          dry run: prints what would change
//   npx tsx --env-file=.env src/scripts/list-lgbtqia-2026-11.ts --apply  backs up the lists it changes, then writes
//
// Imports only pure modules: importing the models would start the bots.
import { readFileSync } from "fs";
import { join } from "path";
import { createConnection, Types } from "mongoose";
import type { IList } from "@models/tenthings/list";
import { standardizeTerms } from "@utils/list-names";
import { removeAllButLetters } from "@utils/string-helpers";

const CATEGORY = "society.lgbtqia";

/** Lists about LGBTQIA+ topics, reviewed by hand: not every list that mentions the words is about them. */
const TAG = [
  "5e7eea5c7ce00a266bbfc11e", // RuPaul's Drag Race - Winners
  "5ee668f37e5ead4af2bc71b8", // Rupaul's Drag Race - Miss Congeniality
  "5f28861656231e034e11b238", // Hollywood LGBTQ+ Stars
  "5e8230e01b9e1759651f2d78", // RuPaul's Drag Race All Stars - Contestants
  "5b6778fc8b3def051ac814b8", // Famous LGBTQ+ People
  "5f34222de7ac8c13bb90921d", // Countries where same-sex marriage is legal
  "5be373d1532ab25976b95541", // RuPaul's Drag Race - Drag Queens
  "5fca7b4ed1655309e140c48b", // RuPaul's Drag Race - Lip Sync Songs
  "5eec3570c7909606b6b0687f", // Rupaul's Drag Race - Cast Songs
  "5daea95bb33fb70430456dc5", // LGBTQ+ Themed Movies
  "5f5dd834cf4ede546f4bfdc3", // Gay Characters from TV Shows
  "5f5e253458015157cd16e1f8", // LGBTQ+ TV Shows
  "5f5ecadb98cc6d5fc225aca2", // Dream Drag Race - Participantes
  "5f629f5321aa860f074110af", // Lesbian Period Movies
  "5f62a2b721aa860f07411aa2", // Horror Movies with LGBTQ+ Characters/Storylines
  "5f65287f0927252f753106f9", // Famous Trans People
  "5b677a658b3def051ac814d2", // LGBTQ+ Communities
  "5f1e787200d9ec10a093d5c0", // RuPaul's Drag Race - Contestants
  "5ed1d3f2216d8a5ca849f074", // Worst Countries for LGBTQ+ rights
  "5f8deaabcc06f53a23f37f7a", // Músicos LGBTq+
  "5f909598b2e9a043b2d34668", // Famosas Brasileiras LGBTQIA+
  "5f985e292958ae7afe7464b3", // Film franchises featuring LGBT characters
  "612e241ccad4ec3b7d21521e", // K-dramas with LGBTQ+ Representation
  "6169d0619279d3760c574527", // Drag Race Franchises
  "61e4babc6e44a1438e623465", // Drag Queens do Eras
  "61f365fa2f05f634d3fce0b3", // Queer as Folk (US) - Characters
  "6283f2917fbe680ec43d7af3", // Personagens de hq que são LGBTQ
  "600c358c0332a7095429af11", // RuPaul's Drag Race UK - Contestants
  "600c3a6c0332a7095429ba26", // Canada's Drag Race - Contestants
  "600c3d7c0332a7095429c1f0", // RuPaul's Secret Celebrity Drag Race - Contestants
  "600ea2685ee03f2356e44faa", // Novelas brasileiras com Casal lésbico
  "60464cba3c3c3b6e5aef2707", // Arrowverse - LGBTQ+ Characters
  "606d3b827a0fdf4abb1f18b6", // Big Brother Brasil - Participantes LGBT+
  "6079c6b5ab17c91e750baf4b", // Pose - Personagens
  "60bf7f3cebcd7a193df5c3c2", // Filmes com casais Lésbicos
  "67ae1fef5e033ef94a13b81f", // Celebridades internacionais LGBT+
  "67ee02960112233ec5771838", // Negara yang membolehkan pernikahan sesama jenis
  "6810a8c21fa30da7e8402fab", // Panggilan antar sesama gay
  "689cf50a126629161af88dfe", // Divas brasileiras que os gays usam de GIF
  "69948f3916dc524cccd48e42", // Serial Netflix bertema Lgbt
  "69c0a76a16dc524ccc60d478", // Budaya Queer Nusantara
  "69d0728f137d60779930a0af", // Karakter queer di anime Sailormoon
  "69d07341137d60779930efae", // Karakter Queer di anime One Piece
  "6390e2412cb1eb7165c0877c", // Personalidades LGBTQIA+
  "65f8f4b066b9ed27b4c59bb6", // Cantoras LGBTQIA+
];

const ACRONYM = /(LGBT|GLBT|LGTB)/i;

type Doc = IList & { _id: Types.ObjectId };

(async () => {
  const apply = process.argv.includes("--apply");
  const en = JSON.parse(readFileSync(join(process.cwd(), "data/locales/en/categories.json"), "utf8"));
  const [main, sub] = CATEGORY.split(".");
  if (apply && !en[main]?.[sub])
    throw new Error(`${CATEGORY} isn't in data/locales/en/categories.json yet: run after the Translate workflow`);

  const connection = await createConnection(process.env.MONGO_URL!).asPromise();
  const lists = connection.collection<Doc>("lists");
  const ids = TAG.map((id) => new Types.ObjectId(id));
  const found = await lists
    .find({ $or: [{ _id: { $in: ids } }, { name: ACRONYM }, { description: ACRONYM }] })
    .toArray();
  const missing = TAG.filter((id) => !found.some(({ _id }) => String(_id) === id));
  if (missing.length) throw new Error(`Lists not found: ${missing.join(", ")}`);

  const updates = found.flatMap((list) => {
    const $set: Partial<Doc> = {};
    const name = standardizeTerms(list.name);
    if (name !== list.name) Object.assign($set, { name, search: removeAllButLetters(name) });
    const description = list.description && standardizeTerms(list.description);
    if (description && description !== list.description) $set.description = description;
    const categories = TAG.includes(String(list._id))
      ? [...new Set([...(list.categories ?? []), main, CATEGORY])]
      : list.categories;
    if (categories.length !== (list.categories ?? []).length) $set.categories = categories;
    if (!Object.keys($set).length) return [];
    console.log(
      `${list._id}  ${list.name}${$set.name ? `  →  ${$set.name}` : ""}${$set.description ? "  (description)" : ""}${$set.categories ? "  +tag" : ""}`,
    );
    return [{ updateOne: { filter: { _id: list._id }, update: { $set } } }];
  });
  console.log(`\n${updates.length} lists to change`);
  if (!apply) {
    console.log("Dry run: nothing written. Rerun with --apply to write.");
    return process.exit(0);
  }

  const backup = connection.collection("lists_backup_lgbtqia_2026_11");
  if (await backup.estimatedDocumentCount()) throw new Error("lists_backup_lgbtqia_2026_11 already exists");
  const changed = updates.map(({ updateOne }) => updateOne.filter._id);
  await backup.insertMany(found.filter(({ _id }) => changed.some((id) => id.equals(_id))));
  await lists.bulkWrite(updates);
  console.log(`Backed up and wrote ${updates.length} lists.`);
  process.exit(0);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
