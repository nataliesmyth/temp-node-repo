// Modules - encapsulated code that only share the minimum amount of data necessary for the application to function
// In CommonJS, every file is a module by default
const names = require('./3-names-module')
const sayHi = require('./4-utils-module')
const data = require('./6-alt-export-methods')
require('./7-mind-grenade')
sayHi('susan')
// john and peter are in the names file
sayHi(names.john)
sayHi(names.peter)