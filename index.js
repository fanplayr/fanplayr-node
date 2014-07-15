#!/usr/bin/env node

function getUserHome () {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

var fanplayr = {};

var aws = fanplayr.aws = {};

console.log(getUserHome());

module.exports = fanplayr;
