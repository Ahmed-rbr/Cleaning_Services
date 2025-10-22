const Btn = ({ text, name = "btn", navigate = false, classes }) => {
  return (
    <button
      name={name}
      onClick={navigate ? navigate : undefined}
      className={classes}
    >
      {text}
    </button>
  );
};

export default Btn;
