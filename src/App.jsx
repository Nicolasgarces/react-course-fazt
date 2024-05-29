import { useState, useEffect } from 'react';
import TasksList from './components/TasksList'
import TaskForm from './components/TaskForm'
import tareas from "./tasks";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tareas);
  },[]);

  const createTaks = ({title, description}) => {
    setTasks([...tasks, {
      title,
      id: tasks.length,
      description
    }])
  }

  const deleteTasks = (taskId) =>{
   setTasks(tasks.filter(task => task.id !== taskId))
  }


  return (
    <div>
      <TaskForm createTaks={createTaks}/>
      <TasksList tasks={tasks} deleteTasks={deleteTasks}/>
    </div>
  )
}

export default App