import React from "react"
import { connect } from "react-redux"
import {
  firestore,
  converCollectionsSnapshotToMap
} from "../../firebase/firebase.utils"
import { updateTasks } from "../../redux/task-reducer/task-actions"
import "./task.styles.scss"

class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  unsubscribeFromSnapshot = null
  componentDidMount() {
    const collectionRef = firestore.collection("taskCollection")
    collectionRef.onSnapshot(async snapshot => {
      const tasks = converCollectionsSnapshotToMap(snapshot)

      this.props.updateTasks(tasks)
    })
  }
  render() {
    const theTasks = this.props.tasks.tasks
    return (
      <div>
        {theTasks
          .filter(task => task.stage === this.props.stage)
          .map(el => {
            return (
              <div className="task">
                <h1 className="task__header">{el.header}</h1>
                <span className="task__body">{el.description}</span>
                <div className="buttons">
                  <button>on it</button>
                  <button>done it</button>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})
const mapDispatchToProps = dispatch => ({
  updateTasks: tasks => dispatch(updateTasks(tasks))
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
