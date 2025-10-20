import React from "react";

const QuotesCard = ({ img, title, quote }) => {
  return (
    <div className="flex shadow-2xl rounded    flex-col items-center text-center  gap-4">
      <img className="rounded-none h-64  w-80" src={img} alt="imgs" />
      <div className="flex py-2 px-4 w-4/5 gap-2 flex-col">
        <h2 className="font-medium">{title}</h2>
        <p className="text-gray-400 text-xs">{quote}</p>
      </div>
    </div>
  );
};

export default QuotesCard;
