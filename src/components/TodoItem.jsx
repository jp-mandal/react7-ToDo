import { RiDeleteBinFill } from "react-icons/ri";
function TodoItem({ item, date, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{item}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => {
            onDeleteClick(item);
          }}
        >
          <RiDeleteBinFill />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
