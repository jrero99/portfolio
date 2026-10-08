#!/usr/bin/env bash
# Build the portfolio and deploy it to Firebase Hosting.
#
# Usage:
#   ./scripts/deploy.sh                # deploy to the project in .firebaserc
#   ./scripts/deploy.sh <project-id>   # first time: link the Firebase project, then deploy
#
# Uses firebase-tools through npx, so no global install is needed.

set -euo pipefail

cd "$(dirname "$0")/.."

FIREBASE=(npx --yes firebase-tools@latest)
PROJECT_ID="${1:-}"

step() { printf '\n\033[1;34m▸ %s\033[0m\n' "$1"; }

# Deploying uncommitted work is allowed, but make it visible
if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  printf '\033[33m⚠ There are uncommitted changes; they will be deployed too.\033[0m\n'
fi

step "Checking Firebase login"
# No-op when already logged in; opens the browser otherwise
"${FIREBASE[@]}" login

step "Checking Firebase project"
if [ -n "$PROJECT_ID" ]; then
  printf '{\n  "projects": {\n    "default": "%s"\n  }\n}\n' "$PROJECT_ID" > .firebaserc
  echo "Linked to project: $PROJECT_ID (saved in .firebaserc)"
elif [ ! -f .firebaserc ]; then
  echo "No Firebase project linked yet. Pick one:"
  "${FIREBASE[@]}" use --add
else
  echo "Using project from .firebaserc"
fi

if [ ! -d node_modules ]; then
  step "Installing dependencies"
  npm ci
fi

step "Building"
npm run build

step "Deploying to Firebase Hosting"
"${FIREBASE[@]}" deploy --only hosting

printf '\n\033[1;32m✔ Deployed. Live at https://javirero.dev\033[0m\n'
