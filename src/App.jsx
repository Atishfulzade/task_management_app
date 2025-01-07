import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddTask from "./pages/AddTask";
import AllTask from "./pages/AllTask";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // Handle null properly
  });
  console.log(localStorage.getItem("tasks"));

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/add-task"
          element={<AddTask tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/task"
          element={<AllTask tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </>
  );
}

export default App;
