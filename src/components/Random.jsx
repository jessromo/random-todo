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
    <div className="listItem">
      <div className="todoItem">
        <p>Can't decide?</p>
        <div className="actions">
          <button onClick={pickRandom}>
            <i class="fa-solid fa-shuffle"></i>
          </button>
        </div>
        <div> {randomTodo}</div>
      </div>
    </div>
  );
}

export default Random;
