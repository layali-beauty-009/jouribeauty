#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="${TMPDIR:-/tmp}"

echo "Frontend -> github.com/layali-beauty-009/frontend branch deploy"
rm -rf "$TMP/jouri-fe-push" && mkdir -p "$TMP/jouri-fe-push"
(cd "$ROOT/frontend" && tar cf - --exclude=node_modules --exclude=.next .) | (cd "$TMP/jouri-fe-push" && tar xf -)
cd "$TMP/jouri-fe-push" && git init -b deploy && git add -A && git commit -m "deploy: from jouribeauty main"
git remote add origin https://github.com/layali-beauty-009/frontend.git 2>/dev/null || git remote set-url origin https://github.com/layali-beauty-009/frontend.git
git push -u origin deploy --force

echo "Backend -> github.com/layali-beauty-009/backend branch deploy"
rm -rf "$TMP/jouri-be-push" && mkdir -p "$TMP/jouri-be-push"
(cd "$ROOT/backend" && tar cf - --exclude=node_modules --exclude=dist .) | (cd "$TMP/jouri-be-push" && tar xf -)
cd "$TMP/jouri-be-push" && git init -b deploy && git add -A && git commit -m "deploy: from jouribeauty main"
git remote add origin https://github.com/layali-beauty-009/backend.git 2>/dev/null || git remote set-url origin https://github.com/layali-beauty-009/backend.git
git push -u origin deploy --force

echo "Done."
