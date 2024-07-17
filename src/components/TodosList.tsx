import TodoItem from "@/components/TodoItem";
import { todo } from "./classes/todo";
import { useTodosContext } from '@/context/TodosContext';

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo: todo) => (
        <TodoItem
          key={todo?.id}
          itemProp={todo}
        />
      ))}
    </ul>
  );
};
export default TodosList;
