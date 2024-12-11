
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

function Todo() {
    const [todo, settodo] = useState([]);  
    const [input, setinput] = useState(""); 

    const inputChange = (user) => {
        setinput(user.target.value);
    };

    const addTodo = () => {
        if (input.trim() !== "") {
            settodo([...todo, input]);  
            setinput(""); 
        }
    };

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Todo List</h1>

                <div className="d-flex justify-content-center mt-4">
                    <input
                        type="text"
                        className="form-control w-50"
                        value={input}
                        onChange={inputChange}
                        placeholder="Enter a task"
                    />
                    <button
                        className="btn btn-primary ml-2"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>

                <div className="mt-4">
                    <ul className="list-group">
                        {todo.map((todo, index) => (
                            <li key={index} className="list-group-item">
                                {todo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Todo;
