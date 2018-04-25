import React from "react"

class Day extends React.Component {
  checkedDay = () => {
    // const checkValue = event.target.value
    // this.props.dayCheck(checkValue)
    this.props.stateCallback2(this.props.index)

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
