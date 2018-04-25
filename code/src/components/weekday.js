import React from "react"
import moment from "moment"
import "./weekday.css"

class Weekday extends React.Component {

  passItemToDate = () => {
    this.props.handleDate(this.props.key)
  }

  render() {
    return (
      <div className="weekday-item">
        <p>{moment(this.props.date).format("dddd")}</p>
        <div onClick={this.passItemToDate} className="item-box">
          <p>BBB</p>
        </div>
      </div>
    )
  }
}

export default Weekday
