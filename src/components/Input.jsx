import React from "react";

const Input = ({ type, placeholder = "", className = "", required = true }) => {
  return (
    <input
      required={required}
      name="name"
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
