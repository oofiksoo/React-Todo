import React from "react";

import Item from "./TodoForm";

const Todo = props => {
  return (
    <div className="Todo-list">
      {props.stuff.map(item => (
        <Item key={item.id} item={item} togglecomplete={props.togglecomplete} />
      ))}

      <button className="clear-btn" onClick={props.clearcomplete}>
        Clear complete
      </button>
    </div>
  );
};

export default Todo;
