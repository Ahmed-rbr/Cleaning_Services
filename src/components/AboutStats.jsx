import React from "react";

const AboutStats = () => {
  return (
    <div className="  bg-indigo-100 mt-8 space-y-8  w-full  p-12">
      <div className="flex w-4/5 m-auto mb-6 gap-3 items-baseline flex-col">
        <span className="bg-bgAccent text-xs px-2 font-medium rounded-full text-black p-1.5">
          Who We Are
        </span>
        <h1 className="md:text-4xl text-3xl font-medium tracking-wide">
          Our Impact
        </h1>
        <p className="text-xs">
          Unlock the power of our versatile pricing plans designed to meet your
          every need.
        </p>
      </div>
      <div className="grid w-4/5 m-auto  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg rounded-xl gap-2 txt px-8 py-4 flex flex-col ">
          <span className="text-bgAccent font-bold text-4xl">17k+</span>
          <p className="text-xs">Customers Served</p>
        </div>
        <div className="bg txt rounded-xl gap-2 px-8 py-4 flex flex-col ">
          <span className="text-bgAccent font-bold text-4xl">700+</span>
          <p className="text-xs">Staff Strength</p>
        </div>
        <div className="bg txt rounded-xl gap-2 px-8 py-4 flex flex-col ">
          <span className="text-bgAccent font-bold text-4xl">5</span>
          <p className="text-xs">Sessions Completed</p>
        </div>
        <div className="bg txt rounded-xl gap-2 px-8 py-4 flex flex-col ">
          <span className="text-bgAccent font-bold text-4xl">50</span>
          <p className="text-xs">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
