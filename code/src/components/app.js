import React from "react"
import Item from "./item"
import AddNewItem from "./addnewitem"
import Body from "./body"
import Header from "./header"
import Weekdays from "./weekdays"

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
      <Body>
        <Header />
        <AddNewItem
          handleOnSubmit={this.itemToList} />
        {this.state.items.map(listItem => (
          <Item
            key={listItem.id}
            text={listItem.text} />
        ))}
        <Weekdays />
      </Body>
      </div>
    )
  }
}

export default App
