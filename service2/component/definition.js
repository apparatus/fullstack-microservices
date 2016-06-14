Polymer({
  is: ':ns',
  action1: function () {
    var cmp = this
    cmp.act({ns: 'service2', cmd: 'action1'}, function (err, result) {
      cmp.act({
        ns: 'activity', 
        cmd: 'entry', 
        info: {service: 'Service 2', action: 'Action 1'},
        result: result
      });
    });
  },
  action2: function () {
    var cmp = this
    cmp.act({ns: 'service2', cmd: 'action2'}, function (err, result) {
      cmp.act({
        ns: 'activity', 
        cmd: 'entry', 
        info: {service: 'Service 2', action: 'Action 2'},
        result: result
      });
    });
  }
});