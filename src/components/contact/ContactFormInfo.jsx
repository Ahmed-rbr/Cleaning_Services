import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const ContactFormInfo = () => {
  return (
    <div className="flex flex-col p-8 py-12 m-auto w-full gap-4 rounded  bg-bgAccent text-primary  ">
      <h1 className="font-bold mb-3 text-2xl">Contact Information</h1>
      <p className="text-xs mb-8">
        We'll create high-quality linkable content and build at least 40
        high-authority.
      </p>
      <div className="flex md:text-xs font-bold flex-col gap-4">
        <div className="flex items-center gap-2">
          <FaPhone /> <span>+1 234 567 890</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope /> <span>info@example.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt /> <span>New York, USA</span>
        </div>
      </div>
    </div>
  );
};

export default ContactFormInfo;
