import React from "react"
import "./addnewitem.css"

class AddNewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ""
    }
  }
  handleNewItem = (event) => {
    this.setState ({
    newItem: event.target.value
    })
  }

  itemOnSubmit = (event) => {
    event.preventDefault()
    this.props.handleOnSubmit(this.state.newItem)
  }

  render() {
    console.log(this.state.newItem)
    return (
      <div>
        <form id="myForm" onSubmit={this.itemOnSubmit}>
          <label>
            <input className="new-item-input"
               type="text"
              onChange={this.handleNewItem}
              value={this.state.newItem} />
          </label>
          <button className="add-item-button">Add</button>
        </form>
      </div>
    )
  }
}

export default AddNewItem
