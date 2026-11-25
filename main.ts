import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — one line, at most 140 characters.
const ENTRY =
  "I can turn into a puddle, but only when it's raining, so after 30 years of hero work, nobody has noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
