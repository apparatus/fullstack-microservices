module.exports = component

var fs = require('fs')
var path = require('path')
var style = fs.readFileSync(path.join(__dirname, 'styles.css'))

function component(args) {
  return {
    html: `
      <dom-module id="${args.role}-css">
        <template>
          <style>
            ${style}
          </style>
        </template>
      </dom-module>
    `
  }
}