export default function Card(props) {
  const { children, handleDelete, index } = props;
  return (
    <>
      <li className="todoItem">
        {children}
        <div className="actions">
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
