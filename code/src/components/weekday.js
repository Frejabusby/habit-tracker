import React from "react"
import "./weekday.css"

class Weekday extends React.Component {
  render() {
    return(
      <div className="weekday-item">
        <p>{this.props.day}</p>
        <div className="item-box"></div>
      </div>
    )
  }
}

export default Weekday
