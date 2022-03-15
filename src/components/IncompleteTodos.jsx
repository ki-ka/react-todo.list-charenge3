import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="area-title"> 未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
