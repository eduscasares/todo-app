import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/taskModel.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        )

        add(newTask);
    }


    return (
        <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>

            <div className="form-outline flex-fill">

                <input ref={ nameRef } id='inputName' type='text' placeholder='Task name' className='form-control form-control-lg' required autoFocus />

                <input ref={ descriptionRef } id='inputDescription' type='text' placeholder='Task description' className='form-control form-control-lg' required />

                <select ref={ levelRef } defaultValue={ LEVELS.NORMAL } id="selectLevel" className='form-control form-control-lg'>
                    <option value={ LEVELS.NORMAL }>Normal</option>
                    <option value={ LEVELS.URGENT }>Urgent</option>
                    <option value={ LEVELS.BLOCKING }>Blocking</option>
                </select>

                <button type='submit' className='btn btn-success btn-lg ms-2' >
                    { length === 0 ? 'Create your first task' : 'Add a new task'}
                </button>

            </div>

        </form>
    );
}

TaskForm.ProtoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm;
