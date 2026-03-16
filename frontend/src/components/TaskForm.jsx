import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/tasks", {
      title,
      description,
      status
    });

    if (res.status === 201 || res.status === 200) {
      alert("Task created");

      setTitle("");
      setDescription("");
      setStatus("pending");

      fetchTasks();
    }

  } catch (error) {
    console.log(error.response);
    alert("Error creating task");
  }
};

  return (
    <div className="bg-white p-6 rounded-lg shadow">

  <h2 className="text-xl font-semibold mb-4">
    Create Task
  </h2>

  <form onSubmit={handleSubmit} className="space-y-3">

    <input
      className="w-full border p-2 rounded"
      placeholder="Title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
    />

    <input
      className="w-full border p-2 rounded"
      placeholder="Description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
    />

    <select
      className="w-full border p-2 rounded"
      value={status}
      onChange={(e)=>setStatus(e.target.value)}
    >
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>

    <button
      className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    >
      Add Task
    </button>

  </form>

</div>
  );
}

export default TaskForm;