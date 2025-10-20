import React from "react";
import HeroPages from "../components/HeroPages";
import AboutHeroSec from "../components/AboutHeroSec";
import AboutStats from "../components/AboutStats";
import AboutQuotes from "../components/AboutQuotes";

const About = () => {
  return (
    <article className="space-y-12">
      <HeroPages
        p={
          "  We’ll create high-quality linkable content and build at least 40high-authority links to each asset, paving the way for you to growyour ranking, improve brand."
        }
        h1={"Making automation accessible to everyone"}
      />
      <AboutHeroSec />
      <AboutStats />
      <AboutQuotes />
    </article>
  );
};

export default About;
