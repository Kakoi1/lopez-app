import React from 'react';


export default function Task({ number, task, onToggleStatus }){

    return (
        <div>
            <div style={{ display: task.status == 'Pending' ? 'none' : 'block' }}>
        <p><strong>NO.:</strong> {number}</p>
         <p><strong>Description:</strong> {task.description}</p>
         <p><strong>Assignee:</strong> {task.assignee}</p>
         <p><strong>Deadline:</strong> {task.deadline}</p>
         <p style={{color: task.status == 'Pending' ? '' : 'green'}}><strong>Status:</strong> {task.status}</p>
         <button onClick={() => onToggleStatus(number-1)}>click</button>
       </div>
          
        </div>
      );

      
}
