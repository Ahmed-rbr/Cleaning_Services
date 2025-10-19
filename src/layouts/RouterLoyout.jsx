import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RouterLoyout = () => {
  return (
    <div className="m-auto  space-y-24 font-inter">
      <Navbar />
      <div className=" pt-26">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default RouterLoyout;
