#!/bin/bash
set -e

echo "Building the app..."
npm run build

echo "Removing the old docs folder..."
rm -rf docs

echo "Copying build folder to docs..."
cp -r dist docs

echo "Adding docs folder to git..."
git add docs

echo "Committing the update..."
git commit -m "Deploy: update docs folder with latest build"

echo "Pushing changes to GitHub..."
git push

echo "Deployment complete."
