'use strict';

process.env.SERVICE_HOST = 'localhost';
process.env.SERVICE_PORT = 3001;

var test = require('tape');
var seneca = require('../service').seneca;



