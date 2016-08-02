'use strict';
var Boom = require('boom')

module.exports = function(server) {
  server.register(require('chairo'), function(err) {
    var seneca = server.seneca;

    seneca.client({
      host: process.env.PROXY_HOST,
      port: process.env.service1_PORT,
      pin: 'role:service1'
    });

    seneca.client({
      host: process.env.PROXY_HOST,
      port: process.env.service2_PORT,
      pin: 'role:service2'
    });
    
    seneca.client({
      host: process.env.PROXY_HOST,
      port: process.env.activity_PORT,
      pin: 'role:activity'
    });

    seneca.client({
      host: process.env.PROXY_HOST,
      port: process.env.ui_PORT,
      pin: 'role:ui'
    });

    seneca.client({
      host: process.env.PROXY_HOST,
      port: process.env.theme_PORT,
      pin: 'role:theme'
    });

    server.route({
      method: 'GET',
      path: '/{role}/{cmd}',
      handler: function(req, reply) {
        seneca.act({role: req.params.role, cmd: req.params.cmd}, function(err, res) {
          console.log(err, res)
          if (err) {
            reply(Boom.wrap(err, !isNaN(err.code) ? err.code : 400, err.message));
            return
          }
          reply(res);
        });
      }
    });

    server.route({
      method: 'GET',
      path: '/{role}/{cmd}.js',
      handler: function(req, reply) {
        seneca.act({role: req.params.role, cmd: req.params.cmd}, function(err, res) {
          console.log(err, res)
          if (err) {
            reply(Boom.wrap(err, !isNaN(err.code) ? err.code : 400, err.message));
            return
          }
          reply(res.component);
        });
      }
    });

  });
};
