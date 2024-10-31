import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';


function App() { 
  //Todo Search 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[])
  const [searchValue, setSearchValue] = React.useState('');

  //Todo Total Counter => todos total and completed  
  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  console.log('Log1');

  // React.useEffect(() => {
  // console.log('Looooog2');

  // })

  // React.useEffect(()=>{
  //   console.log('Looooooog2'); 
  // }, [])

  React.useEffect(()=>{
    console.log('Looooooog2'); 
  }, [totalTodos])
  

  console.log('Log3');



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
    <AppUI 
    completeTodos = {completeTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  )
 
}

export default App;
