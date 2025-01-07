import React from "react";
import TaskManagementApp from "../components/TaskManagement";
import { useNavigate } from "react-router-dom";

const AllTask = ({ tasks, setTasks }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-cover">
      <div className="absolute top-0 right-0 p-5">
        <button
          className="px-8 py-3 rounded text-white font-sans font-bold bg-violet-600 transition-colors hover:bg-violet-700"
          onClick={() => navigate("/add-task")}
        >
          Add Tasks
        </button>
      </div>
      <TaskManagementApp tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default AllTask;
