import React from "react"
import "./searchbar.styles.scss"

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="searchbar">
        <input className="searchbar__input" type="text"></input>
      </div>
    )
  }
}

export default Searchbar
