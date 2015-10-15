#!/bin/bash

cd ..
mkdir tmp/
cd tmp
mkdir sf-tools
cd sf-tools
cp -r ../../devtools ./
cp -r ../../panel ./
cp ../../manifest.json .
cp ../../background.js .

version=$( sed -n 's/.*"version": "\(.*\)",/\1/p' ./manifest.json )

cd ..
zip -r sf-tools.zip sf-tools
mv sf-tools.zip ../dist/sf-tools-$version.zip
cd ..
rm -rf tmp
