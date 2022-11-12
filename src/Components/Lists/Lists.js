import React from 'react'
import ListItem from '../ListItem/ListItem'
import './style.css'

export default function Lists({
    tasks,
    handleRemove,
    handleEdit
}) {
    return (
        <div className='list-container'>
            {
                tasks && tasks.map(task => (
                    <ListItem key={task.id} task={task} handleRemove={handleRemove} handleEdit={handleEdit} />
                ))
            }
        </div>
    )
}
