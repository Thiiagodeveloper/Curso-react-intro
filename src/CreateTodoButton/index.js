import React from 'react';
import './TodoCreateButton.css'
import { TodoContext } from '../TodoContext';

function TodoCreateButton(){
    const {openModal, setOpenModal } = React.useContext( TodoContext )
    return(
        <button 
            className="TodoCreateButton" 
            onClick={() => {
                console.log('hiciste click');
                //Close and Open Modal
                setOpenModal(!openModal)    
            }}
        >
            +
        </button>

    );
}

export { TodoCreateButton }