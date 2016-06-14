'use strict';

var mu = require('mu')(require('./routes'));
var cmp = require('./component');

mu.define({ns: 'service1', cmd: 'component'}, function(args, callback) {
  callback(null, cmp(args));
});

mu.define({ns: 'service1', cmd: 'action1'}, function(args, callback) {
  callback(null, {data: 'data'});
});

mu.define({ns: 'service1', cmd: 'action2'}, function(args, callback) {
  callback(null, {data: 'data'});
});
