module.exports = function muReact(mu, React, cfg) {
  var cfg = cfg || {}
  var componentPattern = cfg.componentPattern || function (name) {
    return {role: name, cmd: 'component'}
  }
  var stylePattern = cfg.stylePattern || function (name) {
    return {role: cfg.theme || 'theme', cmd: name}
  }
  var componentNameMapper = cfg.componentNameMapper || function (pattern) {
    return pattern.role[0].toUpperCase() + pattern.role.slice(1)
  }
  var styleNameMapper = cfg.styleNameMapper || function (pattern) {
    return pattern.cmd
  }
  function create (cmp) {
    var c 
    var m = {exports: {}}
    var initialProps = cmp.props
    Function('module', 'exports', cmp.component)(m, m.exports)
    c = (m.exports.__esModule) ? m.exports.default : m.exports
    c = c({React: React, mu: mu})
    return function (props) {
      return React.createElement(c, Object.assign({}, initialProps, props))
    }
  }
  function components (deps, cb) {
    var count = 0
    var max = deps.length
    var cmps = {}
    function incr () { if (++count >= max) { cb(cmps) } }

    deps.map(componentPattern).forEach(function (pattern) {
      mu.act(pattern, function (err, cmp) {
        if (err) {
          cmps[componentNameMapper(pattern)] = {component: create('module.exports = function () { return React.createElement("div", null, "Error ' + JSON.stringify(err) + '") }')}
          incr()
          return
        }
        cmps[componentNameMapper(pattern)] = create(cmp)
        incr()
      })
    })
  }

  function styles(deps, cb) { 
    var count = 0
    var max = deps.length
    var styles = {}
    function incr () { if (++count >= max) { cb(styles) } }

    deps.map(stylePattern).forEach(function (pattern) {
      mu.act(pattern, function (err, style) {
        if (err) {
          styles[styleNameMapper(pattern)] = {style: {}, css: '/* unable to load ' + styleNameMapper(pattern) + ' */'}
          incr()
          return
        }
        styles[styleNameMapper(pattern)] = style
        incr()
      })
    })
  }

  function fetch (deps, cb) {
    if (Array.isArray(deps)) { 
      components(deps, cb)
      return
    }
    var result = {}
    var count = 0
    var max = ('components' in deps) + ('styles' in deps)
    if (!max) { throw Error('No deps!') }
    if ('components' in deps) {
      components(deps.components, function (res) {
        result.components = res
        count += 1
        if (count === max) {
          cb(result)
        }
      })
    }
    if ('styles' in deps) {
      styles(deps.styles, function (res) {
        result.styles = res
        count += 1
        if (count === max) {
          cb(result)
        }
      })
    }
  }

  fetch.create = create
  fetch.components = components
  fetch.styles = styles

  return fetch
}