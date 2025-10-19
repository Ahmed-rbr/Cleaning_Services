import React from "react";

const HeroPages = ({ h1, p }) => {
  return (
    <div className="flex bg-bgPrimaryDark gap-6 items-baseline lg:items-center text-primaryDark p-12 justify-between lg:flex-row flex-col">
      <div className="flex gap-4 items-baseline  flex-col">
        <span className="rounded-full text-xs font-semibold bg-bgAccent px-2 py-1 text-primary">
          Cleaning Services
        </span>
        <h1 className="font-bold text-2xl lg:text-4xl ">{h1}</h1>
      </div>
      <div className="text-left">
        <p className="lg:w-3/5 m-auto text-sm tracking-wide">{p}</p>
      </div>
    </div>
  );
};

export default HeroPages;
