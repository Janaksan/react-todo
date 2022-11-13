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
                tasks && tasks.map((task, key) => (
                    <ListItem key={key} task={task} handleRemove={handleRemove} handleEdit={handleEdit} />
                ))
            }
        </div>
    )
}
