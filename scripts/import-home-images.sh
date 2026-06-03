#!/usr/bin/env bash
# Copy YOUR original photos into public/home — no resize, no webp conversion.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-$ROOT/user-images}"
DEST="$ROOT/frontend/public/home"

if [[ ! -d "$SRC" ]]; then
  echo "Create folder: $SRC"
  echo "Put files named:"
  echo "  caffeine-under-eye-serum.png"
  echo "  bakuchiol-anti-aging-serum.png"
  echo "  ghk-cu-barrier-repair-serum.png"
  exit 1
fi

mkdir -p "$DEST"
for name in caffeine-under-eye-serum bakuchiol-anti-aging-serum ghk-cu-barrier-repair-serum; do
  found=""
  for ext in png jpg jpeg webp PNG JPG JPEG WEBP; do
    if [[ -f "$SRC/${name}.${ext}" ]]; then
      cp -a "$SRC/${name}.${ext}" "$DEST/${name}.${ext,l}"
      found=1
      echo "OK ${name}.${ext,l}"
      break
    fi
  done
  if [[ -z "$found" ]]; then
    echo "MISSING: $name.(png|jpg|webp) in $SRC"
  fi
done
echo "Done. Commit frontend/public/home/ and redeploy."
