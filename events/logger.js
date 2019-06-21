'use strict';

/** @module logger*/

const events = require('./emit');

/**
 * @param {string} event
 * @desc a logger emitter that console.logs the event and the time
 */
function logError(event){
  let time = new Date();
  console.log({event, time});
}

events.on('log', logError);
