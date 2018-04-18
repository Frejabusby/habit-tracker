import React from "react"
import "./body.css"

class Body extends React.Component {
render() {
return (
  <div className="item-box">

    {this.props.children}
  </div>

)}
}

export default Body
