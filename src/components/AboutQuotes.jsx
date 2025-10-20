import QuotesCard from "./QuotesCard";

const AboutQuotes = () => {
  return (
    <div className="txt bg p-8 w-full ">
      <div className="flex mb-6  items-center text-center   gap-3  flex-col">
        <span className="bg-bgAccent text-xs px-2 font-medium rounded-full text-black p-1.5">
          Quotes
        </span>
        <h1 className="md:text-4xl text-3xl font-medium tracking-wide">
          Here's what our customer say
        </h1>
        <p className="text-xs">
          The hidden perks of maintaining a pristine home environment
        </p>
      </div>

      <div className="grid gap-8 sm:p-18 grid-cols-1 md:grid-cols-2">
        <QuotesCard
          img={"./imgs/pic1.png"}
          title={"Amazing Lawn Service!"}
          quote={
            "I'm so impressed with how tidy and clean my yard looks every week."
          }
        />
        <QuotesCard
          img={"./imgs/pic2.png"}
          title={"Kitchen Sparkles Every Time"}
          quote={"They left my kitchen looking brand new."}
        />
        <QuotesCard
          img={"./imgs/pic3.png"}
          title={"Bathroom Looks Hotel-Quality"}
          quote={"Our bathroom hasn’t looked this good in years."}
        />
        <QuotesCard
          img={"./imgs/pic4.png"}
          title={"Carpets Like New"}
          quote={
            "Our rugs were dull and stained, but now they look fresh and vibrant."
          }
        />
      </div>
    </div>
  );
};

export default AboutQuotes;
