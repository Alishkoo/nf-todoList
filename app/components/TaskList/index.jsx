import React, {useState, useEffect} from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({tasks, filter, toggleTaskStatus, handleDeleteTask}) => {

  const [filteredTasks, setTasks] = useState(tasks);

  useEffect(() => {
    let filteredTasks = tasks;
    if (filter === 'active'){
      filteredTasks = tasks.filter(task => !task.completed)
    } else if (filter === 'completed'){
      filteredTasks = tasks.filter(task => task.completed)
    }
    setTasks(filteredTasks)
  }, [filter, tasks])

  return (
    <><ul>
    {filteredTasks.map(task => (
      <TaskItem key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} handleDeleteTask={handleDeleteTask} />
    ))}
    </ul></>
  );
};

export default TaskList;
