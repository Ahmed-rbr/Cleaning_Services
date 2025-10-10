import React from "react";
import Input from "./Input";
import { FiX } from "react-icons/fi";
const HeroForm = ({ show = false, close }) => {
  return (
    <form
      className="flex  w-full  md:mt-12 shadow-lg   bg-bgPrimary md:w-128 dark:bg-bgPrimaryDark  items-start rounded-2xl  gap-6 m-auto p-4  flex-col "
      action="#"
    >
      <div className="flex w-full justify-between items-center">
        {" "}
        <h1 className="text-4xl font-medium text-primary dark:text-primaryDark">
          Get a free quote
        </h1>
        <FiX
          onClick={close}
          className={`${
            show ? "" : "hidden"
          } w-12 hover:cursor-pointer  text-red-600`}
        />
      </div>

      <Input
        className={"inputHero"}
        placeholder={"Full Name *"}
        type={"text"}
      />
      <Input
        className={"inputHero"}
        placeholder={"Phone Number *"}
        type={"phone"}
      />
      <Input
        className={"inputHero"}
        placeholder={"email address *"}
        type={"email"}
      />
      <label className="font-medium text-primary dark:text-primaryDark">
        Service options *
      </label>
      <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm  text-gray-600 dark:text-gray-400">
            Regular Cleaning
          </span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Regular Cleaning
          </span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm  text-gray-600 dark:text-gray-400">
            Regular Cleaning
          </span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm  text-gray-600 dark:text-gray-400">
            Regular Cleaning
          </span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm  text-gray-600 dark:text-gray-400">
            Regular Cleaning
          </span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm  text-gray-600 dark:text-gray-400">
            Regular Cleaning
          </span>
        </label>
      </div>
      <button className="btnBook">Get Started Today</button>
    </form>
  );
};

export default HeroForm;
