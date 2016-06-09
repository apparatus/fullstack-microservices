Polymer({
  is: ':role',
   properties: {
    entries: {
      type: Array,
      value: [],
      notify: true
    }
  },
  ready: function () {
    var cmp = this;
    cmp.add({role: 'activity', cmd: 'entry'}, function (args, cb) {
      var info = args.info;

      cmp.push('entries', {
        service: info.service,
        action: info.action, 
        result: JSON.stringify(args.result, null, 2)
      });

      cb();
    });
  }
});