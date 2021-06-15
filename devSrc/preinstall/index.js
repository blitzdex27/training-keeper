/* eslint-disable no-console */
/* ---------------------------------------------------------------------------------------
------ Dependencies */
const fs = require('fs');
const path = require('path');
/* ---------------------------------------------------------------------------------------
------ Modules */
const preinstall = require('./preinstall');
/* ---------------------------------------------------------------------------------------
------ Main */
const preConfigurations = ['cowsay'];
const preInstallation = preConfigurations.filter((config) => {
  if (
    fs.existsSync(path.resolve(__dirname, '..', '..', 'node_modules', config))
  ) {
    return false;
  }
  return true;
});

module.exports = () =>
  new Promise((resolve, reject) => {
    Promise.all(preInstallation.map(preinstall)).then(
      (preinstallationResult) => {
        if (preinstallationResult.length === 0) {
          console.log('Development pre-dependencies are already installed!');
          resolve();
        } else {
          const timeElapsed =
            preinstallationResult.reduce((a, b) => a + b) / 1000;
          console.log(`[P]Time elapsed: ${timeElapsed} seconds`);
          console.log('Pre-dependencies are installed!');
          resolve();
        }
        reject();
      }
    );
  });
