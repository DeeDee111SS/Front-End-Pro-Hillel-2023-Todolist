export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RESET_FORM = "RESET_FORM";
export const CLEAR_NOTES = "CLEAR_NOTES";

export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: note,
});

export const removeNote = (id) => ({
    type: REMOVE_NOTE,
    payload: id,
});

export const resetForm = () => ({
    type: RESET_FORM,
});
  
export const clearNotes = () => ({
    type: CLEAR_NOTES,
});