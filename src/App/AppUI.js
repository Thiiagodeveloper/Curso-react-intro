import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../CreateTodoButton';
function AppUI({completeTodos,totalTodos,searchValue,setSearchValue,searchedTodos,completeTodo,deleteTodo}){
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

export { AppUI }