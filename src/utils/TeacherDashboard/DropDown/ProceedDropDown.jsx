import React, { useEffect, useState } from "react";

import "./DropDown.scss";

const ProceedDropDown = ({
  title = "Drop",
  options = ["Option1", "Option2", "Option3", "Option4"],
  type = "",
  valueinput="",
  setproceed,
  proceed,
  // type = "checkbox",
  required,
}) => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [menuHeight, setMenuHeight] = useState(0);

  const optionChangeHandler = (value) => {
  setCurrentOptions([value])

  setproceed(value)
   
  };

  const calculateIdealHeight = () => {
    return Math.min(32 + options.length * 37, 238);
  };

  return (
    <div
      className="dropDown"
      onMouseEnter={() => setMenuHeight(calculateIdealHeight())}
      onMouseLeave={() => setMenuHeight(0)}
    >
      <div
        className="dropDown__box"
        data-required={required ? "*required" : ""}
      >
        <div className="dropDown__box__text">{title}</div>
        <img
          src="/assets/images/teacher-dashboard-questions-board-down-arrow.svg"
          alt="Down"
          className="dropDown__box__image"
        />
      </div>
      <div className="dropDown__menu" style={{ height: `${menuHeight}px` }}>
        <div className="dropDown__menu__wrapper">
          {options.map((item) =>
            type !== "checkbox" ? (
              <div
                onClick={() => optionChangeHandler(item)}
                // title={item}
                className={
                  currentOptions[0] === item
                    ? "dropDown__menu__wrapper__item dropDown__menu__wrapper__item--selected"
                    : "dropDown__menu__wrapper__item"
                }
              >
                {item}
              </div>
            ) : (
              <div
                onClick={() => optionChangeHandler(item)}
                className={"dropDown__menu__wrapper__item"}
              >
                <span
                  className={
                    currentOptions.find((i) => i === item)
                      ? "dropDown__menu__wrapper__item__checkMark dropDown__menu__wrapper__item__checkMark--checked"
                      : "dropDown__menu__wrapper__item__checkMark"
                  }
                ></span>
                <div className="dropDown__menu__wrapper__item__checkbox">
                  {item}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProceedDropDown;
