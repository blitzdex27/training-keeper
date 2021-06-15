
const devApp = require('./devApp')
/* ---------------------------------------------------------------------------------------
------ Main */
const installOrNo = process.argv[2] !== '-u'
devApp(installOrNo)
