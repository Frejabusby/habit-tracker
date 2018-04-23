import React from "react"
import "./item.css"

class Item extends React.Component {

  removeGoal = event => {
    event.preventDefault()
    this.props.handleRemoveGoal(this.props.index)
  }

  render() {
    return (
      <div>
        <form>
          <label className="container">
            <input className="checkbox" type="checkbox" />
            <span className="checkmark"></span>
            <p className="goal-text">{this.props.text}</p>
          </label>
          <button onClick={this.removeGoal}>Remove</button>
        </form>
      </div>
    )
  }
}
export default Item
