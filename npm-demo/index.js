var _ = require('underscore');

// Steps used to resolve a module
// 1. Core module
// 2. File or folder
// 3. node_modules

var result = _.contains([1,2,3], 2);

console.log(result);