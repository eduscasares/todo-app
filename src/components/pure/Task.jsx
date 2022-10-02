import React from 'react';
import PropTypes from 'prop-types';
  
//Bringing MODELS to component
import { LEVELS } from '../../models/levels.enum';

//Bringing STYLES to Component
import '../../styles/tasks.scss'
 
const Task = ({ task, complete, remove }) => {

    /**
     * @return La idea es que la función retorne un badge 
     * dependiendo del nivel de prioridad de la task
     */
     function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className="mb-0"><span className='badge normal'>{ task.level }</span></h6>
                )
        
            case LEVELS.URGENT:
                return(
                    <h6 className="mb-0"><span className='badge warning'>{ task.level }</span></h6>
                )
            
            case LEVELS.BLOCKING:
                return(
                    <h6 className="mb-0"><span className='badge danger'>{ task.level }</span></h6>
                )

            default:   
                break;
        }
    }

    /**
     * @returns Esta función devuelve el tipo de icono que se debe mostrar
     * dependiendo del estado de la tarea { task.completed }
     */
     function taskIconCompleted() {
        if( task.completed ) {
            return(<i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={ {color: 'green' } }></i>)
        } else {
            return(<i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={ {color: 'gray' } }></i>)
        }
    }

    return (
        <div className='task-item' style={ task.completed ? { opacity: '0.4' } : { opacity: '1' } }>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <h3>{ task.name }</h3>
                <span className='task-level'>{ taskLevelBadge() }</span>
            </div>
            <p>{ task.description }</p>
            <span className='task-complete'>{ taskIconCompleted() }</span>
            <i onClick={ () => remove(task) } className='bi-trash task-action' style={ { color: 'tomato' } }></i>
        </div>
                
    );
};


Task.propTypes = {
    task: PropTypes.object.isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default Task;
