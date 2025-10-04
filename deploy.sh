#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# remove any previous git repo in dist
rm -rf .git

# initialize a temporary git repo
git init -b main
git add -A
git commit -m 'deploy'

# deploy to GitHub Pages
# using SSH:
git push -f git@github.com:benjicwood/poster-creator.git main:gh-pages

# if you prefer HTTPS instead, uncomment:
# git push -f https://github.com/benjicwood/poster-creator.git main:gh-pages

# cleanup
cd -
rm -rf dist/.git

echo "✅ Deployment complete! Your site should be live at https://benjicwood.github.io/poster-creator/"
