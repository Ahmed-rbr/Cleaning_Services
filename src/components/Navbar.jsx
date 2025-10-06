import { FiSun, FiMoon } from "react-icons/fi";
import LinkIteme from "./LinkIteme";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
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

  const navigate = useNavigate();
  return (
    <nav className="min-w-screen m-auto fixed shadow-2xl gap-6 z-50 bg-bgPrimary text-primary dark:bg-bgPrimaryDark dark:text-primaryDark      top-0">
      <div className=" flex items-center justify-between  m-auto w-11/12 ">
        <div className="flex items-center gap-6 ">
          <div>
            <img
              className="w-24 h-24"
              onClick={() => navigate("/")}
              src="/imgs/logo.png"
              alt="this is the logo"
            />
          </div>
          <div className="hidden lg:flex">
            <LinkIteme text={"Home"} to={"/"} />

            <LinkIteme text={"About us"} to={"about"} />
            <LinkIteme text={"Service"} to={"service"} />

            <LinkIteme text={"Contact Us"} to={"contact"} />
          </div>
        </div>
        <div className="hidden lg:flex gap-3">
          <Btn text={"Book a Service"} classes={"btnBook"} />
          <Btn
            navigate={() => navigate("/")}
            classes={"btnSign"}
            text={"Sign up/Sign in"}
          />
        </div>
        {}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          {isDark ? (
            <FiSun className="text-yellow-400 w-6 h-6" />
          ) : (
            <FiMoon className="text-gray-800 dark:text-gray-200 w-6 h-6" />
          )}
        </button>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
