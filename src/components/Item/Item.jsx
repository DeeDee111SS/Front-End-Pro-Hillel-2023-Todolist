import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ noteId, title, task, onRemove }) => {

    const handleLinkClick = (event) => {
        event.stopPropagation();
    };

    return (        
        <div className="col-4">
            
                <div className="taskWrapper">
                    <Link to={`/note/${noteId}`} onClick={handleLinkClick}>
                        <div className="taskHeading">{title}</div>
                        <div className="taskDescription">{task}</div>
                    </Link>
                    <hr/>
                    <label className="completed form-check">
                        <input data-item-id={noteId} type="checkbox" className="form-check-input"/>
                        <span>Завершено ?</span>
                    </label>
                    <hr/>
                    <button 
                        className="btn btn-danger delete-btn" 
                        data-item-id={noteId} 
                        onClick={onRemove}>Удалить</button>
                </div>
            
        </div>    
    );
};

Item.propTypes = {
    noteId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;