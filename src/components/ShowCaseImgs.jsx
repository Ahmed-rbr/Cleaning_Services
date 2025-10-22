import React from "react";

const ShowCaseImgs = ({ handleImg }) => {
  return (
    <div className="flex gap-8">
      <img
        key={"1"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/clean.jpg"
        alt="img"
        loading="lazy"
        onClick={() => handleImg("./imgs/clean.jpg")}
      />
      <img
        key={"18"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/clean2.jpg"
        onClick={() => handleImg("./imgs/clean2.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1ju"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/cos3.jpg"
        onClick={() => handleImg("./imgs/cos3.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1jj"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/cos4.jpg"
        onClick={() => handleImg("./imgs/cos4.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1fg"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/herounder2.jpg"
        onClick={() => handleImg("./imgs/herounder2.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"hghs1"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/heroimg.jpg"
        onClick={() => handleImg("./imgs/heroimg.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1ji"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/clean.jpg"
        onClick={() => handleImg("./imgs/clean.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"198"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/clean2.jpg"
        onClick={() => handleImg("./imgs/clean2.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1jlou"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/cos3.jpg"
        onClick={() => handleImg("./imgs/cos3.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1pj"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/cos4.jpg"
        onClick={() => handleImg("./imgs/cos4.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"1g"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/herounder2.jpg"
        onClick={() => handleImg("./imgs/herounder2.jpg")}
        alt="img"
        loading="lazy"
      />
      <img
        key={"kh1"}
        className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
        src="./imgs/heroimg.jpg"
        onClick={() => handleImg("./imgs/heroimg.jpg")}
        alt="img"
        loading="lazy"
      />
    </div>
  );
};

export default ShowCaseImgs;
