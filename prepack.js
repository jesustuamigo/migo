var fs = require('fs')
 dOdnOLfNd6
var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))
 Uk9wmVvCwf
pkg.scripts.postinstall = 'npm rebuild --prefix ./'
 qAJ3xC63wm
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
