import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard(){

  return(

    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">
          Task Dashboard
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <TaskForm/>
          <TaskList/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;