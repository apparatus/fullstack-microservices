export default ({React, mu: {add, act}}) => {
  class Service2 extends React.Component {
    action(act, n) {
      act({role: 'service2', cmd: 'action' + n}, (err, result) => {
        act({
          role: 'activity', 
          cmd: 'entry', 
          info: {service: 'Service 2', action: 'Action ' + n},
          result: result
        })
      })
    }
    render() {
      var styles = this.props.styles
      return (
        <div className={styles.panel}>
          <div className={styles.header}>
            <h3 className={styles.title}>{this.props.name}</h3>
          </div>
          <div className={styles.body}>
            <div className={styles.list}>
              <button className={styles.item} onClick={() => this.action(act, 1)}>
                Action 1
              </button>
              <button className={styles.item}  onClick={() => this.action(act, 2)}>
                Action 2
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
  return Service2
}