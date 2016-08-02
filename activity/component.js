export default ({React, mu: {add, act}}) => (props) => (
  <div className={props.styles.panel}>
    <div className={props.styles.header}>
      <h3 className={props.styles.title}>Activity</h3>
    </div>
    <div className={props.styles.body}>
      {
        props.entries.map((entry) => (
          <div className={props.styles.list}> 
            <a href="#" className={props.styles.item}> 
              <h4 className={props.styles.itemHeading}> 
                {entry.service} {entry.action} Poked
              </h4> 
              <pre className={props.styles.itemText}>
                {JSON.stringify(entry.result, null, 2)}
              </pre>
            </a>
          </div>
        ))
      }
    </div>
  </div>
)