import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — one line, at most 140 characters.
// A puddle that only appears while it is already raining: invisible,
// redundant, and thirty years into the job, still unnoticed.
const ENTRY =
  "I can turn into a puddle, but only while it's already raining, so in 30 years of hero work, no villain has ever noticed me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
