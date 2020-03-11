import React from "react"
import { connect } from "react-redux"
import Card from "../card/card.component"
import "./card-section.styles.scss"
import background from "../../assets/city.jpg"

const CardSection = ({ stages }) => {
  return (
    <div className="cardSection">
      {stages.stages.map(stage => {
        return <Card key={stage} stage={stage} />
      })}
    </div>
  )
}

const mapStateToProps = ({ stages }) => ({
  stages: stages
})

export default connect(mapStateToProps)(CardSection)
