import React from "react";

import "./TestSeries.scss";

const TestSeries = ({
  testSeries = [
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
    <div className="testSeries">
      <article className="testSeries__grid">
        <div className="testSeries__grid__header">
          <h4 className="testSeries__grid__header__title">Completed</h4>
        </div>
        <div className={`testSeries__grid__row`}>
          {testSeries.map((item) =>
            item.completed ? (
              <div key={item.name} className="testSeries__grid__row__item">
                <h6 className="testSeries__grid__row__item__title" to="">
                  {item.title}
                </h6>
                <p className="testSeries__grid__row__item__subtitle">
                  {item.subtitle}
                </p>
                <button className="testSeries__grid__row__item__reportBtn">
                  Report
                </button>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </article>
      <article className="testSeries__grid">
        <div className="testSeries__grid__header">
          <h4 className="testSeries__grid__header__title">Test Series</h4>
        </div>
        <div className={`testSeries__grid__row`}>
          {testSeries.map((item) =>
            item.completed === false ? (
              <div key={item.name} className="testSeries__grid__row__item">
                <h6 className="testSeries__grid__row__item__title" to="">
                  {item.title}
                </h6>
                <p className="testSeries__grid__row__item__subtitle">
                  {item.subtitle}
                </p>
                <button className="testSeries__grid__row__item__beginBtn">
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

export default TestSeries;
