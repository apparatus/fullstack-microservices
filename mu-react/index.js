var path = require('path')
var browserify = require('browserify')
var babelify = require('babelify')
var css = require('./css-modules')
var opts = {
  plugins: [[require('babel-plugin-transform-es2015-modules-commonjs'), {strict: false, loose: true}]],
  presets: [require('babel-preset-react')]
}
var builtins = {_process: require('browserify/lib/builtins')._process}

// doesn't matter that cache isn't intelligent like LRU, 
// because each service will require mu-react so the caching
// is spread across services, services will often only make
// one component, even if they make 30 components, no need for
// intelligent caching.
var cache = new Map()


// todo bundle, browersify/babelify

function transform(file, props, cb) {
  if (typeof props === 'function') {
    cb = props 
    props = undefined
  }
  if (cache.has(file)) {
    return cb(null, make(cache.get(file), props))
  }


browserify(file, {debug: true, builtins: builtins, standalone: path.basename(file)})
  .transform(babelify, opts)
  .bundle(function (err, code) {
    if (err) { return cb(err) }
    code += ''
    cache.set(file, code)
    cb(null, make(code, props))
  })
}

function make(code, props) {
  var cmp = {component: code}
  if (typeof props !== 'undefined') {
    cmp.props = props
  }
  return cmp
}

transform.css = css


module.exports = transform