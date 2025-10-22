import Input from "../Input";
const ContactForm = () => {
  return (
    <form
      className="flex flex-col w-full   shadow-2xl p-4 m-auto rounded gap-4 col-span-2"
      action="#"
    >
      <Input className="inputHero" placeholder="Full name*" type={"text"} />
      <Input className="inputHero" type="tel" placeholder="Phone number*" />
      <Input
        className="inputHero"
        type={"email"}
        placeholder="Email address*"
      />
      <textarea className="inputHero h-24" name="name"></textarea>
      <button
        className="btnBook self-baseline px-5 py-3 text-xs font-bold"
        name="btn"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
