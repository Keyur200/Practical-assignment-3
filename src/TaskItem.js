
import React from 'react';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-item">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'grey' : 'black',
        }}
      >
        {task.text}
      </span>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
