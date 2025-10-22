import { useState } from "react";
import { lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";
const ShowCaseImgs = lazy(() => import("./ShowCaseImgs"));
const ShowCase = () => {
  const [img, setImg] = useState(null);
  const [show, setShow] = useState(false);

  const handleImg = (src) => {
    setShow(true);
    setImg(src);
  };

  const Loader = () => (
    <div className="flex justify-center items-center py-20">
      <ClipLoader color="#36d7b7" size={40} />
    </div>
  );
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
          <Suspense fallback={<Loader />}>
            <ShowCaseImgs handleImg={handleImg} />
          </Suspense>
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
