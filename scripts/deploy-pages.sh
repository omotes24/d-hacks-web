#!/usr/bin/env bash
# Builds the prototype and publishes dist/ to the gh-pages branch of this repository
# (omotes24/d-hacks-web), which GitHub Pages serves at https://omotes24.github.io/d-hacks-web/.
# It refuses to run against any other remote, so it can never push to the lab's repository.
set -euo pipefail
cd "$(dirname "$0")/.."
root=$(pwd)
origin=$(git remote get-url origin)
case "$origin" in
  *omotes24/d-hacks-web*) ;;
  *) echo "origin is $origin, not omotes24/d-hacks-web. Stopping." >&2; exit 1 ;;
esac

# The research list comes from the lab server's API, which does not answer cross-origin
# requests, so the prototype reads a copy saved at build time.
curl -fsS --retry 3 https://d-hacks.jn.sfc.keio.ac.jp/api/research-items -o public/research-items.json \
  || echo '{"success":false,"data":[]}' > public/research-items.json

BASE_PATH=/d-hacks-web/ VITE_PROTOTYPE=1 VITE_API_ORIGIN=https://d-hacks.jn.sfc.keio.ac.jp \
  VITE_RESEARCH_JSON=research-items.json npm run build
touch dist/.nojekyll

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
cp -R dist/. "$tmp"
cd "$tmp"
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C "$root" config user.name)" -c user.email="$(git -C "$root" config user.email)" \
  commit -q -m "Deploy $(git -C "$root" rev-parse --short HEAD)"
git push -f "$origin" gh-pages
echo "Published: https://omotes24.github.io/d-hacks-web/"
