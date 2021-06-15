/* ---------------------------------------------------------------------------------------
------ Dependencies */
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
/* ---------------------------------------------------------------------------------------
------ Modules */
const { timer } = require('./lib');
const { appConfig } = require('./lib');
/* ---------------------------------------------------------------------------------------
------ Main */
const installation = (config) =>
  new Promise((resolve, reject) => {
    const installOrNo = process.argv[2] !== '-u';

    const configFilePath = path.resolve(
      __dirname,
      '..',
      appConfig[config].filename
    );
    if (installOrNo === true) {
      fs.writeFileSync(
        configFilePath,
        JSON.stringify(appConfig[config].config, null, 2)
      );
    } else {
      // eslint-disable-next-line no-unused-expressions
      fs.existsSync(configFilePath) && fs.unlinkSync(configFilePath);
    }

    const action = installOrNo ? 'install' : 'uninstall';

    const perform = cp.spawn('npm.cmd', [
      action,
      '-D',
      ...appConfig[config].dependencies,
    ]);

    perform.on('close', () => {
      resolve();
    });
    perform.on('error', (err) => {
      process.stdout.write(err);
      reject();
    });
  });

module.exports = async (config) =>
  new Promise((resolve) => {
    timer(installation, config)().then(resolve);
  });
