'use strict'

var fs = require('fs')
var seneca = require('seneca')()
var css = require('mu-react').css('./styles')

seneca.add({role: 'theme', cmd: 'app'}, function(args, callback) {
  css('app.css', callback)
})

seneca.add({role: 'theme', cmd: 'service'}, function(args, callback) {
  css('service.css', callback)
})

seneca.add({role: 'theme', cmd: 'activity'}, function(args, callback) {
  css('activity.css', callback)
})

seneca.listen({
  host: process.env.SERVICE_HOST, 
  port: process.env.SERVICE_PORT
})

module.exports.seneca = seneca
