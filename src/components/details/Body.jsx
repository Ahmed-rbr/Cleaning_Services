import { ServicesData } from "../../assets/ServicesData";
import Cart from "./Cart";
import ClientReview from "./ClientReview";
import Features from "./Features";
import Process from "./Process";

const Body = ({ service }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3 grid-cols-1 ">
      <div className="flex md:p-2 px-6 col-span-2 gap-6 flex-col">
        <img className="rounded-none" src={service.picS} alt="" />
        <p className="text-black dark:text-gray-300    tracking-wide">
          {service.description}
        </p>
        <Features service={service} />
        <Process service={service} />
      </div>
      <div className="flex px-4 flex-col gap-5">
        <Cart serviceInfo={service} />
        <ClientReview service={service} />
      </div>
    </div>
  );
};

export default Body;
