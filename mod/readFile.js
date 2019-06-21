'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

module.exports = readFile;



//Instructions said we can use util.promisify but in case we can't have the code below to fal back on

// fs.readFile(file, (data) => { //my attempt at promise read file
//   return new Promise ((resolve, reject) => {
//     if(!file) reject(new Error('no file passed'));
//     resolve(file);
//   });
// });

