// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade'); //We don't need to assign it to a variable
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log(data);