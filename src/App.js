
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';

// const defualtsTodos = [
//     {text: 'Cortar Cebolla', completed: true},
//     {text: 'Tomar el Curso de Reactjs', completed: false},
//     {text: 'Llorar con la llorona', completed: false},
//     {text: 'Renunciar', completed: false},
//     {text: 'Usar Estados Derivados', completed: true}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringflydefualtsTodos)

function App() { 

  //LocalStorage
  const localStorageTodos = localStorage.getItem('TODO_V1')

  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODO_V1', JSON.stringify([]));
    parsedTodos = []
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }


  //Todo Search 
  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');

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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODO_V1', JSON.stringify(newTodos))
    setTodos(newTodos);
  }

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
    <>
    <TodoCounter completed={completeTodos} total={totalTodos}/>

    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}/>

    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        //Forma de pasarle una functions a un componente sin ejecutarla
        onComplete ={() => completeTodo(todo.text)}
        onDelete = {() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <TodoCreateButton/>

    </>

  );
}




export default App;
