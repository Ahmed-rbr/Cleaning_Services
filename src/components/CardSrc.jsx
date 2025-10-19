import React from "react";
import { NavLink } from "react-router-dom";

const CardSrc = ({ path, title, price, img }) => {
  return (
    <NavLink
      to={path}
      className="flex shadow-2xl rounded-xl overflow-hidden flex-col border-1 border-gray-400"
    >
      <img
        className="h-full rounded-xl rounded-b-none hover:scale-105 "
        src={img}
        alt=""
      />
      <div className="flex p-3 justify-between">
        <p className="font-medium">{title}</p>
        <p className="text-bgAccent/90 dark:text-bgAccent font-medium">
          ${price}.00
        </p>
      </div>
    </NavLink>
  );
};

export default CardSrc;
