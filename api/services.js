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

    server.route({
      method: 'GET',
      path: '/{role}/{cmd}',
      handler: function(req, reply) {
        seneca.act({role: req.params.role, cmd: req.params.cmd}, function(err, res) {
          if (err) {
            reply(Boom.wrap(err, !isNaN(err.code) ? err.code : 400, err.message));
            return
          }
          reply(res);
        });
      }
    });

  });
};
