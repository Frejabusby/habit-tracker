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

  render() {
    console.log(this.state.newItem)
    return (
      <div>
        <form>
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
