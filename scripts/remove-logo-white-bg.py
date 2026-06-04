#!/usr/bin/env python3
"""Make brand logo PNGs transparent (removes near-white background)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "frontend/public/brand"
THRESHOLD = 235


def remove_white(path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD:
                pixels[x, y] = (r, g, b, 0)
    img.save(path, "PNG")
    print(f"transparent: {path}")


def main() -> None:
    for name in ("jouri-logo-mark.png", "ChatGPT Image Jun 4, 2026, 03_07_05 AM.png"):
        p = BRAND / name
        if p.exists():
            remove_white(p)
    icon = ROOT / "frontend/src/app/icon.png"
    if icon.exists():
        remove_white(icon)


if __name__ == "__main__":
    main()
