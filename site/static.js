'use strict';

module.exports = function(server) {
  server.register(require('inert'), function (err) {
    if (err) { throw err; }

    server.route({
      method: 'GET',
      path: '/public/css/{param}',
      handler: {
        directory: {
          path: __dirname + '/public/css',
          listing: false
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/public/js/{param}',
      handler: {
        directory: {
          path: __dirname + '/public/js',
          listing: false
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/public/bootstrap/{param*}',
      handler: {
        directory: {
          path: __dirname + '/public/bootstrap',
          listing: false
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/public/img/{param}',
      handler: {
        directory: {
          path: __dirname + '/public/img',
          listing: false
        }
      }
    });
  });
};
