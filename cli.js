#!/usr/bin/env node
'use strict';
var fs = require('fs');

var gitignore = 'hello';

fs.writeFile(`${__dirname}/.gitignore`, gitignore, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Created .gitignore in your cwd');
  }
});
