import { FiMenu, FiX } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";

import LinkIteme from "./LinkIteme";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroForm from "./HeroForm";

const Navbar = () => {
  const [isopenModel, setOpenModel] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) setOpenModel(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  return (
    <nav className="min-w-screen py-8  m-auto fixed shadow-2xl gap-6 z-50 bg-bgPrimary text-primary dark:bg-bgPrimaryDark dark:text-primaryDark      top-0">
      <div className=" flex items-center justify-between  m-auto w-11/12 ">
        <div className="flex items-center gap-6 ">
          <div>
            <img
              className="hover:cursor-pointer"
              onClick={() => navigate("/")}
              src={isDark ? "/imgs/logod.svg" : "/imgs/logoo.svg"}
              alt="this is the logo"
            />
          </div>
          <div className="hidden gap-4  lg:flex">
            <LinkIteme text={"Home"} to={"/"} />

            <LinkIteme text={"About us"} to={"about"} />
            <LinkIteme text={"Service"} to={"service"} />

            <LinkIteme text={"Contact Us"} to={"contact"} />
          </div>
        </div>

        {}
        <div className="flex gap-4">
          <div className="hidden lg:flex gap-3">
            <Btn
              navigate={() => setOpenModel(true)}
              text={"Book a Service"}
              classes={"btnBook"}
            />
            <Btn
              navigate={() => navigate("/")}
              classes={"btnSign"}
              text={"Sign up/Sign in"}
            />
          </div>
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded">
            {isDark ? (
              <FaSun className="text-yellow-400 bg-blend-darken w-5 h-5" />
            ) : (
              <FaMoon className="text-gray-800 dark:text-gray-200 w-5 h-5" />
            )}
          </button>{" "}
          <FiMenu
            onClick={() => setOpen(true)}
            className={`${!isOpen ? "flex" : "hidden"}  w-8 h-8 lg:hidden `}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col fixed     transform transition-transform duration-500 ease-in-out
 z-50 h-screen w-4/5 sm:3/5 shadow-lg md:w-2/5  right-0 top-0 items-center   p-8 dark:bg-primary dark:text-primaryDark bg-bgPrimary text-primary`}
      >
        <div className="flex mb-8 w-4/5 justify-between">
          <span className="txt ">Menu</span>
          <FiX onClick={() => setOpen(false)} className="w-8 h-8" />
        </div>
        <div className="flex mb-4 flex-col gap-4">
          <LinkIteme onClick={() => setOpen(false)} text={"Home"} to={"/"} />

          <LinkIteme
            onClick={() => setOpen(false)}
            text={"About us"}
            to={"about"}
          />
          <LinkIteme
            onClick={() => setOpen(false)}
            text={"Service"}
            to={"service"}
          />

          <LinkIteme
            onClick={() => setOpen(false)}
            text={"Contact Us"}
            to={"contact"}
          />
        </div>
        <Btn
          navigate={() => navigate("/")}
          classes={"btnSign"}
          text={"Sign up/Sign in"}
        />
      </div>

      <div
        className={`${
          isopenModel ? "" : "hidden"
        }   fixed inset-0 m-auto md:w-2/5  w-full sm:w-4/5 p-4 top-0 mt-0 backdrop-blur-sm transition-opacity min-w-screen min-h-screen`}
      >
        <HeroForm close={() => setOpenModel(false)} show={true} />
      </div>
    </nav>
  );
};

export default Navbar;
