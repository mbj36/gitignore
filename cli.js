#!/usr/bin/env node
'use strict';

var writeFile = require('fs').writeFile;

var gitignore = 'hello';

writeFile(`${process.cwd()}/.gitignore`, gitignore, function(err) {
  console.log(`${process.cwd()}/.gitignore`);
  if (err) {
    console.log(err);
  } else {
    console.log('Created .gitignore in your cwd');
  }
});
