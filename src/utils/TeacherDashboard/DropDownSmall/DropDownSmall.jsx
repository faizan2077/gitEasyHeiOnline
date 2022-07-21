import React, { useEffect, useState } from "react";

import "./DropDownSmall.scss";

const DropDownSmall = ({
  title = "Drop",
  options = ["Option1", "Option2", "Option3", "Option4"],
  type = "",
  // type = "checkbox",
  required,
}) => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [menuHeight, setMenuHeight] = useState(0);

  const optionChangeHandler = (value) => {
    if (type === "checkbox") {
      const doesExist = currentOptions.find((item) => item === value);
      if (doesExist) {
        setCurrentOptions([...currentOptions.filter((item) => item !== value)]);
      } else {
        let temp = currentOptions;
        temp.push(value);
        setCurrentOptions([...temp]);
      }
    } else {
      const doesExist = currentOptions.find((item) => item === value);
      if (doesExist) {
        setCurrentOptions([]);
      } else {
        setCurrentOptions([value]);
      }
    }
  };

  const calculateIdealHeight = () => {
    return Math.min(8 + options.length * 44, 238);
  };

  useEffect(() => {
    console.log(currentOptions);
  }, [currentOptions]);

  return (
    <div
      className="dropDownSmall"
      onMouseEnter={() => setMenuHeight(calculateIdealHeight())}
      onMouseLeave={() => setMenuHeight(0)}
    >
      <div
        className="dropDownSmall__box"
        data-required={required ? "*required" : ""}
      >
        <div className="dropDownSmall__box__text">{title}</div>
        <img
          src="/assets/images/teacher-dashboard-questions-board-down-arrow.svg"
          alt="Down"
          className="dropDownSmall__box__image"
        />
      </div>
      <div
        className="dropDownSmall__menu"
        style={{ height: `${menuHeight}px` }}
      >
        <div className="dropDownSmall__menu__wrapper">
          {options.map((item) =>
            type !== "checkbox" ? (
              <div
                onClick={() => optionChangeHandler(item)}
                // title={item}
                className={
                  currentOptions[0] === item
                    ? "dropDownSmall__menu__wrapper__item dropDownSmall__menu__wrapper__item--selected"
                    : "dropDownSmall__menu__wrapper__item"
                }
              >
                {item}
              </div>
            ) : (
              <div
                onClick={() => optionChangeHandler(item)}
                className={"dropDownSmall__menu__wrapper__item"}
              >
                <span
                  className={
                    currentOptions.find((i) => i === item)
                      ? "dropDownSmall__menu__wrapper__item__checkMark dropDownSmall__menu__wrapper__item__checkMark--checked"
                      : "dropDownSmall__menu__wrapper__item__checkMark"
                  }
                ></span>
                <div className="dropDownSmall__menu__wrapper__item__checkbox">
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

export default DropDownSmall;
