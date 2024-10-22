import './TodoCounter.css'

function TodoCounter({ total, completed}){
    const messageCongratulations = `Felicitaciones Terminaste todas tus tareas! 🎁🎉🎊`
    const messageFinished = `Has completado ${completed} de ${total} TODOs`
    const todoMessage = (completed === total) ? messageCongratulations: messageFinished;
    return(
        <h1 className="TodoCounter">
         {todoMessage}
        </h1>
    );
}
export { TodoCounter };
