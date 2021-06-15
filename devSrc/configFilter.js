/* ---------------------------------------------------------------------------------------
------ Dependencies */
const fs = require('fs');
const path = require('path');
/* ---------------------------------------------------------------------------------------
------ Modules */
const { appConfig } = require('./lib');
/* ---------------------------------------------------------------------------------------
------ Main */
module.exports = (configurations) =>
  configurations.filter((config) => {
    const configPath = path.resolve(
      __dirname,
      '..',
      appConfig[config].filename
    );

    

    if (fs.existsSync(configPath) === false) {
      return true;
    }

    const specificConfig = JSON.stringify(fs.readFileSync(configPath, 'UTF-8'))
      .replace(/\\n|\\r|\\/g, '')
      .replace(/ /g, '');

    if (
      JSON.stringify(appConfig[config].config) !==
      specificConfig.slice(1, specificConfig.length - 1)
    ) {
      return true;
    }
    return false;
  });
