'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

module.exports = readFile;



// fs.readFile(file, (data) => { //my attempt at promise read file
//   return new Promise ((resolve, reject) => {
//     if(!file) reject(new Error('no file passed'));
//     resolve(file);
//   });
// });

