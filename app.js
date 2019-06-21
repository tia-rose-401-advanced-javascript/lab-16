'use strict';

const read = require('./mod/readFile');
const write = require('./mod/writeFile');
const upper =require('./mod/upper');
const event = require('./events/emit');
require('./events/logger');
require('./events/error');

/**
 *@param {Object} file
 * @desc Alters any file that is passed through, changing all of its contents to uppercase.
 */

const alterFile = (file) => {
  read(file)
    .then(data => {
      write(file, Buffer.from(upper(data)));
    })

    
    .then(event.emit('log', 'saved'))
    .catch(error =>{
      event.emit('error', error);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);

