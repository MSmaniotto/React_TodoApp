import styles from "@/styles/TodoItem.module.css";

const TodoItem = (props: any) => {
const { itemProp, handleChange, delTodo } = props;

const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          key={itemProp?.key}
          type="checkbox"
          checked={itemProp?.completed}
          onChange={() => handleChange(itemProp?.id)}
        />
        <button onClick={() => delTodo(itemProp?.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
            {itemProp?.title}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
