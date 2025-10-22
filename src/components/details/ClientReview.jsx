import { FaHome } from "react-icons/fa";

const ClientReview = ({ service }) => {
  return (
    <div className=" flex flex-col bg  gap-4 p-6 border border-gray-500 ">
      <FaHome className="text-4xl text-bgAccent" />
      <p className="dark:text-gray-200 font-normal text-xs  text-primary tracking-wide">
        {service.user_text}
      </p>

      <div className="flex txt text-xs gap-1 flex-col">
        <p className="font-medium">{service.user_name}</p>
        <p>{service.user_title}</p>
      </div>
    </div>
  );
};

export default ClientReview;
