import React from "react"
import Item from "./item"
import AddNewItem from "./addnewitem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, done: false, text: "Bike to work" },
        { id: 2, done: false, text: "Eat organic" }
      ]
    }
  }
  itemToList = (newText) => {
  const environmentItems = this.state.items
  environmentItems.push({
   id: Date.now(), done: false, text: newText
  })
  this.setState ({
    items: environmentItems
  })
  }



  render() {
    return (
      <div>
        <AddNewItem
          handleOnSubmit={this.itemToList} />
        {this.state.items.map(listItem => (
          <Item
            key={listItem.id}
            text={listItem.text} />
        ))}
      </div>
    )
  }
}

export default App
