import { FaCheckCircle } from "react-icons/fa";

const Features = ({ service }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="txt text-2xl font-medium ">Features</h1>
      <ul className="flex flex-col gap-3">
        {service.features.map((ser, id) => (
          <li
            className="text-black/90 flex gap-3 items-center dark:text-gray-200 font-normal"
            key={id}
          >
            <FaCheckCircle className="text-bgAccent bg" /> {ser}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
