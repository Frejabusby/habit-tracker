import React from "react"
import Goal from "./goal"
import AddNewItem from "./addnewitem"
import Body from "./body"
import Header from "./header"


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: [
        {
          key: "Hejsaaaan",
          days: [false, false, false, false, false, false, false]
        },
        {
          key: "Hej",
          days: [false, false, false, false, false, false, false]
        }
      ]
    }
  //   const goalTasks = JSON.parse(localStorage.getItem("storeItem"))
  //   if (localStorage.getItem("storeItem")) { // Kollar om det finns något i localStorage, om det är sant det.
  //     this.state = goalTasks
  //   } else {
  //     this.state = {
  //       goals: [{
  //         id: Date.now(),
  //         key: "",
  //         days: [false, false, false, false, false, false, false]
  //       }]
  //     }
  //   }
  }

  itemToList = newText => {
    console.log(this.state.goals)
    const environmentItems = this.state.goals
    environmentItems.push({
      id: Date.now(),
      key: newText,
      days: [false, false, false, false, false, false, false]
    })
    localStorage.setItem("storeItem", JSON.stringify(environmentItems))
    this.setState({
      goals: environmentItems
    })
  }

// indexFunction = (index) => { //Denna funktion skall skickas index på goal till stateChange. HUR?!?!?!?!
//   console.log(index)
//   return index
// }

  deleteGoal = index => {
    const deletingGoal = this.state.goals
    deletingGoal.splice(index, 1)
    this.setState({
      goals: deletingGoal
    })
    localStorage.setItem("storeItem", JSON.stringify(deletingGoal))
  }

 dayClickHandler = (goalIndex, dayIndex) => {
   let newState = this.state
   newState.goals[goalIndex].days[dayIndex] = !newState.goals[goalIndex].days[dayIndex]
   this.setState(newState)
 }


  // stateChange = (index) => {
  //   console.log("stateCallback", this.state.goals[0].days[index])
  //   const updatedDone = this.state.goals.days[index]
  //   this.updatedDone = !this.updatedDone
  //   this.setState({
  //     days: updatedDone
  //   })
  // // localStorage.setItem("storeItem", JSON.stringify(updatedDone))
  //   }

  render() {

    return (
      <div>
        <Body>
          <Header />
          <AddNewItem
            handleOnSubmit={this.itemToList} />
          {this.state.goals.map((listGoal, index) => {
            return <Goal
              index={index}
              key={index}
              id={listGoal.id}
              text={listGoal.key}
              days={listGoal.days}
              handleRemoveGoal={this.deleteGoal}
              // stateCallback={this.stateChange}
              // getGoalIndex={this.indexFunction}
              clickEvent={this.dayClickHandler.bind(this)}
            />
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
