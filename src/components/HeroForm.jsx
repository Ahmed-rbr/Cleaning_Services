import React from "react";
import Input from "./Input";

const HeroForm = () => {
  return (
    <form
      className="flex   md:mt-12 shadow-lg   bg-bgPrimary md:w-128 dark:bg-bgPrimaryDark  items-start rounded-2xl  gap-6 m-auto p-4  flex-col "
      action="#"
    >
      <h1 className="text-4xl font-medium ">Get a free quote</h1>
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
      <label className="font-medium">Service options *</label>
      <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-700">Regular Cleaning</span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-700">Regular Cleaning</span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-700">Regular Cleaning</span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-700">Regular Cleaning</span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-700">Regular Cleaning</span>
        </label>{" "}
        <label className="flex items-center gap-2 cursor-pointer">
          <Input className="checkbox" type={"checkbox"} />
          <span className="text-sm text-gray-700">Regular Cleaning</span>
        </label>
      </div>
      <button className="btnBook">Get Started Today</button>
    </form>
  );
};

export default HeroForm;
