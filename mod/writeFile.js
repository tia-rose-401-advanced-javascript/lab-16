'use strict';

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

module.exports = writeFile;




// fs.writeFile(file, Buffer.from(text), (data) => { //my attempt at promise write file
//   return new Promise ((resolve, reject) => {
//     if(!file) reject(new Error('no file passed'));
//     resolve(text);
//   });
// });