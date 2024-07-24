export default function Todo(props) {
  const { children, handleDelete, handleDone, index } = props;
  return (
    <>
      <li className="todoItem">
        {children}
        <div className="actions">
          <button
            onClick={() => {
              handleDone(index);
            }}
          >
            <i class="fa-regular fa-check"></i>
          </button>
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </>
  );
}
