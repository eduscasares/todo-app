import React, { useState } from 'react';
// Bringin Child Components to Container
import Task from '../pure/Task';
import TaskForm from '../pure/forms/TaskForm';
//Bringing STYLES to Component
import '../../styles/tasks.scss';
import '../../styles/task-form.scss';
import '../../styles/global.scss'


const TaskList = () => {


    // Initial State
    const [tasks, setTasks] = useState( [] );
    const [filter, setFilter] = useState('all')
    const [showForm, setShowForm] = useState(false);

    // Toggle Form visibility
    const formVisibility = () => {
        setShowForm(!showForm);
    }

    // A task getting completed 
    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask);
    }

    // A task getting deleted
    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    // A task being added
    function addTask(task) {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    // Función para filtar tareas 
    const filterTasks = () => {

        switch(filter) {
            case 'done':
                return (
                    <div>

                        { tasks
                            .filter(task => task.completed === true)
                            .map((task, index) => {
                            return(
                                <Task
                                    task={ task } 
                                    key={ index } 
                                    complete={ completeTask }
                                    remove={ deleteTask } >
                                </Task>
                            )
                        })}

                    </div> 
                )

            case 'pending':
                return (
                    <div>

                        { tasks
                            .filter(task => task.completed === false)
                            .map((task, index) => {
                            return(
                                <Task
                                    task={ task } 
                                    key={ index } 
                                    complete={ completeTask }
                                    remove={ deleteTask } >
                                </Task>
                            )
                        })}

                    </div>
                )

            default: 
                return (
                    <div>

                        { tasks
                            .map((task, index) => {
                            return(
                                <Task
                                    task={ task } 
                                    key={ index } 
                                    complete={ completeTask }
                                    remove={ deleteTask } >
                                </Task>
                            )
                        })}

                    </div> 
                )
        }
    }
    


    return (
        <div className='task-list'>
            <div className={ tasks.length === 0 ? 'card empty' : 'card' }>

                <div className="card-body">
                    { 
                    
                        tasks.length > 0 ?

                        filterTasks() :

                        (
                            <div className='task-table'>
                                <h3>There are no tasks to show</h3>
                                <p>Go on, create one!</p>
                            </div>
                        )
                               
                    }

                </div>

                <button className='contained-button add-tasks' onClick={ formVisibility }>
                    <i className="bi bi-plus-square-fill" style={{marginRight: '8px'}}></i>
                    Add task
                </button>

            </div>
                
            <TaskForm 
                add = { addTask } 
                length = { tasks.length } 
                tasks = { tasks } 
                visibility= { showForm }
                handleClose = { formVisibility }>
            </TaskForm>

            <div className="filter-buttons">
                <button className="bordered-button" onClick={ () => setFilter('all') }>
                    See All
                </button>

                <button className="bordered-button" onClick={ () => setFilter('done') }>
                    Completed
                </button>

                <button className="bordered-button" onClick={ () => setFilter('pending') }>
                    Pending
                </button>
            </div>
        </div>
    );
};

 
export default TaskList;
