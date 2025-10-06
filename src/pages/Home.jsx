import React from "react";
import HeroForm from "../components/heroForm";

const Home = () => {
  return (
    <div className=" px-8 py-12 bg-[url('/imgs/ban.jpg')] gap-8  items-center lg:flex-row flex-col bg-cover bg-center min-h-screen w-full flex justify-between   ">
      <div className="md:w-3/6 flex  lg:self-baseline-last flex-col px-6 gap-4  text-white">
        <h1 className="rounded-2xl p-2 font-medium text-xl bg-bgAccent text-primary w-max">
          Gleamer cleaning
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-normal">
          Trusted Residential Cleaning Services
        </h2>
        <p className="tracking-wide font-normal text-base sm:text-lg">
          Enjoy a pristine home with our expert cleaning services. Book now for
          a cleaner, fresher living space.
        </p>
      </div>

      <HeroForm />
    </div>
  );
};

export default Home;
