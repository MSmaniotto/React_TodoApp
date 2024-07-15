import styles from "@/styles/TodoItem.module.css";
import { KeyboardEvent, useState } from "react";

const TodoItem = (props: any) => {
  const { itemProp, handleChange, delTodo, setUpdate } = props;
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  let viewMode = {display: ""};
  let editMode = {display : ""};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event:KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
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
      <div className={styles.content} style={viewMode}>
        <input
          key={itemProp?.key}
          type="checkbox"
          checked={itemProp?.completed}
          onChange={() => handleChange(itemProp?.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp?.id)}>Delete</button>
        <span style={itemProp?.completed ? completedStyle : {}}>
          {updateInput}
        </span>
      </div>
      <input type="text" 
        value={updateInput} 
        className={styles.textInput} 
        style={editMode}
        onChange={(e) => setUpdateInput(e?.target?.value)}
        onKeyDown={handleUpdatedDone}
        />
    </li>
  );
};

export default TodoItem;
