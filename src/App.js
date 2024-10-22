
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
  const [todos, setTodos] = React.useState(defualtsTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
    }
  );

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
        />
      ))}
    </TodoList>

    <TodoCreateButton/>

    </>

  );
}




export default App;
