import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completeTodos,
        totalTodos
    } = React.useContext(TodoContext)
    const messageCongratulations = `Felicitaciones Terminaste todas tus tareas! 🎁🎉🎊`
    const messageFinished = `Has completado ${completeTodos} de ${totalTodos} TODOs`
    const todoMessage = (completeTodos === totalTodos) ? messageCongratulations: messageFinished;
    return(
        <h1 className="TodoCounter">
         {todoMessage}
        </h1>
    );
}
export { TodoCounter };
