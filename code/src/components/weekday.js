import React from "react"
import moment from "moment"
import "./weekday.css"

class Weekday extends React.Component {
  // storeDate = weekdays => {
  //   const item = this.state.id
  //   console.log(weekdays)
  //   weekdays.push({
  //     item
  //   })


  render() {
    return(
      <div className="weekday-item">
        <p>{moment(this.props.date).format("dddd")}</p>
        <div className="item-box"></div>
      </div>
    )
  }
}

export default Weekday
