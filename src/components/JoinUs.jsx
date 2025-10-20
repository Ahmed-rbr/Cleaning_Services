import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg py-16">
      <div className="txt w-4/5 m-auto  grid grid-cols-1 md:grid-cols-2 rounded   ">
        <img className=" rounded-none" src="./imgs/join.png" alt="" />
        <div className="flex p-6 justify-center flex-col items-baseline  gap-4 dark:bg-primary bg-[#F8F8F5]">
          <span className="bg-bgAccent text-xs px-2 font-medium rounded-full text-black p-1.5">
            Gleamer cleaning
          </span>
          <h1 className="md:text-4xl text-3xl mb-4 font-medium tracking-wide">
            Interested in joining us?
          </h1>
          <p className="text-xs mb-2">
            We’re always on the hunt for people who share our mission of giving
            our customers a great day. If you’re looking to build your career,
            achieve your goals, and realize your full potential - come and join
            us.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-primaryDark py-2 px-4 rounded hover:cursor-pointer  hover:text-[#A8FF39] duration-150 transition-all"
          >
            Explore our careers{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
