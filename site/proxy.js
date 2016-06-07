var url = require('url');

module.exports = function(server) {
  server.register(require('h2o2'), function(err) {
    if (err) { throw err; }

    server.route({
      method: '*',
      path: '/api/{path*}',
      handler: {
        proxy: {
          passThrough: true,
          redirects: 5,
          mapUri: function(req, cb) {
            var uri = {
              protocol: 'http',
              hostname: process.env.PROXY_HOST,
              port: process.env.api_PORT,
              pathname: req.params.path
            };
            cb(null, url.format(uri));
          }
        }
      }
    });
  });
}
