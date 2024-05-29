import { useState } from "react";

function TaskForm({ createTaks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTaks({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };

  return (
    <div>
      TaskForm
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe una tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>save</button>
      </form>
    </div>
  );
}

export default TaskForm;
