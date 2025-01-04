import React from "react";
import { Outlet } from "react-router-dom";
import TaskManagementApp from "../components/TaskManagement";

const Layout = () => {
  return (
    <div>
      <TaskManagementApp />
    </div>
  );
};

export default Layout;
