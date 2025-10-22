import React from "react";

const Input = ({ type, placeholder = "", className = "" }) => {
  return (
    <input
      required
      name="name"
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
