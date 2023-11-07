import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../store/actions";
import Item from '../components/Item';

const TaskListPage = () => {
    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const handleRemoveNote = (id) => {
        dispatch(removeNote(id));
    };

    return (
        <div className="row" id="todoItems">
            {notes.map((note) => (                                
                    <Item
                        key={note.id}
                        title={note.title}
                        task={note.task}
                        onRemove={() => handleRemoveNote(note.id)}
                        noteId={note.id}
                    />                                
            ))}
        </div>
    )
}

export default TaskListPage;