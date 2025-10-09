import { FaBroom, FaSoap, FaTrashAlt, FaHandsWash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div className="max-w-screen pb-12 bg-primaryDark text-primary dark:bg-primary dark:text-primaryDark flex md:flex-row flex-col gap-8  justify-between px-8">
      <div className="flex md:w-3/6 w-full space-y-4 items-center md:items-baseline flex-col gap-4">
        <span className="font-semibold tracking-wide text-primary rounded-full bg-bgAccent  px-4 py-2">
          Gleamer cleaning
        </span>
        <h2 className="lg:text-6xl md:text-5xl  text-center text-3xl md:text-left font-semibold dark:text-primaryDark text-primary">
          Let us make your home shine & spotless
        </h2>
        <p className="dark:text-primaryDark/90  text-center text-primary/90">
          The desks are polished and dust-free, the carpets are fresh and
          spotless.
        </p>
        <ul className="md:grid md:grid-cols-2 gap-4 justify-center items-center flex flex-col">
          <li className="flex flex-col items-center">
            <div className="w-12 m-auto h-12 justify-center flex items-center rounded-2xl bg-primary/40  ">
              <FaBroom className="w-6 h-6 " />
            </div>{" "}
            <span className="dark:text-primaryDark/90 text-primary/90">
              Cleaning for allergy relief
            </span>
          </li>{" "}
          <li className="flex flex-col items-center">
            <div className="w-12 m-auto h-12 justify-center flex items-center rounded-2xl bg-primary/40  ">
              <FaHandsWash className="w-6 h-6 " />
            </div>{" "}
            <span className="dark:text-primaryDark/90 text-primary/90">
              Residential deep cleaning
            </span>
          </li>{" "}
          <li className="flex flex-col items-center">
            <div className="w-12 m-auto h-12 justify-center flex items-center rounded-2xl bg-primary/40  ">
              <FaSoap className="w-6 h-6 " />
            </div>{" "}
            <span className="dark:text-primaryDark/90 text-primary/90">
              Customized cleaning plans
            </span>
          </li>{" "}
          <li className="flex flex-col items-center">
            <div className="w-12 m-auto h-12 justify-center flex items-center rounded-2xl bg-primary/40  ">
              <FaTrashAlt className="w-6 h-6 " />
            </div>{" "}
            <span className="dark:text-primaryDark/90 sm:mb-12  text-primary/90">
              Seasonal cleaning
            </span>
          </li>
        </ul>
        <NavLink to={"contact"}>
          <span className="font-semibold tracking-wide text-primary rounded bg-bgAccent  px-4 py-2">
            Contact Us{" "}
          </span>
        </NavLink>
      </div>

      <div className="flex w-fit mb-8 md:w-3/6 justify-center items-center">
        <img className="" src="./imgs/herounder2.jpg" />
      </div>
    </div>
  );
};

export default Features;
