import { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Random from "./components/Random";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoVal, setTodoVal] = useState("");

  function persists(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  /* original
  function handleAdd(newTodo) {
    const newTodoList = [...todos, newTodo];
    persists(newTodoList);
    setTodos(newTodoList);
  }
*/
  /*moded*/

  function handleAdd(newTodo) {
    const newTodoItem = { text: newTodo, done: false };
    const newTodoList = [...todos, newTodoItem];
    persists(newTodoList);
    setTodos(newTodoList);
  }

  function handleDone(index) {
    const newTodoList = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    persists(newTodoList);
    setTodos(newTodoList);
  }

  /*original*/

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persists(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    }
  }, []);
  return (
    <>
      <Input todoVal={todoVal} setTodoVal={setTodoVal} handleAdd={handleAdd} />
      <List handleDelete={handleDelete} handleDone={handleDone} todos={todos} />
      <Random todos={todos} />
    </>
  );
}

export default App;
