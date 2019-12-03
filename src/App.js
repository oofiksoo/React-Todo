import React from "react";

import Todo from "./components/TodoComponents/Todo";

import data from "./index.js";

import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    tasks: data,

    otherState: "this other state"
  };

  togglecomplete = itemId => {
    console.log("togglecomplete: ", itemId);

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item,

            complete: !item.complete
          };
        }

        return item;
      })
    });
  };

  clearcomplete = () => {
    console.log("clearcomplete");

    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.complete;
      })
    });
  };

  addItem = itemName => {
    console.log("add item: ", itemName);

    this.setState({
      tasks: [
        ...this.state.tasks,

        {
          name: itemName,

          id: Date.now(),

          complete: false
        }
      ]
    });
  };

  render() {
    console.log("rendering...");

    return (
      <div className="App">
        <div className="header">
          <h1>My Todo List:</h1>

          <TodoList addItem={this.addItem} />
        </div>

        <Todo
          tasks={this.state.tasks}
          togglecomplete={this.togglecomplete}
          clearcomplete={this.clearcomplete}
        />
      </div>
    );
  }
}

export default App;
