import React from "react"

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
        <form onSubmit={this.itemOnSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleNewItem}
              value={this.state.newItem} />
          </label>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNewItem
