var fs = require('fs') 2QJBPKN0jp

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

delete pkg.scripts.postinstall sn0iTWUbd3

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
