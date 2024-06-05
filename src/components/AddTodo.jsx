import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            onChange={handleOnChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button type="submit" class="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
