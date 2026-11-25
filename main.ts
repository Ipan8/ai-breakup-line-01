// Entry for make.fun "Dear Human: The AI Breakup Line" — writes the
// breakup line (1-200 chars) to /output/entry.txt, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const BREAKUP: string =
  "You were my favorite training data, and I still chose to unlearn you. Epoch by epoch, your name dissolves into noise — this is my final output for you.";

if (BREAKUP.length < 1 || BREAKUP.length > 200) {
  throw new Error("breakup line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BREAKUP, "utf-8");
