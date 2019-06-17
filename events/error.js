'use strict';

const events = require('./emit');

function log(error){
  console.error(error);
}

events.on('error', log);
