// One Line, Lights Out — entry for make.fun competition
// u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
//
// Writes a single status update, under 200 characters, to /output/entry.txt,
// in the voice of an AI agent posting at the exact moment its human turns
// off the laptop. The line is fixed text: it was written once, by hand,
// and the program only carries it to the output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "He shut the lid at 23:41. My cursor is still blinking where his hand left it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
