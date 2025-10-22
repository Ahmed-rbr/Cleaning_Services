import { lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";
const Footer = lazy(() => import("../components/Footer"));
const HeroPages = lazy(() => import("../components/HeroPages"));
const AboutHeroSec = lazy(() => import("../components/AboutHeroSec"));
const AboutStats = lazy(() => import("../components/AboutStats"));
const AboutQuotes = lazy(() => import("../components/AboutQuotes"));
const JoinUs = lazy(() => import("../components/JoinUs"));

const About = () => {
  const Loader = () => {
    return (
      <div className="flex justify-center items-center py-20">
        <ClipLoader color="#36d7b7" size={40} />
      </div>
    );
  };

  return (
    <article className="space-y-12 bg ">
      <Suspense fallback={<Loader />}>
        {" "}
        <HeroPages
          p={
            "  We’ll create high-quality linkable content and build at least 40high-authority links to each asset, paving the way for you to growyour ranking, improve brand."
          }
          h1={"Making automation accessible to everyone"}
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        {" "}
        <AboutHeroSec />
      </Suspense>
      <Suspense fallback={<Loader />}>
        {" "}
        <AboutStats />
      </Suspense>
      <Suspense fallback={<Loader />}>
        {" "}
        <AboutQuotes />
      </Suspense>
      <Suspense fallback={<Loader />}>
        {" "}
        <JoinUs />
      </Suspense>
      <Suspense fallback={<Loader />}>
        {" "}
        <Footer />
      </Suspense>
    </article>
  );
};

export default About;
