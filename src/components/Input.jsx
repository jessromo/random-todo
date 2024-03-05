import { useState } from "react";

export default function Input(props) {
  const { handleAdd, todoVal, setTodoVal } = props;

  return (
    <>
      <header>
        <input
          value={todoVal}
          onChange={(e) => {
            setTodoVal(e.target.value);
          }}
          placeholder="Enter item"
        />
        <button
          onClick={() => {
            handleAdd(todoVal);
            setTodoVal("");
          }}
        >
          Add
        </button>
      </header>
    </>
  );
}
