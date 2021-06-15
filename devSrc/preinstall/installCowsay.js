/* eslint-disable no-console */
/* ---------------------------------------------------------------------------------------
------ Dependencies */
const cp = require('child_process');

/* ---------------------------------------------------------------------------------------
------ Main */
// eslint-disable-next-line no-unused-vars
module.exports = (config) =>
  new Promise((resolve, reject) => {
    const install = cp.spawn('npm.cmd', ['install', '-D', 'cowsay']);

    install.on('close', () => {
      resolve();
    });
    install.on('error', (err) => {
      console.log(err);
      reject();
    });
  });
