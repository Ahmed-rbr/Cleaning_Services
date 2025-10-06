const Btn = ({ text, navigate = false, classes }) => {
  return (
    <button onClick={navigate ? navigate : undefined} className={classes}>
      {text}
    </button>
  );
};

export default Btn;
