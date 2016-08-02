process.emitWarning('this service is for development use only')
var log = require('pino-http')(require('pino-http-print')())
var httpProxy = require('http-proxy')
var http = require('http')
var st = require('st')({
  path: './static', 
  index: 'index.html'
})

var proxy = httpProxy.createServer({
  target: {
    port: process.env.api_PORT,
    host: process.env.SERVICE_HOST,
  }
})


var api = /^\/api/


http.createServer(function (req, res) {
  log(req, res)

  if (api.test(req.url)) {
    req.url = req.url.replace(api, '')
    proxy.web(req, res)
    return
  }
  st(req, res)  
}).listen(process.env.SERVICE_PORT, process.env.SERVICE_HOST)