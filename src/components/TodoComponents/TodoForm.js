import React from "react";

const TodoForm = props => {
  let verboseClassName = "item";

  if (props.item.complete) {
    verboseClassName = verboseClassName + " complete";
  }

  const handleClick = () => {
    props.togglecomplete(props.item.id);
  };

  return (
    <div onClick={handleClick} className={verboseClassName}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default TodoForm;
