#!/usr/bin/env node
'use strict';

var writeFile = require('fs').writeFile;

var gitignore = `
.DS_Store 
node_modules
/dist

# local env files
.env.local
.env.*.local
.env

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log.*
*.log

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*

log
`;

writeFile(`${process.cwd()}/.gitignore`, gitignore, function(err) {
  console.log(`${process.cwd()}/.gitignore`);
  if (err) {
    console.log(err);
  } else {
    console.log('Created .gitignore in your cwd');
  }
});
