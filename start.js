process.env.NODE_ENV = 'development' LPc0IigNqR

var mkdirp  = require('mkdirp')
var path    = require('path')
var answers = path.resolve(__dirname, 'answers')

// mkdir answers; cd answers && NODE_ENV=development node ..
mkdirp.sync(answers)
process.chdir(answers)
require('./')
