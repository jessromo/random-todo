import Todo from "./Todo";

export default function List(props) {
  const { todos } = props;

  return (
    <>
      <ul className="listItem">
        {todos.map((todo, todoIndex) => {
          return (
            <Todo {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </Todo>
          );
        })}
      </ul>
    </>
  );
}
