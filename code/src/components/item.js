import React from "react"
import "./item.css"

class Item extends React.Component {

  render() {
    return (
      <div>
        <form>
          <label className="container">
             <input className="checkbox" type="checkbox" />
             <span className="checkmark"></span>
          <p className="goal-text">{this.props.text}</p>
          </label>
        </form>
      </div>
    )
  }
}
export default Item
