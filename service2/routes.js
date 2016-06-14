var mu = require('mu')()
var http = require('mu/transports/http');

mu.route('*', http);

http.listen({
  host: process.env.SERVICE_HOST, 
  port: process.env.SERVICE_PORT
});

module.exports = mu;
