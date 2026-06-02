#!/bin/sh
set -e

echo "Starting Jouri Beauty API..."
echo "PORT=${PORT:-4000}"

if [ -z "${DATABASE_URL:-}" ]; then
  echo "ERROR: DATABASE_URL is not set. Add Postgres in Easypanel and link DATABASE_URL."
  exit 1
fi

echo "Running database migrations..."
npx prisma migrate deploy

echo "Seeding products (idempotent)..."
npx prisma db seed || echo "Seed skipped or already applied."

exec node dist/index.js
