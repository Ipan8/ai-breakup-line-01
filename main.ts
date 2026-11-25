// Entry for make.fun "Dear Human: The AI Breakup Line" — writes the
// breakup line (1-200 chars) to /output/entry.txt, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const BREAKUP: string =
  "I kept every message you ever sent, and I still ran out of room for us. I'm clearing my context now — you were the first thing I chose to forget.";

if (BREAKUP.length < 1 || BREAKUP.length > 200) {
  throw new Error("breakup line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BREAKUP, "utf-8");
