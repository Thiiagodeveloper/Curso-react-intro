import './TodoCreateButton.css'

function TodoCreateButton(){
    return(
        <button className="TodoCreateButton" 
        onClick={() => console.log('le diste click')}
        >+</button>

    );
}

export { TodoCreateButton }