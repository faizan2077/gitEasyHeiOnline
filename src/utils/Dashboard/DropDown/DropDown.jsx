import React, { useState } from "react";

import "./DropDown.scss";

const DropDown = ({
  title = "Drop",
  options = ["Option1", "Option2", "Option3", "Option4"],
  currentOption,
  setCurrentOption,
  required,
}) => {
  const optionChangeHandler = (value) => {
    setCurrentOption(currentOption === value ? "" : value);
  };

  return (
    <div className="dropD">
      <div className="dropD__box" data-required={required ? "*required" : ""}>
        <div className="dropD__box__text">{title}</div>
        <img
          src="/assets/images/dashboard-questions-down-arrow.svg"
          alt="Down"
          className="dropD__box__image"
        />
      </div>
      <div className="dropD__menu">
        {options.map((item) => (
          <div
            onClick={() => optionChangeHandler(item)}
            className={
              currentOption === item
                ? "dropD__menu__item dropD__menu__item--selected"
                : "dropD__menu__item"
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
