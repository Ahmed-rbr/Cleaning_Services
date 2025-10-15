import React from "react";
import HeroForm from "../components/HeroForm";
import Services from "../components/Services";
import Features from "../components/Features";
import WhyUs from "../components/WhyUs";
import Feedback from "../components/Feedback";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <article className="">
      <section className="">
        <div className="px-3 md:px-8 py-8 bg-[url('/imgs/ban.jpg')] gap-8  items-center lg:flex-row flex-col bg-cover bg-center min-h-screen w-full flex justify-between   ">
          <div className="md:w-3/6 flex  lg:self-baseline-last flex-col px-6 gap-4  text-white">
            <h1 className="rounded-2xl p-2 font-medium text-xl bg-bgAccent text-primary w-max">
              Gleamer cleaning
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-normal">
              Trusted Residential Cleaning Services
            </h2>
            <p className="tracking-wide font-normal text-base sm:text-lg">
              Enjoy a pristine home with our expert cleaning services. Book now
              for a cleaner, fresher living space.
            </p>
          </div>

          <HeroForm />
        </div>
        <div className="overflow-hidden py-4 bg-bgAccent">
          <div className="flex animate-scroll md:animate-scrollLg hover:animation-paused whitespace-nowrap">
            <div className="flex">
              <p className="mx-4">Free estimates! Contact us today!</p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
              <p className="mx-4">
                Eco-friendly products for a healthier home environment!
              </p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
              <p className="mx-4">
                Book now and get 10% off your first cleaning service!
              </p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
              <p className="mx-4">
                Special discounts available for recurring cleaning services!
              </p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
            </div>

            <div className="flex">
              <p className="mx-4">Free estimates! Contact us today!</p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
              <p className="mx-4">
                Eco-friendly products for a healthier home environment!
              </p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
              <p className="mx-4">
                Book now and get 10% off your first cleaning service!
              </p>
              <div className="w-1 h-6 bg-primary mx-2"></div>
              <p className="mx-4">
                Special discounts available for recurring cleaning services!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryDark dark:bg-primary dark:text-primaryDark text-primary">
        <Services />
      </section>
      <section className="py-12 bg-primaryDark dark:bg-primary dark:text-primaryDark text-primary">
        <Features />
      </section>
      <section className="pb-12 bg-primaryDark dark:bg-primary dark:text-primaryDark text-primary">
        <WhyUs />
      </section>

      <section className="bg-primary  m-auto px-6 py-8">
        <Feedback />
      </section>
      <section className="py-12 bg-[#F8F8F5] dark:bg-[#303C40] dark:text-primaryDark text-primary">
        <Pricing />
      </section>
    </article>
  );
};

export default Home;
