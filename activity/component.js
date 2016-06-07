module.exports = component

function component(args) {
  return {
    html: `
      <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Activity</h3>
          </div>
          <div id="output" class="panel-body">
          </div>
        </div>
      </div>
    `,
    script: function (jqEl) {

      return function output(info, result) {
        var service = info.service;
        var action = info.action;
        var entry = 
          '<div class="list-group">' +
            '<a href="#" class="list-group-item">' +
              '<h4 class="list-group-item-heading">' +
                service + ' ' + action + ' Poked</h4>' +
              '<pre class="list-group-item-text">' +
                JSON.stringify(result, null, 2) +
              '</pre>' +
            '</a>' +
          '</div>';
        jqEl.prepend(entry);
      }

    }.toString()
    
  }
}