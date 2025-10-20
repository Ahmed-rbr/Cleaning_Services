import React from "react";
import { Link } from "react-router-dom";

const AboutHeroSec = () => {
  return (
    <div className="txt w-4/5 m-auto  grid grid-cols-1 md:grid-cols-2 rounded   ">
      <img className="w-fit rounded-none" src="./imgs/ply.png" alt="" />
      <div className="flex p-4 justify-center flex-col items-baseline  gap-4 dark:bg-primary bg-[#F8F8F5]">
        <span className="bg-bgAccent text-xs px-2 font-medium rounded-full text-black p-1.5">
          Who We Are
        </span>
        <h1 className="md:text-4xl text-3xl font-medium tracking-wide">
          More time to live, work and have game
        </h1>
        <p className="text-xs">
          Maecenas sapien nisl, eleifend eu bibendum sit amet, pharetra a orci.
          Vivamus euismod vehicula tortor, in sollicitudin dui consectetur in.
          Nam dolor justo, venenatis nec luctus in, ullamcorper ac turpis. Donec
          elementum accumsan placerat. Proin facilisis, diam sit amet.
        </p>
        <Link className=" border-b-2 border-bgAccent hover:text-[#A8FF39] duration-150 transition-all">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default AboutHeroSec;
