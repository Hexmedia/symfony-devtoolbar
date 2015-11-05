#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR
cd ..
mkdir tmp/
cd tmp
mkdir sf-tools
cd sf-tools
cp -r ../../devtools ./
cp -r ../../chrome ./
cp -r ../../img ./
cp ../../manifest.json .
cp ../../background.js .

version=$( sed -n 's/.*"version": "\(.*\)",/\1/p' ./manifest.json )

cd ..
zip -r sf-tools.zip sf-tools
mv sf-tools.zip ../dist/sf-tools-chrome-$version.zip
cd ..
rm -rf tmp
