import TodoItem from "@/components/TodoItem"
import { todo } from "./classes/todo";
const TodosList = (props:any) => {
    const { todosProps, handleChange, delTodo } = props;
    return (
      <ul>
        {todosProps.map((todo:todo) => (
            <TodoItem 
              key={todo?.id} 
              itemProp={todo} 
              handleChange={handleChange } 
              delTodo={delTodo}
            />
        ))}
      </ul>
    );
  };
  export default TodosList;
  