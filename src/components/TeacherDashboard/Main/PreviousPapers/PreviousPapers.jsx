import React from "react";

import "./PreviousPapers.scss";

const PreviousPapers = ({
  previousPapers = [
    {
      title: "JEE 2018",
      subtitle: "06 Feb 2021, 8:00 PM",
      completed: true,
    },
    {
      title: "KCET 2018 - Chemistry",
      subtitle: "21 Mar 2021, 8:00 PM",
      completed: true,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
    {
      title: "JEE 2014",
      subtitle: "02 Feb 2021, 8:00 PM",
      completed: false,
    },
  ],
}) => {
  return (
    <div className="previousPapers">
      <article className="previousPapers__grid">
        <div className="previousPapers__grid__header">
          <h4 className="previousPapers__grid__header__title">Completed</h4>
        </div>
        <div className={`previousPapers__grid__row`}>
          {previousPapers.map((item) =>
            item.completed ? (
              <div key={item.name} className="previousPapers__grid__row__item">
                <h6 className="previousPapers__grid__row__item__title" to="">
                  {item.title}
                </h6>
                <p className="previousPapers__grid__row__item__subtitle">
                  {item.subtitle}
                </p>
                <button className="previousPapers__grid__row__item__reportBtn">
                  Report
                </button>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </article>
      <article className="previousPapers__grid">
        <div className="previousPapers__grid__header">
          <h4 className="previousPapers__grid__header__title">
            Previous Papers
          </h4>
        </div>
        <div className="previousPapers__grid__dropDowns">
          <div className="previousPapers__grid__dropDowns__dropdown">
            <span className="previousPapers__grid__dropDowns__dropdown__text">
              Year
            </span>{" "}
            <img
              className="previousPapers__grid__dropDowns__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
          <div className="previousPapers__grid__dropDowns__dropdown">
            <span className="previousPapers__grid__dropDowns__dropdown__text">
              Exams
            </span>{" "}
            <img
              className="previousPapers__grid__dropDowns__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
          <div className="previousPapers__grid__dropDowns__dropdown">
            <span className="previousPapers__grid__dropDowns__dropdown__text">
              Subject
            </span>{" "}
            <img
              className="previousPapers__grid__dropDowns__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
        </div>
        <div className={`previousPapers__grid__row`}>
          {previousPapers.map((item) =>
            item.completed === false ? (
              <div key={item.name} className="previousPapers__grid__row__item">
                <h6 className="previousPapers__grid__row__item__title" to="">
                  {item.title}
                </h6>
                <p className="previousPapers__grid__row__item__subtitle">
                  {item.subtitle}
                </p>
                <button className="previousPapers__grid__row__item__beginBtn">
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

export default PreviousPapers;
