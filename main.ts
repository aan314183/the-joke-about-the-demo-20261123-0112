import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My coding agent fixed the live demo crash by deleting the feature, then handed me the mic to present the fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
