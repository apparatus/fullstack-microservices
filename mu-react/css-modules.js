var Loader = require('css-modules-loader-core/lib/file-system-loader.js')

function css(cssDir) {
  var styles = new Loader(cssDir)
  return function (file, cb) {
    console.log(file)
    styles.fetch(file, '/')
      .then(function (tokens) {
        cb(null, {styles: tokens, css: styles.finalSource})
      })
     .catch(cb)    
  }

}

module.exports = css