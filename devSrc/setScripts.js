/* ---------------------------------------------------------------------------------------
------ Dependencies */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
/* ---------------------------------------------------------------------------------------
------ Main */
const writeFile = promisify(fs.writeFile);

const packagePath = path.resolve(__dirname, '..', 'package.json');

const packageJson = JSON.parse(fs.readFileSync(packagePath));

packageJson.scripts = {
  start: 'node src',
  dev: 'nodemon --exec babel-node src',
};

module.exports = () =>
  writeFile(packagePath, JSON.stringify(packageJson, null, 2));
