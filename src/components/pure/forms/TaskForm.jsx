import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Importing MODELS 
import { Task } from '../../../models/taskModel.class';
import { LEVELS } from '../../../models/levels.enum';

// Importing Formik and Yup
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const TaskForm = ({ add, length, visibility, handleClose }) => {

    // Setting Form initial values
    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        completed: false
    }

    // Setting Form validation
    const addTaskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('This field is required, please fill it'),
            description: Yup.string()
                .required('This field is required, please fill it'),
            level: Yup.string().oneOf(
                [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING]
            ),
        }
    )

    // Functionality to add task

    function addTask(tasks) {
        const newTask = tasks;
        add(newTask);
        handleClose();
    }

    
    return (
        <div className={ visibility === true ? 'form-container' : 'form-container hidden'}>
            <div className='task-form'>
                <i className="bi bi-x-circle-fill" onClick={ handleClose }></i>
                <h4>Add a new task</h4>

                <Formik
                    initialValues = { initialValues }
                    validationSchema = { addTaskSchema }
                    onSubmit = { (values, actions) => {
                        addTask(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    } }
                >

                    {({ errors,
                        touched, 
                        isSubmitting }) => (

                            <Form>

                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name="name" placeholder="Add a task name"></Field>
                                {/* Setting Field Errors */}
                                    {

                                        errors.name && touched.name &&
                                        (
                                            <ErrorMessage name="name" component="div" />
                                        )

                                    }

                                <label htmlFor="description">Description</label>
                                <Field type="text" id="description" name="description" placeholder="Add a task description"></Field>
                                {/* Setting Field Errors */}
                                    {

                                        errors.description && touched.description &&
                                        (
                                            <ErrorMessage name='description' component='div'></ErrorMessage>
                                        )

                                    }

                                <label htmlFor="level">Priority</label>
                                <Field as='select' id="level" name="level">
                                    <option value={ LEVELS.NORMAL }>Normal</option>
                                    <option value={ LEVELS.URGENT }>Urgent</option>
                                    <option value={ LEVELS.BLOCKING }>Blocking</option>
                                </Field>

                                <button type="submit" className='contained-button'>
                                    { length === 0 ? 'Create your first task' : 'Add a new task'}
                                </button>

                                { isSubmitting ? (<p>Be patient, we're adding your task</p>) : null }

                            </Form>

                        )
                    }


                </Formik>
            </div>
        </div>
    );
}

TaskForm.ProtoTypes = {
    tasks: PropTypes.instanceOf(Task),
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm;
