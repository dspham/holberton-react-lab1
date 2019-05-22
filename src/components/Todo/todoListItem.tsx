import React from 'react';
import {ITodoListItem} from "../../containers/todoApp"

interface ITodoListItemProps {
  todo: ITodoListItem
  remove: (id: number) => void
}

const Todo = (props: ITodoListItemProps)  => (
  <p>
    {props.todo.text}
    {/* {props.text} */}
    <span
      onClick={()=> {
        //add your code here
        props.remove(props.todo.id)
      }}>
    <b>&nbsp;XX</b>
    </span>
  </p>
);

export default Todo;