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
              <i class="fa-regular fa-trash-can"></i>
            </button>
         
        </div>
      </li>
    </>
  );
}
