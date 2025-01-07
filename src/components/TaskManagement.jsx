import React, { useState, useEffect } from "react";
import AddTask from "./AddTaskComponent";
import { useNavigate } from "react-router-dom";

const TaskManagementApp = ({ tasks, setTasks }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const navigate = useNavigate();
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const selectAllTask = () => {
    let selectedAllTask = tasks.map((task) => {
      task.completed = true;
      return task;
    });
    setTasks(selectedAllTask);
    setSelectedTasks(selectedAllTask);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const deleteSlectedTask = () => {
    let filterTask = tasks.filter((task) => !task.completed);
    setTasks(filterTask);
    return tasks;
  };
  console.log(selectedTasks);

  return (
    <div className="w-full md:w-1/2 h-4/5 bg-white p-5 rounded shadow-lg flex flex-col items-center overflow-y-auto">
      {tasks.length > 0 ? (
        <>
          <div className="flex gap-3 sticky top-0 bg-white  w-full justify-between py-3 items-center">
            <div
              className="flex justify-center cursor-pointer items-center gap-2 px-3 border py-1 rounded"
              onClick={selectAllTask}
            >
              <input
                type="checkbox"
                id="select-all"
                name="select-all"
                checked={tasks.every((task) => task.completed)}
              />
              <p className="text-slate-700" name="select-all">
                Select All
              </p>
            </div>
            {tasks.some((task) => task.completed) && (
              <button
                className=" px-3 py-2  border   rounded"
                onClick={deleteSlectedTask}
              >
                Delete selected task
              </button>
            )}
          </div>
          <ul className="w-full  list-none overflow-scroll">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between w-full items-center p-3 mb-3 rounded
                 ${task.completed ? "bg-green-100" : "bg-red-100"}`}
              >
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  className="flex gap-2 cursor-pointer text-xl font-medium"
                >
                  <input
                    type="checkbox"
                    className=""
                    checked={task.completed}
                    // value={task.completed}
                    onClick={() => toggleTaskCompletion(task.id)}
                  />
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
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl mb-9 text-slate-800 font-bold ">
            No tasks added yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskManagementApp;
