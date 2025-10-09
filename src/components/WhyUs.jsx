import React from "react";

const WhyUs = () => {
  return (
    <div>
      <div className="flex items-center gap-6 flex-col">
        <hr className="border-t-2 border-black/70 dark:border-white/70 my-4 w-full" />

        <span className="font-semibold tracking-wide text-primary rounded-full bg-bgAccent  px-4 py-2">
          Why choose us?
        </span>
        <h2 className="lg:text-6xl md:text-5xl  text-center text-3xl md:text-left font-semibold dark:text-primaryDark text-primary">
          Let us make your home shine & spotless
        </h2>
        <ul className="grid dark:text-primaryDark text-primary lg:grid-cols-5 md:grid-cols-3 grid-cols-1 px-8 gap-5">
          <li className="flex items-baseline flex-col  gap-4">
            {" "}
            <span className="px-4 py-1 shadow-2xl font-semibold text-xl rounded-full bg-bgAccent">
              1
            </span>
            <p className="font-medium">
              Our team is highly trained and experienced, ensuring thorough and
              professional cleaning every time.
            </p>
          </li>{" "}
          <li className="flex items-baseline flex-col  gap-4">
            {" "}
            <span className="px-4 py-1 shadow-2xl font-semibold text-xl rounded-full bg-bgAccent">
              2
            </span>
            <p className="font-medium">
              We offer tailored cleaning plans to meet your specific needs.
            </p>
          </li>{" "}
          <li className="flex items-baseline flex-col  gap-4">
            {" "}
            <span className="px-4 py-1 shadow-2xl font-semibold text-xl rounded-full bg-bgAccent">
              3
            </span>
            <p className="font-medium">
              We use eco-friendly cleaning products that are safe for your
              family and pets.
            </p>
          </li>{" "}
          <li className="flex items-baseline flex-col  gap-4">
            {" "}
            <span className="px-4 py-1 shadow-2xl font-semibold text-xl rounded-full bg-bgAccent">
              4
            </span>
            <p className="font-medium">
              We provide flexible scheduling to fit your busy lifestyle.
            </p>
          </li>{" "}
          <li className="flex items-baseline flex-col  gap-4">
            {" "}
            <span className="px-4 py-1 shadow-2xl font-semibold text-xl rounded-full bg-bgAccent">
              5
            </span>
            <p className="font-medium">
              Our satisfaction guarantee ensures you’ll be happy with our
              service, or we’ll make it right.
            </p>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
