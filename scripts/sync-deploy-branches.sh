#!/usr/bin/env bash
# Rebuild orphan branches `frontend` and `backend` from current monorepo (run from repo root).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
TMP="${TMPDIR:-/tmp}"

sync_frontend() {
  local dir="$TMP/jouri-sync-frontend"
  rm -rf "$dir"
  mkdir -p "$dir"
  (cd "$ROOT/frontend" && tar cf - --exclude=node_modules --exclude=.next .) | (cd "$dir" && tar xf -)
  cp "$ROOT/frontend/Dockerfile" "$dir/Dockerfile"
  printf '%s\n' 'node_modules' '.next' '.env' '.env.local' > "$dir/.dockerignore"

  git checkout --orphan sync-frontend-tmp 2>/dev/null || {
    git branch -D sync-frontend-tmp 2>/dev/null || true
    git checkout --orphan sync-frontend-tmp
  }
  git rm -rf . 2>/dev/null || true
  find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
  cp -a "$dir"/. .
  git add -A
  git commit -m "deploy: sync frontend from main ($(date -u +%Y-%m-%d))"
  git push -u origin sync-frontend-tmp:frontend --force
  git checkout "$CURRENT_BRANCH"
  git branch -D sync-frontend-tmp
  echo "Pushed origin/frontend"
}

sync_backend() {
  local dir="$TMP/jouri-sync-backend"
  rm -rf "$dir"
  mkdir -p "$dir"
  (cd "$ROOT/backend" && tar cf - --exclude=node_modules --exclude=dist .) | (cd "$dir" && tar xf -)
  cp "$ROOT/backend/Dockerfile" "$dir/Dockerfile"
  printf '%s\n' 'node_modules' 'dist' '.env' > "$dir/.dockerignore"

  git checkout --orphan sync-backend-tmp 2>/dev/null || {
    git branch -D sync-backend-tmp 2>/dev/null || true
    git checkout --orphan sync-backend-tmp
  }
  git rm -rf . 2>/dev/null || true
  find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
  cp -a "$dir"/. .
  git add -A
  git commit -m "deploy: sync backend from main ($(date -u +%Y-%m-%d))"
  git push -u origin sync-backend-tmp:backend --force
  git checkout "$CURRENT_BRANCH"
  git branch -D sync-backend-tmp
  echo "Pushed origin/backend"
}

sync_frontend
sync_backend
echo "Done. Easypanel: branch frontend + backend, build path empty, ports 3000 / 4000."
