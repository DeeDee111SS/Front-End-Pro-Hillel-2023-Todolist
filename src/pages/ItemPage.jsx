import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../store/actions";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemPage = () => {
  const id = parseInt(useParams().id);
  const notes = useSelector((state) => state.notes);
  const note = notes.find(item => item.id === id)
  const dispatch = useDispatch();  

  const handleRemoveNote = (id) => {
      dispatch(removeNote(id));
  };

  if (!note) {
    return <div>
        <p>Заметка удалена/не найдена</p>
        <Link to="/">
          <button type="button" class="btn btn-primary">Вернуться к списку</button>
        </Link>        
      </div>;
  }

  return (
    <div>
      <div className="taskWrapper">
        <h2>{note.title}</h2>
        <p>{note.task}</p>
        <label className="completed form-check">
            <input data-item-id={note.id} type="checkbox" className="form-check-input"/>
            <span>Завершено ?</span>
        </label>
        <button 
          className="btn btn-danger delete-btn" 
          data-item-id={note.id} 
          style={{ marginRight: "5px" }}
          onClick={() => handleRemoveNote(note.id)}>Удалить</button>
        <Link to="/">
          <button type="button" class="btn btn-primary">Вернуться к списку</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;