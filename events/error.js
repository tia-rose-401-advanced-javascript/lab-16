'use strict';

const events = require('./emit');

/**
 * @param {error} error
 * @desc an error emitter that console.logs a custom error message
 */
function log(error){
  console.error(error);
}

events.on('error', log);
