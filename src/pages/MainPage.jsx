import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-hero-pattern  bg-no-repeat bg-cover">
      <div className="">
        <h1 className="text-7xl font-extrabold text-center text-gray-800 font-sans">
          Task Management App
        </h1>
        <p className="text-center text-gray-700 mt-5 font-mono font-bold">
          Manage your <span className="text-violet-700">tasks</span> with{" "}
          <span className="text-violet-700">ease</span>.
        </p>
        <div className="flex gap-10 justify-center items-center mt-16">
          <button
            onClick={() => navigate("/add-task")}
            className="px-8 py-3 rounded text-white font-sans font-bold bg-violet-600 transition-colors hover:bg-violet-700"
          >
            Add Task
          </button>
          <button
            onClick={() => navigate("/task")}
            className="px-8 py-3 rounded text-violet-600 border-violet-600 hover:text-white font-sans font-bold border transition-colors hover:bg-violet-700"
          >
            View Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
