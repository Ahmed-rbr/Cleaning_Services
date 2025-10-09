import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ServicesData } from "../assets/ServicesData";

const ServiceCard = () => {
  const services = ServicesData.slice(0, 3);
  return (
    <div className=" m-auto  px-6">
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-3 sm:grid-cols-2 m-auto gap-8 items-start py-1">
        {services?.map((service, index) => (
          <NavLink
            to={`service/${service.path}`}
            key={service.path}
            className="bg-transparent"
          >
            <div className="rounded-2xl  shadow-lg">
              <img
                src={service.pic}
                alt={service.title}
                className="w-full  object-cover block"
              />
            </div>

            <div className="  px-6 py-3 rounded-2xl bg-white shadow-lg flex items-center justify-between ">
              <div className="flex items-center gap-3">
                <p className="text-gray-400 text-sm">0{index + 1}.</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <div className="bg-lime-300 rounded-full p-2">
                <FaArrowRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
