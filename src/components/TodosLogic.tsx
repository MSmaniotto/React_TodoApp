import InputTodo from "@/components/InputTodo";
import TodosList from "./TodosList";
import { useState } from "react";
import { todo } from "./classes/todo";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: "1a",
      title: "Setup development environment",
      completed: true,
    },
    {
      id: "2b",
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: "3c",
      title: "Deploy to live server",
      completed: false,
    },
  ]);

  const handleChange = (id: string) => {
    console.log("clicked", id);

    setTodos((prevState: todo[]) =>
      prevState?.map((todo: todo) => {
        if (todo?.id === id) {
          return {
            ...todo,
            completed: !todo?.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id:string) => {
    
    setTodos([
      ...todos.filter((todo:todo) => {
        return todo.id !== id;
      }),
    ]);
  };
  
  const addTodoItem = (title:string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo}/>
    </div>
  );
};
export default TodosLogic;
