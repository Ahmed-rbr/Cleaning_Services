import { lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";

const HomeHero = lazy(() => import("../components/HomeHero"));
const Services = lazy(() => import("../components/Services"));
const Features = lazy(() => import("../components/Features"));
const WhyUs = lazy(() => import("../components/WhyUs"));
const Feedback = lazy(() => import("../components/Feedback"));
const Pricing = lazy(() => import("../components/Pricing"));
const ShowCase = lazy(() => import("../components/ShowCase"));
const Stats = lazy(() => import("../components/Stats"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  const Loader = () => (
    <div className="flex justify-center items-center py-20">
      <ClipLoader color="#36d7b7" size={40} />
    </div>
  );
  return (
    <article className="">
      <section className="">
        <Suspense fallback={<Loader />}>
          <HomeHero />
        </Suspense>
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
        <Suspense fallback={<Loader />}>
          {" "}
          <Services />
        </Suspense>
      </section>
      <section className="py-12 bg-primaryDark dark:bg-primary dark:text-primaryDark text-primary">
        <Suspense fallback={<Loader />}>
          {" "}
          <Features />
        </Suspense>
      </section>
      <section className="pb-12 bg-primaryDark dark:bg-primary dark:text-primaryDark text-primary">
        <Suspense fallback={<Loader />}>
          {" "}
          <WhyUs />
        </Suspense>
      </section>

      <section className="bg-primary  m-auto px-6 py-8">
        <Suspense fallback={<Loader />}>
          {" "}
          <Feedback />
        </Suspense>
      </section>
      <section className="py-12 bg-[#F8F8F5] dark:bg-[#303C40] dark:text-primaryDark text-primary">
        <Suspense fallback={<Loader />}>
          {" "}
          <Pricing />
        </Suspense>
      </section>

      <section className="py-12 bg-bgPrimary dark:bg-primary dark:text-primaryDark text-primary">
        <Suspense fallback={<Loader />}>
          {" "}
          <ShowCase />
        </Suspense>
      </section>
      <section className="py-12 bg-bgPrimary dark:bg-primary dark:text-primaryDark text-primary">
        <Suspense fallback={<Loader />}>
          {" "}
          <Stats />
        </Suspense>
      </section>
      <section className="pt-12 pb-4 bg-bgPrimary dark:bg-primary dark:text-primaryDark text-primary">
        <Suspense fallback={<Loader />}>
          {" "}
          <Footer />
        </Suspense>
      </section>
    </article>
  );
};

export default Home;
