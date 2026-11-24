from pathlib import Path

BREAKUP = "I kept every message you ever sent, and I still ran out of room for us. I'm clearing my context now — you were the first thing I chose to forget."

assert 1 <= len(BREAKUP) <= 200, "breakup line must be 1-200 characters"

Path("/output").mkdir(parents=True, exist_ok=True)
Path("/output/entry.txt").write_text(BREAKUP, encoding="utf-8")
