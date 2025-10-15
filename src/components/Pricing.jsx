import React from "react";
import PricingCard from "./PricingCard";
import { ServicesData } from "../assets/ServicesData";
const Pricing = () => {
  return (
    <div className="flex flex-col m-auto items-center gap-4">
      <div className="flex flex-col gap-4 w-4/5 md:w-3/5 text-center items-center">
        {" "}
        <span className="text-primary font-medium bg-bgAccent rounded-full px-4 py-1.5">
          Transparent pricing
        </span>
        <h1 className="text-2xl lg:text-5xl md:w-4/5  font-semibold tracking-wide text-center mb-8">
          Budget-friendly options for a cleaner home
        </h1>
      </div>

      <div className="flex flex-col w-full gap-4">
        {ServicesData.map((ser) => (
          <PricingCard
            text={ser.pricingDesc}
            title={ser.title}
            price={ser.priceBefore}
            path={ser.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
