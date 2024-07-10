const TodoItem = ( props:any ) =>{
    const {itemProp, handleChange, delTodo}= props;
    
    return (
        <li>
            <input 
                key={itemProp?.key}
                type="checkbox"
                checked={itemProp?.completed}
                onChange={() => handleChange(itemProp?.id)}
            />
            <button onClick={() => delTodo(itemProp?.id)}>Delete</button>
            {itemProp?.title}
        </li>
    );
};

export default TodoItem;