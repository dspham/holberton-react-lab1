import React, { Component } from 'react';
import {ITodoListItem} from '../../containers/todoApp'


interface ITodoInputState {
  inputValue: string
  isSubmitted: boolean
}

interface ITodoInputProps {
  handleAdd: (todo: ITodoListItem) => void
}

class AddTodo extends Component<ITodoInputProps, ITodoInputState> {
  constructor(props: ITodoInputProps) {
    super(props);
    this.state = {
      inputValue: '',
      isSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    // your code here
    this.setState({
      inputValue: event.target.value
    })
  }
  handleSubmit() {
    // your code here
    this.setState({
      isSubmitted: true
    })
  }

  render() {
    return (
      <div className="row">
        <input
          type="text"
          // value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> + </button>
      </div>
    );
  }
}

export default AddTodo;
