module.exports = component

var fs = require('fs')
var path = require('path')
var template = fs.readFileSync(path.join(__dirname, 'template.html'))
var dependencies = fs.readFileSync(path.join(__dirname, 'dependencies.html'))
var style = fs.readFileSync(path.join(__dirname, 'styles.css'))
var definition = fs.readFileSync(path.join(__dirname, 'definition.js'))

function component(args) {
  return {
    html: `
      ${dependencies}
      <dom-module id="${args.role}-cmp">
        <template>
          <style>
            ${style}
          </style>
          ${template}
        </template>
        <script>
          ${(definition + '').replace(/:role/, args.role + '-cmp')}
        </script>
      </dom-module>
    `
  }
}