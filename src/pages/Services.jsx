import CardSrc from "../components/CardSrc";
import HeroPages from "../components/HeroPages";
import { ServicesData } from "../assets/ServicesData";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <article className=" dark:bg-primary gap-4 dark:text-primaryDark text-primary">
      <HeroPages
        p={
          "Discover our full range of residential and commercial cleaning services. From deep cleaning to routine maintenance, our trusted team ensures your space is spotless and sanitized."
        }
        h1={"Services – Sparkling Clean Every Time"}
      />
      <section className="p-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ServicesData.map((service) => (
          <CardSrc
            path={service.path}
            title={service.title}
            price={service.priceBefore}
            img={service.picS}
          />
        ))}
      </section>
      <Footer />
    </article>
  );
};

export default Services;
