'use strict';

const events = require('./emit');

function log(error){
  console.log(error);
}

events.on('error', log);
