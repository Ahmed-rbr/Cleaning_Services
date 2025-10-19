import React from "react";

const Stats = () => {
  return (
    <div className="bg-[url('/imgs/happ.jpg')] bg-cover flex items-baseline justify-center flex-col p-6 gap-4 bg-center bg-no-repeat h-screen w-full">
      <h1 className="text-4xl text-primaryDark lg:text-6xl font-bold">408K+</h1>
      <p className="text-2xl  text-primaryDark  font-normal">
        People who have started <span className="text-bgAccent">cleaning</span>
      </p>
      <p className="text-sm tracking-wide text-primaryDark">
        Cleaning services in England cater to a wide range of needs from
        residential.
      </p>
      <button className="btnSign">Get a free quote </button>
    </div>
  );
};

export default Stats;
