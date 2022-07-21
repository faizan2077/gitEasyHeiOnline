import React from "react";
import { useNavigate } from "react-router-dom";

import "./GoBack.scss";

const GoBack = ({ linkText, relativeURL, title, arrowHidden }) => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(relativeURL || -1);
  };

  return (
    <section className="goBackStudent">
      {!arrowHidden && (
        <img
          className="goBackStudent__icon"
          src="/assets/images/dashboard-go-back-icon.svg"
          alt="Back arrow"
          onClick={goBackHandler}
        />
      )}
      <h5 className="goBackStudent__text">{title}</h5>
    </section>
  );
};

export default GoBack;
