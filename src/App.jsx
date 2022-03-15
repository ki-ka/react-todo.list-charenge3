import React, { useState } from "react";
import { InputTodos } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const getTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const renewIncompleteTodos = [...incompleteTodos];
    renewIncompleteTodos.splice(index, 1);

    const newCompleteTodods = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(renewIncompleteTodos);
    setCompleteTodos(newCompleteTodods);
  };

  const onClickReturn = (index) => {
    const renewCompleteTodos = [...completeTodos];
    renewCompleteTodos.splice(index, 1);

    const returnToIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(renewCompleteTodos);
    setIncompleteTodos(returnToIncompleteTodos);
  };

  return (
    <>
      <div className="title">
        <h1>TODOリスト</h1>
      </div>
      <InputTodos
        todoText={todoText}
        getTodoText={getTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
