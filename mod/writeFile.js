'use strict';

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

module.exports = writeFile;


//Instructions said we can use util.promisify but in case we can't have the code below to fal back on

// fs.writeFile(file, Buffer.from(text), (data) => { //my attempt at promise write file
//   return new Promise ((resolve, reject) => {
//     if(!file) reject(new Error('no file passed'));
//     resolve(text);
//   });
// });