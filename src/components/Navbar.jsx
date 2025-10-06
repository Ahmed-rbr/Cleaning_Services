import React from "react";
import LinkIteme from "./LinkIteme";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" min-w-full fixed shadow-2xl  z-50 bg-bgPrimary text-primary dark:bg-bgPrimaryDark dark:text-primaryDark      top-0">
      <div className="flex items-center justify-between w-11/12 m-auto ">
        <div className="flex items-center gap-4">
          <img
            className="w-24 h-24"
            onClick={() => navigate("/")}
            src="/imgs/logo.png"
            alt="this is the logo"
          />
          <LinkIteme text={"Home"} to={"/"} />

          <LinkIteme text={"About us"} to={"about"} />
          <LinkIteme text={"Service"} to={"service"} />

          <LinkIteme text={"Contact Us"} to={"contact"} />
        </div>
        <div className="flex gap-3">
          <Btn text={"Book a Service"} classes={"btnBook"} />
          <Btn
            navigate={() => navigate("/")}
            classes={"btnSign"}
            text={"Sign up/Sign in"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
