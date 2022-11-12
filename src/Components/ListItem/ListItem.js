import React from 'react'
import './style.css'

export default function ListItem({ task, handleRemove, handleEdit }) {
    return (
        <div className='items'>
            <h3>{task.value}</h3>
            <div>
                <button className='btn-edit' onClick={() => handleEdit(task.id)}>Edit</button>
                <button className='btn-remove' onClick={() => handleRemove(task.id)}>Delete</button>
            </div>
        </div>
    )
}
