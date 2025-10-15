import React from "react";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ title, path, text, price }) => {
  const navigate = useNavigate();

  return (
    <div className="pricing-card">
      <p className="text-xl font-medium">{title}</p>
      <p className="text-gray-500 dark:text-gray-200">{text}</p>
      <p className=" dark:text-bgPrimary font-bold  text-bgPrimaryDark">
        {" "}
        ${price}{" "}
      </p>
      <button onClick={() => navigate("service/" + path)} className="btn-price">
        Book a service
      </button>
    </div>
  );
};

export default PricingCard;
