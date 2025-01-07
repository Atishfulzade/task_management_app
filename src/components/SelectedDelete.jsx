import React from "react";

const SelectedDelete = ({ tasks, selectAllTask, deleteSlectedTask }) => {
  return (
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
        <p className="text-slate-700 text-sm" name="select-all">
          Select All
        </p>
      </div>
      {tasks.some((task) => task.completed) && (
        <button
          className=" px-3 py-2 text-sm hover:bg-slate-100 border rounded"
          onClick={deleteSlectedTask}
        >
          Delete selected task
        </button>
      )}
    </div>
  );
};

export default SelectedDelete;
