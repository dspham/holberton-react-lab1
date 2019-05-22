import React from 'react';
import Todo from './todoListItem';
import {ITodoListItem} from "../../containers/todoApp"

interface ITodoListProps {
  todos: Array<ITodoListItem>;
  handleRemove: (id: number) => void;
}


const TodoList = (props: ITodoListProps) => {
  function renderList() {
    const { todos, handleRemove } = props
    // check if there are todos -- provide useful message if no todos left
    if (todos.length > 0) {
      return todos.map((todo: ITodoListItem)  =>
        <Todo todo={todo} remove={handleRemove} key={todo.id} />
      );
    }
    return <h3>No Todos remaining!</h3>;
  }

  return (
    <div>
      <p><b>Your Todos:</b></p>
      {renderList()}
    </div>
  );
};

export default TodoList;