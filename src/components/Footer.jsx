import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="flex bg-[#F4F3EE] flex-col  space-y-12 md:px-8 p-8">
      <div className="flex md:items-center border-b-1 py-6 border-gray-400 gap-6 flex-col md:flex-row justify-between">
        <div className="flex gap-6 lg:flex-row flex-col">
          <p className="text-sm md:3/5 lg:w-1/5">
            Stay updated with the latest news, promotions, and exclusive offers.
          </p>

          <div className="flex items-baseline md:items-center flex-col md:flex-row lg:justify-center gap-8">
            <form className="flex gap-4  items-center">
              <input
                className="inputHero"
                type="text"
                required
                placeholder="Enter your Email"
              />
              <button className="btnSign">Subscribe</button>
            </form>
            <p className="text-[9px] w-4/5 md:w-1/5">
              By subscribing, you agree to receive our promotional emails. You
              can unsubscribe at any time.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-2/5 md:w-1/5 gap-4">
          <FaFacebook className="text-gray-400  transition-all duration-150 hover:cursor-pointer  hover:text-bgAccent hover:scale-105" />
          <FaInstagram className="text-gray-400  transition-all duration-150 hover:cursor-pointer  hover:text-bgAccent hover:scale-105" />
          <FaTwitter className="text-gray-400  transition-all duration-150 hover:cursor-pointer  hover:text-bgAccent hover:scale-105" />
        </div>
      </div>
      <div className="flex py-6 gap-4 w-4/5 p-6 flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4 md-w-3/5 items-baseline">
          <p className="text-2xl tracking-wide md:w-3/5 md:text-3xl font-semibold">
            A cleaner home is just a call away - start your journey today.
          </p>
          <button onClick={() => navigate("/contact")} className="btnSign">
            Contact Us
          </button>
        </div>
        <ul className="flex w-fit flex-col gap-4">
          <Link className="  hover:text-bgAccent" to={"/"}>
            {" "}
            Home{" "}
          </Link>
          <Link className="  hover:text-bgAccent" to={"/about"}>
            {" "}
            About us{" "}
          </Link>
          <Link className="  hover:text-bgAccent" to={"/service"}>
            {" "}
            Get free quote{" "}
          </Link>
        </ul>
      </div>
      <div className=" border-t-1 gap-6  border-gray-400  ">
        <div className="flex mt-4 text-center items-center flex-col gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm">
            © 2025 CleaningServices - Developed by{" "}
            <a
              className="text-bgAccent"
              href={"https://github.com/Ahmed-rbr"}
              target="_blank"
            >
              Ahmed-rbr.
            </a>
          </p>
          <div className="flex w-ful items-center text-sm gap-4">
            <Link className="text-sm  hover:text-bgAccent" to={"/terms"}>
              Terms of service
            </Link>
            <Link className="text-sm  hover:text-bgAccent" to={"/privacy"}>
              Privacy policy{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
