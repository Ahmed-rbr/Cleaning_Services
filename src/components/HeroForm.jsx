import React from "react";
import Input from "./Input";
import { FiX } from "react-icons/fi";
import { ServicesData } from "../assets/ServicesData";
const HeroForm = ({ show = false, close }) => {
  return (
    <form
      className="flex  w-full  md:mt-12 shadow-lg   bg-bgPrimary md:w-128 dark:bg-bgPrimaryDark  items-start rounded-2xl  gap-4 m-auto p-4  flex-col "
      action="#"
    >
      <div className="flex w-full justify-between items-center">
        {" "}
        <h1 className="md:text-4xl text-2xl font-medium text-primary dark:text-primaryDark">
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
      <div className="grid text-xs gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
        {ServicesData.map((service, id) => (
          <label key={id} className="flex items-center gap-2 cursor-pointer">
            <Input required={false} className="checkbox" type="checkbox" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.title}
            </span>
          </label>
        ))}
      </div>

      <button onClick={close} className="btnBook">
        Get Started Today
      </button>
    </form>
  );
};

export default HeroForm;
