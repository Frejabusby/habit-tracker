import React from "react"

class Weekday extends React.Component {
  render() {
    return(
      <div>
      <h1>{this.props.day}</h1>
      </div>
    )
  }
}

export default Weekday
