'use strict';

const events = require('./emit');


/**
 *
 * @param {object} event
 * @desc a logger emitter that console.logs the event and the time
 */
function log(event){
  let time = new Date();
  console.log({event, time});
}

events.on('log', log);
