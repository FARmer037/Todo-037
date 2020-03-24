import React from 'react'
import './Task.css'

const Task = (props) => {
    const { task, editTask, deleteTask } = props
    const { id, name } = task
    return (
        <li>
            <div className='id'>
                {id}
            </div>
            <div className='name'>
                {name}
            </div>
            <div className='btn'>
                <button className='green' onClick={() => deleteTask(id)}>Delete</button>
                <button className='red' onClick={() => editTask(id)}>Edit</button>
            </div>
        </li>
    )
}

export default Task
