import React from "react"
import Weekday from "./weekday"
import "./weekdays.css"

class Weekdays extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weekdays: [
        { id: 1, done: false, day: "Monday" },
        { id: 2, done: false, day: "Tuesday" },
        { id: 3, done: false, day: "Wednesday" },
        { id: 4, done: false, day: "Thursday" },
        { id: 5, done: false, day: "Friday" },
        { id: 6, done: false, day: "Saturday" },
        { id: 7, done: false, day: "Sunday" }
      ]
    }
  }

  render() {
    console.log(this.state.weekdays)
    return(
      <div className="weekday-container">
        {this.state.weekdays.map(weekday => (
          <Weekday
            key={weekday.id}
            day={weekday.day} />
        ))}

      </div>

    )
  }
}

export default Weekdays
