import React from "react";
import { useNavigate } from "react-router-dom";

import "./GoBack.scss";

const GoBack = ({ linkText, relativeURL }) => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(relativeURL || -1);
  };

  return (
    <section className="goBack" onClick={goBackHandler}>
      <img
        className="goBack__icon"
        src="/assets/images/dashboard-teacher-go-back.svg"
        alt="Back arrow"
      />
      <h5 className="goBack__text">{linkText || ""}</h5>
    </section>
  );
};

export default GoBack;
