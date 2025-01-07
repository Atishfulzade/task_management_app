import React, { useEffect, useState } from "react";
import AddTaskComponent from "../components/AddTaskComponent";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  console.log(tasks);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) toast.error("Please enter a task");
    if (
      tasks.some((task) => task.name.toLowerCase() === newTask.toLowerCase())
    ) {
      toast.error("Task already exists");
      return;
    }
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask("");
    }
    toast.success("Task added successfully");
  };

  return (
    <div className="flex relative justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-cover">
      <div className="absolute top-0 right-0 p-5">
        <button
          className="hover:underline transition- all hover:text-violet-700    "
          onClick={() => navigate("/task")}
        >
          See all Tasks
        </button>
      </div>
      <AddTaskComponent
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
    </div>
  );
};

export default AddTask;
