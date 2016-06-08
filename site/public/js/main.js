!function () {
  var seneca = lucius({get: true});

  function assemble(cb) {
    var count = 0
    function done() { if (++count > 2) cb(); }
    function error(e) { return '<p> Error: ' + e.msg + '</p>'; }

    seneca.act({role: 'service1', cmd: 'component'}, function (err, res) {
      var cmp = res.result;
      $('#s1-wrap').html(res.err ? error(res.err) : cmp.html);
      done();
    });

    seneca.act({role: 'service2', cmd: 'component'}, function (err, res) {
      var cmp = res.result;
      $('#s2-wrap').html(res.err ? error(res.err) : cmp.html);
      done();
    });

    seneca.act({role: 'activity', cmd: 'component'}, function (err, res) {
      var cmp = res.result;
      $('#activity-wrap').html(res.err ? error(res.err) : cmp.html);
      done();
    });
  }

  seneca.add({role: 'activity', cmd: 'entry'}, function (args, cb) {
    var result = args.result;
    var info = args.info;
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
    $('#output').prepend(entry);
    cb();
  })

  assemble(function (err) {
    $('#s1a1').click(function() {
      seneca.act({role: 'service1', cmd: 'action1'}, function (err, result) {
        seneca.act({
          role: 'activity', 
          cmd: 'entry', 
          info: $('#s1a1').data(),
          result: result
        });
      });
    });

    $('#s1a2').click(function() {
      seneca.act({role: 'service1', cmd: 'action2'}, function (err, result) {
        seneca.act({
          role: 'activity', 
          cmd: 'entry', 
          info: $('#s1a2').data(),
          result: result
        });
      });
    });

    $('#s2a1').click(function() {
      seneca.act({role: 'service2', cmd: 'action1'}, function (err, result) {
        seneca.act({
          role: 'activity', 
          cmd: 'entry', 
          info: $('#s2a1').data(),
          result: result
        });
      });
    });

    $('#s2a2').click(function() {
      seneca.act({role: 'service2', cmd: 'action2'}, function (err, result) {
        seneca.act({
          role: 'activity', 
          cmd: 'entry', 
          info: $('#s2a2').data(),
          result: result
        });
      });
    });
  });
}();
