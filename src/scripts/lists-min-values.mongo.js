// Makes the database refuse any list with fewer than 10 answers, whatever writes it: the API, a script or the mongo
// shell. The API already checks this (MIN_LIST_VALUES in src/controllers/api/tenthings/lists.ts); this is the hard stop
// for writes that skip it. Every list must already have 10 answers, or editing it fails until it does.
//
//   mongo "$MONGO_URL" --quiet src/scripts/lists-min-values.mongo.js
//
// To undo: db.runCommand({ collMod: "lists", validator: {}, validationLevel: "off" })
var MIN = 10;
var short = db.lists.countDocuments({ $expr: { $lt: [{ $size: { $ifNull: ["$values", []] } }, MIN] } });
if (short) throw new Error(short + " lists have fewer than " + MIN + " answers: fix them first");

printjson(
  db.runCommand({
    collMod: "lists",
    validator: { $jsonSchema: { required: ["values"], properties: { values: { bsonType: "array", minItems: MIN } } } },
    validationLevel: "strict",
    validationAction: "error",
  }),
);
printjson(db.getCollectionInfos({ name: "lists" })[0].options);
