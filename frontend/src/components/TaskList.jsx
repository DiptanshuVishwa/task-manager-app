import { useEffect, useState } from "react";
import API from "../services/api";

function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const fetchTasks = async () => {
    try {

      const res = await API.get(
        `/tasks?page=${page}&search=${search}&status=${status}`
      );

      setTasks(res.data.tasks);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page, search, status]);


  const deleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (error) {

      alert("Delete failed");

    }

  };


  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-semibold mb-4">
        Your Tasks
      </h2>


      <div className="flex gap-3 mb-4">

        <input
          className="border p-2 rounded flex-1"
          placeholder="Search tasks..."
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e)=>setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

      </div>


      {tasks.length === 0 ? (

        <p className="text-gray-500">
          No tasks found.
        </p>

      ) : (

        tasks.map((task) => (

          <div
            key={task._id}
            className="border rounded-lg p-4 mb-4 hover:shadow transition"
          >

            <h3 className="font-bold text-lg">
              {task.title}
            </h3>

            <p className="text-gray-600">
              {task.description}
            </p>

            <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
task.status === "completed"
? "bg-green-100 text-green-700"
: task.status === "in-progress"
? "bg-yellow-100 text-yellow-700"
: "bg-gray-100 text-gray-700"
}`}>
{task.status}
</span>

            <button
              onClick={()=>deleteTask(task._id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>

          </div>

        ))

      )}


      <div className="flex gap-3 mt-4">

        <button
          disabled={page === 1}
          onClick={()=>setPage(page-1)}
          className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={()=>setPage(page+1)}
          className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300"
        >
          Next
        </button>

      </div>

    </div>

  );

}

export default TaskList;