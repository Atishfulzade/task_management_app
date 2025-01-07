import React from "react";

const AddTaskComponent = ({ addTask, newTask, setNewTask }) => {
  return (
    <form className="flex justify-between relative md:w-[50%] w-4/5 shadow-md items-center my-10">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="md:p-3 border  p-2  focus:outline-violet-600 w-full backdrop-blur bg-white text-slate-900S border-violet-400 rounded placeholder:text-slate-600  "
      />
      <button
        onClick={addTask}
        type="submit"
        className="absolute md:py-3 py-2 rounded-sm right-0 hover:bg-violet-700 text-white font-medium md:px-10 px-3 bg-violet-600 "
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskComponent;
