import React, { useState } from "react";

function Random({ todos }) {
  const [randomTodo, setRandomTodo] = useState("");

  const pickRandom = () => {
    if (todos.length > 0) {
      const randomIndex = Math.floor(Math.random() * todos.length);
      setRandomTodo(todos[randomIndex]);
    } else {
      setRandomTodo("No to-do items found!");
    }
  };

  return (
    <div>
      <button onClick={pickRandom}>Random Option</button>
      <div>Random choice: {randomTodo}</div>
    </div>
  );
}

export default Random;
