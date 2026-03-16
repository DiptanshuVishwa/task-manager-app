import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useState } from "react";

function Dashboard(){

  const [refresh, setRefresh] = useState(false);

  const fetchTasks = () => {
    setRefresh(!refresh);
  };

  return(

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        Task Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <TaskForm fetchTasks={fetchTasks} />

        <TaskList refresh={refresh} />

      </div>

    </div>

  )

}

export default Dashboard;