import React from "react"
import { connect } from "react-redux"
import { addTask } from "../../redux/task-reducer/task-actions"

import "./add-task.styles.scss"
import { addTaskDocument } from "../../firebase/firebase.utils"

class AddTask extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headerTerm: "",
      descriptionTerm: ""
    }
  }

  handleChange = e => {
    switch (e.target.id) {
      case "header":
        this.setState({ headerTerm: e.target.value })
        break
      case "description":
        this.setState({ descriptionTerm: e.target.value })
        break
    }
  }
  handleSubmit = e => {
    addTaskDocument("taskCollection", {
      header: this.state.headerTerm,
      description: this.state.descriptionTerm,
      stage: this.props.stage
    })
    this.setState({ headerTerm: "", descriptionTerm: "" })
  }
  componentDidUpdate() {}

  render() {
    return (
      <div className="container">
        <div className="container__form">
          what to do
          <input
            className="cointaner__form__header target"
            id="header"
            value={this.state.headerTerm}
            onChange={this.handleChange}
            type="text"
          ></input>
          how to do
          <input
            className="cointaner__form__description description"
            id="description"
            value={this.state.descriptionTerm}
            onChange={this.handleChange}
            type="text"
          ></input>
          <button
            className="container__form__button button"
            onClick={this.handleSubmit}
          >
            add this task
          </button>
        </div>
      </div>
    )
  }
}

const addDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
})
export default connect(null, addDispatchToProps)(AddTask)
