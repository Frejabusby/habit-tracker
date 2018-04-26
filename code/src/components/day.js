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
            checked={this.props.done}
            type="checkbox"
            onChange={this.props.clickEvent}/>
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }

}

export default Day
