import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { lazy, Suspense } from "react";
const ServiceCard = lazy(() => import("./ServiceCard"));
const Services = () => {
  const Loader = () => (
    <div className="flex justify-center items-center py-20">
      <ClipLoader color="#36d7b7" size={40} />
    </div>
  );
  return (
    <div className="space-y-8  pt-12  ">
      <div className="  flex px-6 items-center flex-col gap-4 md:justify-between lg:flex-row">
        <div className="flex flex-col gap-6 items-baseline">
          <span className="font-semibold tracking-wide rounded-full bg-primary/40 dark:bg-gray-200/10 px-4 py-2">
            Your home, our priority
          </span>
          <h2 className="text-3xl font-medium md:text-5xl">
            Our Professional Cleaning Services
          </h2>
        </div>
        <div className="flex flex-col gap-6 items-baseline">
          <p className=" md:w-4/6">
            Explore our efficient cleaning services designed to maintain a neat
            and tidy home environment.
          </p>
          <NavLink
            to={"service"}
            className="border-b-2 border-bgAccent hover:text-bgAccent"
          >
            View all services
          </NavLink>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <ServiceCard />
      </Suspense>
      <div className="bg-gray-500  h-12"></div>
    </div>
  );
};

export default Services;
