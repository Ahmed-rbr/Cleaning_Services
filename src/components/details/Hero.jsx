import { FaStar, FaClock } from "react-icons/fa";

const Hero = ({ service }) => {
  return (
    <div className="flex md:flex-row flex-col p-4 gap-3 mb-8 justify-between">
      <h1 className="text-3xl capitalize">{service.title}</h1>
      <div className="flex gap-5 items-center">
        <p className="flex gap-1 items-center">
          <FaClock className="text-bgAccent" /> {service.time}
        </p>

        <p className="flex gap-1 items-center">
          <FaStar className="text-bgAccent" />
          {service.rating} Ratings
        </p>
      </div>
    </div>
  );
};

export default Hero;
