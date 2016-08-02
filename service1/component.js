export default ({React, mu: {add, act}}) => (props) => (
  <div className={props.styles.panel}>
    <div className={props.styles.header}>
      <h3 className={props.styles.title}>{props.name}</h3>
    </div>
    <div className={props.styles.body}>
      <div className={props.styles.list}>
        <button className={props.styles.item} onClick={() => action(act, 1)}>
          Action 1
        </button>
        <button className={props.styles.item} onClick={() => action(act, 2)}>
          Action 2
        </button>
      </div>
    </div>
  </div>
)

function action(act, n) {
  act({role: 'service1', cmd: 'action' + n}, (err, result) => {
    act({
      role: 'activity', 
      cmd: 'entry', 
      info: {service: 'Service 1', action: 'Action ' + n},
      result: result
    })
  })
}