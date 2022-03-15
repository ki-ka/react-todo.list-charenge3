import React from "react";

export const InputTodos = (props) => {
  const { todoText, getTodoText, onClickAdd } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={getTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
