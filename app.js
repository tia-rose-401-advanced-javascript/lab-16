'use strict';

const fs = require('fs');
const read = require('./mod/readFile');
const write = require('./mod/writeFile');
const upper =require('./mod/upper');

/**
 *@param {Object} file
 * @desc Alters any file that is passed through, changing all of its contents to uppercase.
 */

const alterFile = (file) => {
  read(file)
    .then(data => {
      write(file, Buffer.from(upper(data)))
    })
    .then(console.log(`${file} saved`))
  };

let file = process.argv.slice(2).shift();
alterFile(file);

