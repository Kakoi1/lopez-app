export default function Complete({ number, task, onToggleStatus }){

    return(
    <div style={{ display: task.status == 'Completed' ? 'none' : 'block' }}>
    <p><strong>NO.:</strong> {number}</p>
     <p><strong>Description:</strong> {task.description}</p>
     <p><strong>Assignee:</strong> {task.assignee}</p>
     <p><strong>Deadline:</strong> {task.deadline}</p>
     <p style={{color: task.status == 'Completed' ? '' : 'red'}}><strong>Status:</strong> {task.status}</p>
     <button onClick={() => onToggleStatus(number-1)}>click</button>
   </div>
    )

  }