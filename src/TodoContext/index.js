//context 
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  //UseLocalStorage
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[])

  //Todo Search 
  const [searchValue, setSearchValue] = React.useState('');

  //Todo Create State
  const [openModal, setOpenModal] = React.useState(true);

  //Todo Total Counter => todos total and completed  
  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  //Todo Search => Search
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
    }
  );

  //Todo Complete => Selection and complete
  const completeTodo = (text) => {
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true
    saveTodos(newTodos)
  }

  //Todo Delete => Selection and Delete 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completeTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }