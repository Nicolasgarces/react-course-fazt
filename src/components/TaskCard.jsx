import React from 'react'

function TaskCard({task, deleteTasks}) {

  


  return (
    <div>
          <h1>{task.title}</h1>
          <p key={task.id}>{task.description}</p>
          <button onClick={() => deleteTasks(task.id)}>Delete </button>
        </div>
  )
}

export default TaskCard