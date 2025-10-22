import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ServicesData } from "../assets/ServicesData";
import { ClipLoader } from "react-spinners";

const ServiceImage = lazy(() => import("./ServiceImage"));

const ServiceCard = () => {
  const services = ServicesData.slice(0, 3);
  const Loader = () => (
    <div className="flex justify-center items-center h-56">
      <ClipLoader color="#36d7b7" size={30} />
    </div>
  );
  return (
    <div className="m-auto px-6 mb-12 grid md:grid-cols-3 gap-6">
      {services?.map((service, index) => (
        <NavLink
          to={`/service/${service.path}`}
          key={service.path}
          className="group bg-transparent"
        >
          <div className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
            <Suspense>
              <ServiceImage src={service.picS} alt={service.title} />
            </Suspense>
          </div>

          <div className="mt-4 px-6 py-3 rounded-2xl bg-white shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-sm">0{index + 1}.</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>

            <div className="bg-lime-300 rounded-full p-2 group-hover:bg-lime-400 transition-colors">
              <FaArrowRight className="w-5 h-5 text-black" />
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ServiceCard;
