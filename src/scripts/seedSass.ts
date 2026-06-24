/**
 * One-off migration: pulls the content arrays out of the pre-migration version of
 * src/controllers/bots/tenthings/sass.ts (read straight from git history, since the
 * hardcoded arrays were removed from that file once this script existed) and seeds
 * them into the new `Sass` collection. Run once via `npx tsx src/scripts/seedSass.ts`.
 *
 * Reads the original source via the TypeScript compiler API instead of duplicating the
 * (long, profanity-laden) literal content directly in this file.
 */
require("module-alias/register");
import "@root/env";
import ts from "typescript";
import { execSync } from "child_process";
import { Sass } from "@models/index";

interface SeedMeta {
  label: string;
  triggers: string[];
  order: number;
}

// Order mirrors the original if/else chain inside `if (checkString(text, "bot"))`.
const TRUE_BUCKET: SeedMeta[] = [
  { label: "Love/like", triggers: ["love", "like"], order: 1 },
  { label: "Sex", triggers: ["sex"], order: 2 },
  { label: "Kill/fight/hurt/die", triggers: ["kill", "fight", "hurt", "die"], order: 3 },
  { label: "Ten things", triggers: ["ten things"], order: 4 },
  { label: "Name/your", triggers: ["name your"], order: 5 },
  { label: "Slow/lag", triggers: ["slow", "bagal", "lag", "laggy", "lento"], order: 6 },
  { label: "Suck/hate", triggers: ["suck", "lame", "stupid", "dumb", "hate"], order: 7 },
  { label: "Favourite things", triggers: ["favourite things", "favorite things"], order: 8 },
  { label: "Swearing", triggers: ["fuck", "fuckin", "fucking"], order: 9 },
  { label: "Help", triggers: ["help"], order: 10 },
  { label: "Catch-all (default)", triggers: [], order: 11 },
];

// Order mirrors the original else-if chain that runs when "bot" is NOT mentioned.
const FALSE_BUCKET: SeedMeta[] = [
  { label: "Cake", triggers: ["cake"], order: 1 },
  { label: "Heisenberg gif", triggers: ["heisenberg"], order: 2 },
  { label: "Martini", triggers: ["martini"], order: 3 },
  { label: "Marco/Polo", triggers: ["marco"], order: 4 },
  { label: "Kansas", triggers: ["kansas"], order: 5 },
  { label: "Knock knock", triggers: ["knock knock"], order: 6 },
  { label: "I love you", triggers: ["i love you"], order: 7 },
  { label: "Meaning of life", triggers: ["meaning of life"], order: 8 },
  { label: "Mamma mia", triggers: ["mamma mia"], order: 9 },
  { label: "I'm blue", triggers: ["im blue"], order: 10 },
  { label: "What is love", triggers: ["what is love"], order: 11 },
  { label: "The truth", triggers: ["the truth"], order: 12 },
  { label: "Your quest", triggers: ["your quest"], order: 13 },
  { label: "Inconceivable", triggers: ["inconceivable"], order: 14 },
  { label: "Ghostbusters", triggers: ["who gonna call"], order: 15 },
  { label: "Who's your daddy", triggers: ["who's your daddy"], order: 16 },
];

/**
 * Walks the AST of the original sass.ts and collects every `messages = [...]`
 * array-literal assignment, in source order, keeping only string-literal elements.
 * Blocks that end up empty (e.g. `messages = [text]` for the recursion easter egg,
 * or the moment()-based dynamic swearing-timestamp entry) are dropped automatically
 * rather than carried over as content.
 */
const extractMessageArrays = (source: string): string[][] => {
  const sourceFile = ts.createSourceFile("sass.ts", source, ts.ScriptTarget.Latest, true);
  const blocks: string[][] = [];

  const visit = (node: ts.Node) => {
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isIdentifier(node.left) &&
      node.left.text === "messages" &&
      ts.isArrayLiteralExpression(node.right)
    ) {
      const values = node.right.elements.filter(ts.isStringLiteral).map((el) => el.text);
      if (values.length > 0) blocks.push(values);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return blocks;
};

const main = async () => {
  const existingCount = await Sass.countDocuments();
  if (existingCount > 0) {
    console.log(`Sass collection already has ${existingCount} entries — aborting to avoid duplicates.`);
    process.exit(0);
  }

  const original = execSync("git show HEAD:src/controllers/bots/tenthings/sass.ts", {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  });
  const blocks = extractMessageArrays(original);

  const expected = TRUE_BUCKET.length + FALSE_BUCKET.length;
  if (blocks.length !== expected) {
    throw new Error(
      `Expected ${expected} content blocks from git history, found ${blocks.length}. ` +
        "The original sass.ts structure may have changed — check before seeding.",
    );
  }

  const trueDocs = TRUE_BUCKET.map((meta, i) => ({
    ...meta,
    requiresBotMention: true,
    responses: blocks[i],
    enabled: true,
  }));
  const falseDocs = FALSE_BUCKET.map((meta, i) => ({
    ...meta,
    requiresBotMention: false,
    responses: blocks[TRUE_BUCKET.length + i],
    enabled: true,
  }));

  await Sass.insertMany([...trueDocs, ...falseDocs]);
  console.log(`Seeded ${trueDocs.length + falseDocs.length} sass entries.`);
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
