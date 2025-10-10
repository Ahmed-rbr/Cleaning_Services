import React from "react";

const Feedback = () => {
  return (
    <div className="flex space-y-12  text-primaryDark  flex-col">
      <div className="flex md:4/5 gap-6 md:flex-row flex-col  justify-around items-center">
        <div className="flex md:w-4/12  gap-4 flex-col items-center  md:items-baseline">
          <span className="font-normal tracking-wide text-primaryDark rounded-full bg-white/20  px-4 py-2">
            What our clients say
          </span>
          <h2 className="md:text-5xl   text-center text-3xl md:text-left font-semibold text-primaryDark ">
            Feedback from satisfied customers.
          </h2>
        </div>
        <p className="text-bgPrimary text-xs tracking-wider md:w-3/12">
          Gain insight into how our cleaning services have transformed homes and
          exceeded expectations.
        </p>
      </div>
      <div className="flex md:w-full gap-4 justify-around flex-col  lg:flex-row md:p-8 ">
        <div className="md:w-6/12">
          <img className="" src="./imgs/cos3.jpg" />
        </div>

        <div className="flex lg:w-6/12 gap-4 object-cover col-auto  flex-col ">
          <div className="flex  md:flex-row flex-col  gap-4 items-center">
            {" "}
            <img className="md:w-6/12" src="./imgs/cos1.jpg" />
            <div className="flex gap-3  flex-col">
              <p>
                I'm consistently impressed by the professionalism and
                thoroughness of Gleamer's team. My house has never looked
                better!
              </p>
              <span className="text-primaryDark/70">- Mark Thompson</span>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 items-center">
            {" "}
            <img className="md:w-6/12 " src="./imgs/cos4.jpg" />
            <div className="flex flex-col gap-3">
              <p>
                I appreciate the flexibility and reliability of Gleamer's
                services. They always go above and beyond to exceed my
                expectations!
              </p>
              <span className="text-primaryDark/70">- Emily Roberts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
