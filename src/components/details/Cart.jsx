import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Btn from "../Btn";
import HeroForm from "../HeroForm";

const Cart = ({ serviceInfo }) => {
  const [isopenModel, setOpenModel] = useState(false);
  return (
    <div className="bg-primary text-primaryDark px-8 py-4 flex-col shadow-2xl rounded flex ">
      <span className="line-through text-gray-300 text-xs">
        {serviceInfo.priceAfter}
      </span>
      <span className="mb-8 text-3xl font-bold">{serviceInfo.priceBefore}</span>
      <ul className="flex mb-4 flex-col gap-4">
        {serviceInfo.offers.map((service, id) => (
          <li key={id} className="flex gap-1.5">
            <FaStar /> {service}
          </li>
        ))}
      </ul>
      <Btn
        navigate={() => setOpenModel(true)}
        text={"Book a Service"}
        classes={
          "bg-bgAccent py-2 rounded text-primary font-medium text-center"
        }
      />
      {isopenModel && (
        <div
          className={`${
            isopenModel ? "" : "hidden"
          }   fixed inset-0 m-auto  md:w-2/5 z-50  w-full sm:w-4/5 p-4 top-0 mt-0 backdrop-blur-sm transition-opacity`}
        >
          <HeroForm close={() => setOpenModel(false)} show={true} />
        </div>
      )}
    </div>
  );
};

export default Cart;
