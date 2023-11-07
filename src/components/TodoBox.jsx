import React from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

class TodoBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            inputValue: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue.trim() === '') return;
             
        const newNote = {
            id: this.uniqueId(),
            task: this.state.inputValue,
        };
        const updatedNotes = [newNote, ...this.state.notes];
        this.setState({
            notes: updatedNotes,
            inputValue: '',
        });        
    };

    handleRemoveNote = (id) => {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: updatedNotes });
    };

    uniqueId() {
        return uuidv4();
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleFormSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={this.state.inputValue}
                                onChange={this.handleInputChange}
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
                    {this.state.notes.map((note) => (
                        <Item
                            key={note.id}
                            task={note.task}
                            onRemove={() => this.handleRemoveNote(note.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default TodoBox;