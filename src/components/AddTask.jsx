import React from "react";

const AddTask = ({ addTask, newTask, setNewTask }) => {
  return (
    <div className="flex justify-between relative md:w-[50%] items-center my-10">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="p-2 border  focus:outline-violet-600 w-full border-violet-400 rounded placeholder:text-slate-600  "
      />
      <button
        onClick={addTask}
        className="absolute py-[8px] rounded-sm right-0 text-white font-medium md:px-10 px-5 bg-violet-700 "
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
