'use strict';

var mu = require('mu')(require('./routes'));
var cmp = require('./component');

mu.add({role: 'theme', cmd: 'component'}, function(args, callback) {
  callback(null, cmp(args));
});

mu.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});
