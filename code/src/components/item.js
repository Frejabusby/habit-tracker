import React from "react"

class Item extends React.Component {
  
  render() {
    return (
      <div>
        <form>
          <label>
            <input type="checkbox" />
            {this.props.text}
          </label>
        </form>
      </div>
    )
  }
}
export default Item
