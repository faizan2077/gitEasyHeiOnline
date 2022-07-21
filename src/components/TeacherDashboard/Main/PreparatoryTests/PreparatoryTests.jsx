import React from "react";

import "./PreparatoryTests.scss";

const PreparatoryTests = ({
  preparatoryTests = [
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: true,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "MOCK TEST JEE - 1",
      subtitle: "06 Nov 2021, 8:00 PM",
      completed: false,
    },
  ],
}) => {
  return (
    <div className="preparatoryTests">
      <article className="preparatoryTests__grid">
        <div className="preparatoryTests__grid__header">
          <h4 className="preparatoryTests__grid__header__title">Completed</h4>
        </div>
        <div className={`preparatoryTests__grid__row`}>
          {preparatoryTests.map((item) =>
            item.completed ? (
              <div
                key={item.name}
                className="preparatoryTests__grid__row__item"
              >
                <h6 className="preparatoryTests__grid__row__item__title" to="">
                  {item.title}
                </h6>
                <p className="preparatoryTests__grid__row__item__subtitle">
                  {item.subtitle}
                </p>
                <button className="preparatoryTests__grid__row__item__reportBtn">
                  Report
                </button>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </article>
      <article className="preparatoryTests__grid">
        <div className="preparatoryTests__grid__header">
          <h4 className="preparatoryTests__grid__header__title">Test Series</h4>
        </div>
        <div className={`preparatoryTests__grid__row`}>
          {preparatoryTests.map((item) =>
            item.completed === false ? (
              <div
                key={item.name}
                className="preparatoryTests__grid__row__item"
              >
                <h6 className="preparatoryTests__grid__row__item__title" to="">
                  {item.title}
                </h6>
                <p className="preparatoryTests__grid__row__item__subtitle">
                  {item.subtitle}
                </p>
                <button className="preparatoryTests__grid__row__item__beginBtn">
                  Begin
                </button>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </article>
    </div>
  );
};

export default PreparatoryTests;
