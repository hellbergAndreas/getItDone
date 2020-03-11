import React from "react"
import { connect } from "react-redux"
import {
  firestore,
  converCollectionsSnapshotToMap
} from "../../firebase/firebase.utils"
import { updateTaskDocument } from "../../firebase/firebase.utils"
import { updateTasks } from "../../redux/task-reducer/task-actions"
import "./task.styles.scss"

class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  // unsubscribeFromSnapshot = null
  componentDidMount() {
    const collectionRef = firestore.collection("taskCollection")
    collectionRef.onSnapshot(async snapshot => {
      const tasks = converCollectionsSnapshotToMap(snapshot)

      this.props.updateTasks(tasks)
    })
  }
  handleClick(id, e) {
    console.log(e.target.id)
    updateTaskDocument("taskCollection", id, e.target.id)
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
                <div className="task__header">
                  <h1 className="task__header__header">{el.header}</h1>
                  <button
                    onClick={e => this.handleClick(el.id, e)}
                    id="delete"
                    classname="deleteBtn task__header__delete"
                  >
                    x
                  </button>
                </div>
                <span className="task__body">{el.description}</span>
                <div className="buttons">
                  <button
                    className="btn"
                    id={`I'm on it!`}
                    onClick={e => this.handleClick(el.id, e)}
                  >
                    on it
                  </button>
                  <button
                    className="btn"
                    id={"this shit is done!"}
                    onClick={e => this.handleClick(el.id, e)}
                  >
                    done it
                  </button>
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
