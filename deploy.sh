#!/usr/bin/env bash

echo "building the new docs folder for github pages"
# ng build
ng build --output-path docs --base-href /colouriser/

# now add any new docs files to the repo
echo "adding docs folder to the repo"

git add -v docs/
git commit -m "Updated docs release for github pages"
echo "committed"

git push
echo "pushed"
