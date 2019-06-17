'use strict';

const events = require('./emit');

function log(event){
  let time = new Date();
  console.log({event, time});
}

events.on('log', log);
