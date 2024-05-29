import TaskCard from "./TaskCard";

export function TasksList({ tasks, deleteTasks }) {
  return (
    <div>
      <h1>Task List</h1>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTasks={deleteTasks}/>
      ))}
    </div>
  );
}

export default TasksList;
