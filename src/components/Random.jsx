import React, { useState } from "react";

function Random({ todos }) {
  const [randomTodo, setRandomTodo] = useState("");

  const pickRandom = () => {
    if (todos.length > 0) {
      const randomIndex = Math.floor(Math.random() * todos.length);
      setRandomTodo(todos[randomIndex].text);
    } else {
      setRandomTodo("No to-do items found!");
    }
  };

  return (
    <div className="listItem">
      <div className="random">
        <div className="text">
          <br></br>
          <p>Can't decide?</p>
          <p>Use the button to get a random selection!</p>
          <br></br>
          <div> {randomTodo}</div>
          <br></br>
          <button id="shuffle" onClick={pickRandom}>
            <i class="fa-solid fa-shuffle"></i>
          </button>
          <br></br>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Random;
