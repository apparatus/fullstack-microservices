'use strict';

var seneca = require('seneca')();

var cmp = require('./component');

seneca.add({role: 'service1', cmd: 'component'}, function(args, callback) {
  callback(null, cmp(args));
});

seneca.add({role: 'service1', cmd: 'action1'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.add({role: 'service1', cmd: 'action2'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});

module.exports.seneca = seneca;
