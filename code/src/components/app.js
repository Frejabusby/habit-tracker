import React from "react"
import Item from "./item"
import AddNewItem from "./addnewitem"
import Body from "./body"
import Header from "./header"
import Weekdays from "./weekdays"

class App extends React.Component {
  constructor(props) {
    super(props)
    if (localStorage.getItem("storeItem")) { // Kollar om det finns något i localStorage, om det är sant det.
      this.state = {
        items: JSON.parse(localStorage.getItem("storeItem"))
      }
    } else { // annars skapar en tom array
      this.state = {
        items: []
      }
    }
  }

  itemToList = newText => {
    const environmentItems = this.state.items
    environmentItems.push({
      id: Date.now(), done: false, text: newText
    })
    localStorage.setItem("storeItem", JSON.stringify(environmentItems))
    this.setState({
      items: environmentItems
    })
  }

  deleteGoal = index => {
    const itemsArray = this.state.items
    itemsArray.splice(index, 1)
    this.setState({
      items: itemsArray
    })
    localStorage.setItem("storeItem", JSON.stringify(itemsArray))
  }

  render() {
    return (
      <div>
        <Body>
          <Header />
          <AddNewItem
            handleOnSubmit={this.itemToList} />
          {this.state.items.map((listItem, index) => {
            return <Item
              index={index}
              key={listItem.id}
              text={listItem.text}
              handleRemoveGoal={this.deleteGoal} />
          })}
          {this.state.items.map((listItem, index) => {
            return <Weekdays
              index={index}
              id={listItem.id} />
          })}
        </Body>
      </div>
    )
  }
}

export default App
