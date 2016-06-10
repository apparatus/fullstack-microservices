'use strict';

var seneca = require('seneca')();
var cmp = require('./component');

seneca.add({role: 'theme', cmd: 'component'}, function(args, callback) {
  callback(null, cmp(args));
});

seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});

module.exports.seneca = seneca;
