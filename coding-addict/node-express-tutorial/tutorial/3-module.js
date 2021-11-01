// CommonJS, every file is a module ( by default )
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-approach');
require('./7-mind-grenade');

console.log(data);


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);