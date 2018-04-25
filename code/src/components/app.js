import React from "react"
import Goal from "./goal"
import AddNewItem from "./addnewitem"
import Body from "./body"
import Header from "./header"
import Weekdays from "./weekdays"

class App extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   goals: [
    //     {
    //       key: "",
    //       days: [false, false, false, false, false, false, false]
    //     },
    //     {
    //       key: "",
    //       days: [false, false, false, false, false, false, false]
    //     }
    //   ]
    // }
    const goalTasks = JSON.parse(localStorage.getItem("storeItem"))
    if (localStorage.getItem("storeItem")) { // Kollar om det finns något i localStorage, om det är sant det.
      this.state = {
        goals: goalTasks,
        days: [false, false, false, false, false, false, false]
      }
    } else {
      this.state = {
        goals: {
          key: "",
          days: [false, false, false, false, false, false, false]
        }
      }
    }
  }

  itemToList = newText => {
    console.log(this.state.goals)
    const environmentItems = this.state.goals
    environmentItems.push({
      key: newText,
      days: [false, false, false, false, false, false, false]
    })
    localStorage.setItem("storeItem", JSON.stringify(environmentItems))
    this.setState({
      goals: environmentItems
    })
  }

  deleteGoal = index => {
    const deletingGoal = this.state.goals
    deletingGoal.splice(index, 1)
    this.setState({
      goals: deletingGoal
    })
    localStorage.setItem("storeItem", JSON.stringify(deletingGoal))
  }

  render() {
    return (
      <div>
        <Body>
          <Header />
          <AddNewItem
            handleOnSubmit={this.itemToList} />
          {this.state.goals.map((listGoal, index) => {
            console.log(listGoal);
            return <Goal
              index={index}
              text={listGoal.key}
              days={listGoal.days}
              handleRemoveGoal={this.deleteGoal} />
          })}
          {/* {this.state.items.map((listItem, index) => {
            return <Weekdays
              index={index}
              id={listItem.id} />
          })} */}
        </Body>
      </div>
    )
  }
}

export default App
