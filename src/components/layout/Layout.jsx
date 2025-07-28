// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../nav/Navbar";


const Layout = () => {
  return (
    <div className="relative dark:bg-black bg-white ">
      <Navbar />
      <div className="md:ml-[15rem]"> {/* tránh đè lên Navbar nếu cần */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
