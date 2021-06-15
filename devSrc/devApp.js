/* eslint-disable global-require */

/* ---------------------------------------------------------------------------------------
------ Modules */
const install = require('./install');
const configFilter = require('./configFilter');
const setScripts = require('./setScripts');
const preinstall = require('./preinstall');
/* ---------------------------------------------------------------------------------------
------ Main */
module.exports = async (installOrNo) => {
  if (installOrNo === true) {
    // set scripts
    await setScripts();

    // pre-installation
    await preinstall();

    // main dev dependencies installtion
  }
  const action = installOrNo === true ? 'install' : 'uninstall';
    // cowsay
    // eslint-disable-next-line global-require
    // eslint-disable-next-line import/no-extraneous-dependencies
    const cowsay = require('cowsay');
    process.stdout.write(
      cowsay.say({
        text: `${action}ing development dependencies...\n\tDO NOT PANICK!`,
        e: 'oO',
        T: 'U ',
      })
    );
  

  // set dev devependicies to install and
  // checks if there is an existing package configurations already
  const configurations = installOrNo
    ? configFilter(['eslint', 'prettier', 'babel'])
    : ['eslint', 'prettier', 'babel'];

  // const result = await Promise.all(configurations.map(install));
  const result = [];
  for (let i = 0; i < configurations.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    result.push(await install(configurations[i]));
  }

  

  if (result.length === 0) {
    process.stdout.write(
      `\nDevelopment dependencies are already ${action}led!\n`
    );
  } else {
    const timeElapsed = result.reduce((a, b) => a + b) / 1000;
    process.stdout.write(`\n[M]Time elapsed: ${timeElapsed} seconds\n`);
    process.stdout.write(`Dependencies successfully ${action}led!\n`);
  }
};
