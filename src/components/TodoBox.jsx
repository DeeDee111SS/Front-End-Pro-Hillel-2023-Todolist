import React, { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const TodoBox = () => {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') return;
             
        const newTask = {
            id: uniqueId(),
            task: inputValue,
        };

        setTasks([newTask, ...tasks]);
        setInputValue('');       
    };

    const handleRemoveNote = (id) => {
        const updatedNotes = tasks.filter((note) => note.id !== id);
        setTasks(updatedNotes);
    };

    const uniqueId = () => {
        return uuidv4();
    }
    
    return (
        <div>
            <div className="mb-3">
                <form className="d-flex" onSubmit={handleFormSubmit}>
                    <div className="me-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                            placeholder="I am going..."
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        add
                    </button>
                </form>
            </div>
            <div>
                {tasks.map((note) => (
                    <Item
                        key={note.id}
                        task={note.task}
                        onRemove={() => handleRemoveNote(note.id)}
                    />
                ))}
            </div>
        </div>
    );    
};

export default TodoBox;