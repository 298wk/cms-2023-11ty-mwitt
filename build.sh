#!/bin/sh
npx sass ./src/sass/style.scss ./dist/style.css
cp -R ./src/favicons ./dist/
cp -R ./src/images ./dist/
cp -R ./src/fonts ./dist/
npx esbuild ./src/js/main.js --bundle --outfile=./dist/js/main.js  --minify
npx @11ty/eleventy --serve

