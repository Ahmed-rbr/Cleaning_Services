import Hero from "../components/details/Hero";
import Footer from "../components/Footer";
import Body from "../components/details/Body";
import { useParams } from "react-router-dom";
import { ServicesData } from "../assets/ServicesData";

const ServiceDetails = () => {
  const { name } = useParams();
  const service = ServicesData.find((ser) => ser.path === name);
  console.log(service);

  return (
    <article className="dark:bg-[#303C40] dark:text-primaryDark pt-24  m-auto bg-primaryDark text-primary">
      <section className="md:w-4/5 m-auto mb-8">
        <Hero service={service} />
        <Body service={service} />
      </section>
      <Footer />
    </article>
  );
};

export default ServiceDetails;
