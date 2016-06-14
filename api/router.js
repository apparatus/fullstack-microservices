'use strict';
var mu = require('mu')();
var router = require('mu-hapi-router')(mu, {
  api: '/:ns/:cmd',
  method: 'POST'
});

mu.route({ns: 'theme'}, router({
  host: process.env.PROXY_HOST,
  port: process.env.theme_PORT,
}));

mu.route({ns: 'service1'}, router({
  host: process.env.PROXY_HOST,
  port: process.env.service1_PORT,
}));

mu.route({ns: 'service2'}, router({
  host: process.env.PROXY_HOST,
  port: process.env.service2_PORT,
}));

mu.route({ns: 'activity'}, router({
  host: process.env.PROXY_HOST,
  port: process.env.activity_PORT,
}));

module.exports = router;