import { BaseSyntheticEvent, useState } from "react";
const InputTodo = (props: any) => {
  const { addTodoItem } = props;
  const [title, setTitle] = useState("");

  const handleChange = (e: BaseSyntheticEvent) => {
    setTitle(e?.target?.value);
  };
  const [message, setMessage] = useState("");
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
