const path = require('path');

// path separator
console.log(path.sep);

// path join
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// path resolve
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
console.log(__dirname);