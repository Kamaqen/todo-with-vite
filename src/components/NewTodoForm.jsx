import { useState } from "react";
import { PropTypes } from "prop-types";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  function handleChange(event) {
    setNewItem(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" onChange={handleChange} value={newItem} />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;
