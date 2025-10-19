import { useState } from "react";

const ShowCase = () => {
  const [img, setImg] = useState(null);
  const [show, setShow] = useState(false);

  const handleImg = (src) => {
    setShow(true);
    setImg(src);
  };
  return (
    <div className="space-y-8">
      <div className="flex  m-auto flex-col gap-4 w-4/5 md:w-3/5 text-center items-center">
        {" "}
        <span className="text-primary font-medium bg-bgAccent rounded-full px-4 py-1.5">
          Our work in action
        </span>
        <h1 className="text-2xl lg:text-5xl md:w-4/5  font-semibold tracking-wide text-center mb-8">
          See the difference we make
        </h1>
      </div>

      <div className="overflow-hidden  flex gap-8">
        <div className="flex  items-center md:animate-scrollLgShow  animate-scrollShow">
          <div className="flex gap-8">
            <img
              key={"1"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/clean.jpg"
              alt=""
              onClick={() => handleImg("./imgs/clean.jpg")}
            />
            <img
              key={"18"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/clean2.jpg"
              onClick={() => handleImg("./imgs/clean2.jpg")}
            />
            <img
              key={"1ju"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/cos3.jpg"
              onClick={() => handleImg("./imgs/cos3.jpg")}
            />
            <img
              key={"1jj"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/cos4.jpg"
              onClick={() => handleImg("./imgs/cos4.jpg")}
            />
            <img
              key={"1fg"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/herounder2.jpg"
              onClick={() => handleImg("./imgs/herounder2.jpg")}
            />
            <img
              key={"hghs1"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/heroimg.jpg"
              onClick={() => handleImg("./imgs/heroimg.jpg")}
            />
            <img
              key={"1ji"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/clean.jpg"
              alt=""
              onClick={() => handleImg("./imgs/clean.jpg")}
            />
            <img
              key={"198"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/clean2.jpg"
              onClick={() => handleImg("./imgs/clean2.jpg")}
            />
            <img
              key={"1jlou"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/cos3.jpg"
              onClick={() => handleImg("./imgs/cos3.jpg")}
            />
            <img
              key={"1pj"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/cos4.jpg"
              onClick={() => handleImg("./imgs/cos4.jpg")}
            />
            <img
              key={"1g"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/herounder2.jpg"
              onClick={() => handleImg("./imgs/herounder2.jpg")}
            />
            <img
              key={"kh1"}
              className="w-64 hover:scale-110 hover:cursor-pointer transition-all duration-200"
              src="./imgs/heroimg.jpg"
              onClick={() => handleImg("./imgs/heroimg.jpg")}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          show ? "flex" : "hidden"
        } fixed inset-0 bg-black/70 backdrop-blur-sm z-50 justify-center items-center`}
      >
        <div className="relative">
          <img
            src={img}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/50 rounded-full px-3 py-1"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
