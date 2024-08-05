import styles from "@/styles/TodoItem.module.css";
import { KeyboardEvent, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from "@/context/TodosContext";
import { useAuthContext } from "@/context/AuthContext";

const TodoItem = (props: any) => {
  const {itemProp} = props;
  const {handleChange, delTodo, setUpdate} = useTodosContext();
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const { user }: any = useAuthContext();
  let viewMode = { display: "" };
  let editMode = { display: "" };
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode} key={itemProp?.key}>
        <p>{itemProp?.key}</p>
        <input
          type="checkbox"
          checked={itemProp?.completed}
          onChange={() => handleChange(itemProp?.id)}
        />
        {user && (
        <button onClick={handleEditing} className="input-submit">
          <AiFillEdit />
        </button>
        )}
        <button onClick={() => delTodo(itemProp?.id)}>
          <FaTrash />
        </button>
        <span style={itemProp?.completed ? completedStyle : {}}>
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e?.target?.value)}
        onKeyDown={handleUpdatedDone}
        key={itemProp?.key}
      />
    </li>
  );
};

export default TodoItem;
