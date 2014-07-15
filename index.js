#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var _ = require("lodash");

function getUserHome () {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

var fanplayr = {};

var aws = fanplayr.aws = {
  credentials: {}
};

var aws_file = process.env['FP_AWS_JSON'];
if ( aws_file && fs.existsSync(aws_file) ) {
  var data = JSON.parse(fs.readFileSync(aws_file, { encoding: 'utf8'}));
  if ( data.credentials ) {
    _.forEach(data.credentials, function ( obj, name ) {
      aws.credentials[name] = {
        key: obj.key,
        secret: obj.secret
      };
    });
  }
}

module.exports = fanplayr;
