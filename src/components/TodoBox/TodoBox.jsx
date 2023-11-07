import React from 'react';
import { useDispatch } from "react-redux";
import { addNote, resetForm, clearNotes } from "../../store/actions";
// import { v4 as uuidv4 } from 'uuid';
// import cn from 'classnames';
import TaskRoutes from '../TaskRoutes';
import { Formik, Form, Field } from 'formik';

const TodoBox = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        const { title, task } = values;
        if (!title || !task) return;
    
        const newNote = {
          id: uniqueId(),
          title,
          task,
        };
    
        dispatch(addNote(newNote));
        resetForm();
    };  

    const handleRemoveAllNotes = () => {
        dispatch(clearNotes());
    };

    const uniqueId = () => {
        const date = new Date();
        const uniqueId = date.getTime();
        return uniqueId;
    };

    return (
        <main>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Formik
                            initialValues={{ title: '', task: '' }}
                            onSubmit={handleSubmit}
                            onReset={() => dispatch(resetForm())}
                        >   
                            <Form id="todoForm">
                                <div className="mb-3">
                                    <label className="form-label">Task title</label>
                                    <Field
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Title"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Task body</label>
                                    <Field
                                        as="textarea"
                                        name="task"
                                        className="form-control"
                                        placeholder="Task body"
                                        cols="30"
                                        rows="10"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <button type="submit" className="btn btn-primary" style={{ marginRight: "5px" }}>
                                        Create Task!
                                        </button>
                                        <button type="reset" className="btn btn-warning">
                                        Очистить
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-danger remove-all"
                                        onClick={handleRemoveAllNotes}
                                    >
                                        Удалить все
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>

                    <div className="col-8">
                        <TaskRoutes/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TodoBox;