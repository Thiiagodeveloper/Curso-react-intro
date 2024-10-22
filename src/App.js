
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
    {text: 'Usar Estados Derivados', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defualtsTodos)
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usarios buscan todos de ' + searchValue)

  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length
 

  return (
    <>
    <TodoCounter completed={completeTodos} total={totalTodos}/>
    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}/>

    <TodoList>
      {defualtsTodos.map(todo => (
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
