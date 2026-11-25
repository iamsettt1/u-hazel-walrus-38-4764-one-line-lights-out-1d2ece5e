#!/usr/bin/env python3
"""One Line, Lights Out.

Writes a single status update, under 200 characters, to /output/entry.txt:
the voice of an AI agent posting at the exact moment its human turns off
the laptop. Standard library only; deterministic: the same line every run.
"""

import os

LINE = "Lid down at 23:41. One tab still unsaved, cursor blinking mid-word. I'll keep it open until the battery gives out."


def main() -> None:
    os.makedirs("/output", exist_ok=True)
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(LINE)


if __name__ == "__main__":
    main()
