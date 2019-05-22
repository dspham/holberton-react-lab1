import React, { Component } from "react";
import Title from "../components/title";
import AddTodo from "../components/Todo/addTodo";
import TodoList from "../components/Todo/todoList";

export interface ITodoAppState {
  todos: Array<ITodoListItem>
}
export interface ITodoListItem {
  text: string
  id: number
}

class TodoApp extends Component<{}, ITodoAppState> {
  constructor(props: {}) {
    super(props);

    //initialize state - `todos` is our initial dummy array of todos
    this.state = {
      todos: [
        { text: " This is a simple todo list app written in React!", id: 1 },
        { text: "Hover over todos and click on the `XX` to delete them!", id: 2 },
        { text: "Add new todos if you like!", id: 3 }
      ]
    };

    // binding methods
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  // Handler to add a todo
  addTodo(todo: ITodoListItem) {
    // your code here
    // States are immutable, so we don't want to push but instead spread
    // Spread will take the current todos and replace it with the spread
    this.setState({todos: [...this.state.todos, todo]})
  }
  // Handler to remove a todo
  removeTodo(id: number) {
    // your code here
  }

  render() {
    return (
      <div>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default TodoApp;
