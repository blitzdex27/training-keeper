
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const appConfigPath = path.resolve(__dirname, '..', 'myApp.config.json');
const appConfig = JSON.parse(fs.readFileSync(appConfigPath));


const timer = (origFunc, config) => {
  const wrapper = async () => {
    const action = process.argv[2] === '-u' ? 'uninstall': 'install'

    process.stdout.write(`\n${action}ing ${config} please wait...`);
    // console.time(config);
    const t0 = performance.now();
    await origFunc(config);
    const t1 = performance.now();
    // console.timeEnd(config);
    return t1 - t0;
  };

  return wrapper;
};

module.exports = { appConfig, timer };
