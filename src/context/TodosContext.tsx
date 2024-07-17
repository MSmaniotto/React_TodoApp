import { createContext, useContext } from 'react';
import { useEffect, useState } from "react";
import { todo } from "@/components/classes/todo"
import { v4 as uuidv4 } from "uuid";

let value:any;
// let value={todos:todo[],
//   handleChange:void(),
//   delTodo:void(),
//   addTodoItem:void(),
//   setUpdate:void()};
const TodosContext = createContext(value);


export const TodosProvider = ({ children }:any) => {

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp: string = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos: todo[] = JSON.parse(!!temp ? temp : "" );
    return savedTodos || [];
  }

  const setUpdate = (updatedTitle:string, id:string) =>{
    console.log(updatedTitle);
    setTodos(() =>
      todos?.map((todo:todo) => {
        if(todo?.id === id) {
          return {
            ...todo,
            title: updatedTitle
          };
        }
        return todo;
      })
    )
  }

  const handleChange = (id: string) => {

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
    <TodosContext.Provider value={
      {
        todos,
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate
      }
    }>
      {children}
    </TodosContext.Provider>
  );
};
export const useTodosContext = () => useContext(TodosContext);
