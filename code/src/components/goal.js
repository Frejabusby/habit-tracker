import React from "react"
import Day from "./day"
import "./goal.css"

class Goal extends React.Component {

  removeGoal = event => {
    event.preventDefault()
    this.props.handleRemoveGoal(this.props.index)
  }

  render() {
    return (
      <div className="goal-container">
        <h2 className="goal-text">{this.props.text}</h2>
        <div className="day-container">
          <h3>Monday</h3>
          <h3>Tuesday</h3>
          <h3>Wednesday</h3>
          <h3>Thursday</h3>
          <h3>Friday</h3>
          <h3>Saturday</h3>
          <h3>Sunday</h3>
          {this.props.days.map((day, index) => <Day
            key={index}
            done={day}
            dayCheck={this.handleDayChecked}
            clickEvent={() => this.props.clickEvent(this.props.index, index)} />)}
        </div>
        <button className="remove-button" onClick={this.removeGoal}>Remove</button>
      </div>
    )
  }
}
export default Goal
