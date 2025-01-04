import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";

const TaskManagementApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask) alert("Please enter a task");
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex justify-center flex-col p-10">
      <h1 className="text-center font-sarif text-3xl font-extrabold text-slate-700">
        Task Management App
      </h1>
      <AddTask addTask={addTask} newTask={newTask} setNewTask={setNewTask} />
      <div>
        {tasks.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between md:w-[50%] items-center p-3 mb-3 rounded
                 ${task.completed ? "bg-green-100" : "bg-red-100"}`}
              >
                <span
                  onClick={() => toggleTaskCompletion(task.id)}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  {task.name}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    padding: "5px 10px",
                    fontSize: "14px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TaskManagementApp;
