'use strict'

var seneca = require('seneca')()

var muReact = require('mu-react')

seneca.add({role: 'ui', cmd: 'app'}, function(args, callback) {
  muReact('./app.js', callback)
})

seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT})

module.exports.seneca = seneca
