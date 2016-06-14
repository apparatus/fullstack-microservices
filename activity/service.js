'use strict';

var mu = require('mu')(require('./routes'));

var cmp = require('./component');

mu.define({ns: 'activity', cmd: 'component'}, function(args, callback) {
  callback(null, cmp(args));
});