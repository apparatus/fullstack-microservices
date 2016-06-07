!function () {

  function assemble(cb) {
    var count = 0
    var locals = {}
    function done() { if (++count > 2) cb(null, locals); }
    function err(e) { return '<p> Error: ' + e.msg + '</p>'; }

    $.get('/api/service1/component', function(res) {
      var cmp = res.result;
      $('#s1-wrap').html(res.err ? err(res.err) : cmp.html);
      done();
    });

    $.get('/api/service2/component', function(res) {
      var cmp = res.result;
      $('#s2-wrap').html(res.err ? err(res.err) : cmp.html);
      done();
    });

    $.get('/api/activity/component', function(res) {
      var cmp = res.result;
      $('#activity-wrap').html(res.err ? err(res.err) : cmp.html);
      var factory = Function('return ' + cmp.script)();
      locals.output = factory($('#output'));
      done();
    });
  }

  assemble(function (err, locals) {
    var output = locals.output;

    $('#s1a1').click(function() {
      $.get('/api/service1/action1', function(result) {
        output($('#s1a1').data(), result)
      });
    });

    $('#s1a2').click(function() {
      $.get('/api/service1/action2', function(result) {
        output($('#s1a2').data(), result)
      });
    });

    $('#s2a1').click(function() {
      $.get('/api/service2/action1', function(result) {
        output($('#s2a1').data(), result)
      });
    });

    $('#s2a2').click(function() {
      $.get('/api/service2/action2', function(result) {
        output($('#s2a2').data(), result)
      });
    });


  })

}()
