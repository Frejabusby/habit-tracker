import React from "react"

class Day extends React.Component {
  // checkedDay = () => {
  //   // console.log(this.props.index)
  //   this.props.stateCallback2(this.props.index)
  //
  // }


  render(){
    return (
      <div>
        <label className="container">
          <input
            className="checkbox"
            type="checkbox"
            onClick={this.props.clickEvent} />
            {/* // checked=
            // onChange={this.checkedDay}  /> */}
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }

}

export default Day
