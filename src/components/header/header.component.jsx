import React from "react"
import Searchbar from "../searchbar/searchbar.component"
import "./header.styles.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h2 className="header__content__logo">Get your Shit together!</h2>
        <Searchbar />
        <div className="header__content__plus">I am a big plus</div>
      </div>
    </div>
  )
}

export default Header
