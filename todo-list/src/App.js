
import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a to-do app', completed: true },
        { id: 3, text: 'Practice coding', completed: false }
    ]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() === '') return;
        const newTasks = [...tasks, { id: tasks.length + 1, text: newTask, completed: false }];
        setTasks(newTasks);
        setNewTask('');
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const toggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add a new task..."
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'complete' : ''}>
                        {task.text}
                        <div>
                            <button onClick={() => toggleComplete(task.id)}>
                                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                            </button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
