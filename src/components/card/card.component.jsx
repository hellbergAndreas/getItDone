import React from "react"
import AddTask from "../add-task/add-task.component"
import Task from "../task/task.component"
import { connect } from "react-redux"
import "./card.styles.scss"

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true
    }
  }
  componentDidUpdate() {}
  handleClick = () => {
    this.setState(state => {
      return { hidden: !state.hidden }
    })
  }
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <h1 className="card__header__h1">{this.props.stage}</h1>
          <button className="card__header__button">v</button>
        </div>
        <Task stage={this.props.stage} />
        <div className="card__content"></div>
        <div className="card__footer">
          {this.state.hidden ? null : <AddTask stage={this.props.stage} />}
          <button onClick={this.handleClick} className="card__footer__btn">
            add a task
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(Card)
