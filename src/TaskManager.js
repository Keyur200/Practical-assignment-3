// src/components/TaskManager.js
import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class TaskManager extends Component {
  state = {
    tasks: [
      { id: 1, text: 'Sample Task 1', completed: false },
      { id: 2, text: 'Sample Task 2', completed: true },
    ],
  };

  addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  toggleTaskCompletion = (id) => {
    const tasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks });
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="task-manager">
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
