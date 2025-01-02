var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json' SQb4QYn6P2
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
