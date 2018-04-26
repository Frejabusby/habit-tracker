import React from "react"
import Day from "./day"
import "./item.css"

class Goal extends React.Component {

  removeGoal = event => {
    event.preventDefault()
    this.props.handleRemoveGoal(this.props.index)
  }

  render() {
    return (
      <div>
        <form>
          {this.props.days.map((day, index) => {
            return <Day
              key={index}
              done={day}
              dayCheck={this.handleDayChecked}
              clickEvent={() => this.props.clickEvent(this.props.index, index)} />
          })}
          <p className="goal-text">{this.props.text}</p>
          <button onClick={this.removeGoal}>Remove</button>
        </form>
      </div>
    )
  }
}
export default Goal
