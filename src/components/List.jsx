import Todo from "./Todo";

export default function List(props) {
  const { todos, handleDelete, handleDone } = props;

  return (
    <>
      <ul className="listItem">
        {todos.map((todo, todoIndex) => {
          return (
            <Todo {...props} key={todoIndex} index={todoIndex}>
              <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
              </p>
            </Todo>
          );
        })}
      </ul>
    </>
  );
}