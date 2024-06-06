'use client'
import Image from 'next/image';
import { useState } from 'react';
import TaskList from './components/TaskList';


export default function Home() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Баха лучший", completed: false},
    {id: 2, text: "Улдана топ", completed: true}
  ])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTask = () => {
    if (!inputValue) return;
    setTasks([...tasks, {id: tasks.length + 1, text: inputValue, completed: false}])
  };

  const handleToggleTask = (id) => {
      setTasks(tasks.map(task=>
        task.id === id ? {...task, completed: !task.completed} : task
      ));
  };

  const handleDeleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));

  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed:!task.completed} : task))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>
        
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do ?"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-4 rounded ml-4"
        >
          Add Task
        </button>
      </div>
      <div className="bg-gray-800 rounded p-4">
          <TaskList tasks={tasks} filter={filter} toggleTaskStatus={toggleTaskStatus} handleDeleteTask={handleDeleteTask}/>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span> {tasks.length} items left</span>  {/* show how many uncompleted items left */}
          <div>
            <button onClick={() => setFilter('all')} className={`mr-2 ${filter === 'all' ? 'text-white' : ''}`}>All</button>
            <button onClick={() => setFilter('active')} className={`mr-2 ${filter === 'active' ? 'text-white' : ''}`}>Active</button>
            <button onClick={() => setFilter('completed')} className={`${filter === 'completed' ? 'text-white' : ''}`}>Completed</button>
          </div>
          <button
            onClick={() => setTasks(tasks.filter(task => !task.completed))}
            className="text-gray-400 hover:text-white"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
