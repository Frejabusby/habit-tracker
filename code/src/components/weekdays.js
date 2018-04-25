import React from "react"
import Weekday from "./weekday"
import moment from "moment"
import "./weekdays.css"

class Weekdays extends React.Component {
  constructor(props) {
    super(props)
    const startOfWeek = moment().startOf("isoWeek")
    const endOfWeek = moment().endOf("isoWeek")
    const days = []
    let day = startOfWeek

    while (day <= endOfWeek) {
      days.push(day.toDate())
      day = day.clone().add(1, "d")
    }
    this.state = {
      weekdays: days
    }
  }

  storeDate = () => {
    // const item = this.props.key
    const weekdaysAgain = this.state.weekdays
    const itemAgain = this.props.id
    console.log(this.props.id)
    weekdaysAgain.push({
      item: itemAgain
    })
    this.setState({
      weekdays: weekdaysAgain
    })
  }

  render() {
  console.log(this.state)
    return (
      <div className="weekday-container">
        {this.state.weekdays.map(weekday => (
          <Weekday
            key={weekday.id}
            date={weekday}
            handleDate={this.storeDate} />
        ))}
        {/* {this.passDateToItem()} */}

      </div>

    )
  }
}

export default Weekdays
