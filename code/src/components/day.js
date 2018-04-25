import React from "react"

class Day extends React.Component {
  checkedDay = (event) => {
    const checkValue = event.target.value
    this.props.dayCheck(checkValue)
  }


  render(){
    return (
      <div>
        <label className="container">
          <input
            className="checkbox"
            type="checkbox"
            // checked=
            onChange={this.checkedDay}  />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }

}

export default Day
