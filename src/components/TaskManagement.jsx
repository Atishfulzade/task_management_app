import React, { useState, useEffect } from "react";
import SelectedDelete from "./SelectedDelete";

const TaskManagementApp = ({ tasks, setTasks }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
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

  return (
    <div className="w-[90%] md:w-1/2 h-4/5  bg-white p-5 rounded shadow-lg flex flex-col items-center overflow-y-auto">
      {tasks.length > 0 ? (
        <>
          <SelectedDelete
            deleteSlectedTask={deleteSlectedTask}
            tasks={tasks}
            selectAllTask={selectAllTask}
          />
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
                    onClick={() => toggleTaskCompletion(task.id)}
                  />
                  {task.name}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="cursor-pointer px-5 text-white py-1 hover:bg-red-700 transition-all bg-red-600 rounded"
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
