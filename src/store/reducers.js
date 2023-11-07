import { ADD_NOTE, REMOVE_NOTE, RESET_FORM, CLEAR_NOTES } from "./actions";

const initialState = {
    notes: [],
    titleInputValue: "", 
    taskInputValue: "", 
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes],
            };
        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload),
            };
        case RESET_FORM:
            return {
                ...state,
                titleInputValue: "",
                taskInputValue: "",
        };
        case CLEAR_NOTES:
            return {
                ...state,
                notes: [],
            };
        default:
            return state;
    }
};

export default rootReducer;