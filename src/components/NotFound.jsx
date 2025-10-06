import React from "react";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      NotFound
      <Btn text={"go home"} navigate={() => navigate("/")} />
    </div>
  );
};

export default NotFound;
