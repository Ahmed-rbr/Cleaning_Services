import HeroPages from "../components/HeroPages";
import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";
const ContactFormInfo = lazy(() =>
  import("../components/contact/ContactFormInfo")
);
const ContactForm = lazy(() => import("../components/contact/ContactForm"));
const Footer = lazy(() => import("../components/Footer"));

const ContactUs = () => {
  const Loader = () => (
    <div className="flex justify-center items-center h-56">
      <ClipLoader color="#36d7b7" size={30} />
    </div>
  );
  return (
    <article className="bg txt">
      <HeroPages
        className={"flex-col"}
        p={
          "We’d love to hear from you! Whether you have questions, ideas, or a project you want to discuss — reach out, and we’ll get back to you shortly."
        }
        h1={"Have questions? Ready to help!"}
      />{" "}
      <section className="grid shadow-4xl sm:p-4 md:w-4/5 m-auto items-center justify-center lg:p-12 dark:bg-gray-600 bg-primaryDark txt gap-4 md:grid-cols-3">
        <Suspense fallback={<Loader />}>
          <ContactFormInfo />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ContactForm />
        </Suspense>
      </section>
      <section className="pt-12 pb-4  bg txt">
        <Suspense fallback={<Loader />}>
          {" "}
          <Footer />
        </Suspense>
      </section>
    </article>
  );
};

export default ContactUs;
