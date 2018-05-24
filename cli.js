const writeFile = require('fs').writeFile;

const gitignore = `
node_modules
`;

writeFile(`${__dirname}/.gitignore`, gitignore, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Created .gitignore in your cwd');
  }
});
