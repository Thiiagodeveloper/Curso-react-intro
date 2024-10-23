
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';

const defualtsTodos = [
    {text: 'Cortar Cebolla', completed: true},
    {text: 'Tomar el Curso de Reactjs', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'Renunciar', completed: false},
    {text: 'Usar Estados Derivados', completed: true}
];

function App() { 
  //Todo Search 
  const [todos, setTodos] = React.useState(defualtsTodos)
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

  //Todo Complete => Selection and complete
  const completeTodo = (text) => {
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  //Todo Delete => Selection and Delete 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
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
