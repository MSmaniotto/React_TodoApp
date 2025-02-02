import { useTodosContext } from "@/context/TodosContext";
import { BaseSyntheticEvent, useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
const InputTodo = () => {
  const { addTodoItem } = useTodosContext();
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
        <button className="input-submit">
          <FaPlusCircle
            color="#5e5e5e"
            size="20px"
            className="submit-icon"
          />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
