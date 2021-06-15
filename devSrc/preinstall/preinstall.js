const { timer } = require('../lib');
const installCowsay = require('./installCowsay');

module.exports = (config) =>
  new Promise((resolve, reject) => {
    if (config === 'cowsay') {
      timer(installCowsay, config)().then(resolve);
    } else {
      reject();
    }
  });
