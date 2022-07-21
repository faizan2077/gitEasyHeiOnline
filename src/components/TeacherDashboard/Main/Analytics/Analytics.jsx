import React, { useState } from "react";

import "./Analytics.scss";

// import { leaderBoardData } from "../../../constants/Dashboard/Results/results";
import ExtraTitle from "../../../../utils/Dashboard/ExtraTitle/ExtraTitle";

const Analytics = ({}) => {
  // TopBar
  const topBarItems = [
    "Practice Tests",
    "Test Series",
    "Previous Papers",
    "Assignments",
    "Preparatory Tests",
  ];
  const [topBar, setTopBar] = useState("Practice Tests");
  const topBarChangeHandler = (value) => {
    setTopBar(value);
  };

  const subjectBarItems = ["Maths", "Physics", "Chemistry"];
  const [subjectBar, setSubjectBar] = useState("Maths");
  const subjectBarChangeHandler = (value) => {
    setSubjectBar(value);
  };

  // TestData
  const testData = [
    {
      title: "Sets",
      analytics: [
        { title: "Total Questions", value: 35 },
        { title: "Correct Questions", value: 6 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 4 },
      ],
      day: "Today",
      date: "11 Oct 2021",
    },
    {
      title: "MOCK TEST JEE - 2",
      analytics: [
        { title: "Total Questions", value: 45 },
        { title: "Correct Questions", value: 30 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 15 },
      ],
      day: "Sun",
      date: "10 Oct 2021",
    },
    {
      title: "KCET 2014 - Chemistry",
      analytics: [
        { title: "Total Questions", value: 45 },
        { title: "Correct Questions", value: 30 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 15 },
      ],
      day: "Sat",
      date: "09 Oct 2021",
    },
    {
      title: "KCET 2014 - Chemistry",
      analytics: [
        { title: "Total Questions", value: 45 },
        { title: "Correct Questions", value: 30 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 15 },
      ],
      day: "Sat",
      date: "09 Oct 2021",
    },
    {
      title: "KCET 2014 - Chemistry",
      analytics: [
        { title: "Total Questions", value: 45 },
        { title: "Correct Questions", value: 30 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 15 },
      ],
      day: "Sat",
      date: "09 Oct 2021",
    },
    {
      title: "KCET 2014 - Chemistry",
      analytics: [
        { title: "Total Questions", value: 45 },
        { title: "Correct Questions", value: 30 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 15 },
      ],
      day: "Sat",
      date: "09 Oct 2021",
    },
    {
      title: "KCET 2014 - Chemistry",
      analytics: [
        { title: "Total Questions", value: 45 },
        { title: "Correct Questions", value: 30 },
        { title: "Accuracy", value: 20 },
        { title: "Incorrect Questions", value: 15 },
      ],
      day: "Sat",
      date: "09 Oct 2021",
    },
  ];
  // QuestionData
  const questionData = [
    {
      title: "Tests Taken",
      src: "dashboard-analytics-tests-taken.svg",
      number: 70,
    },
    {
      title: "Questions Attempted",
      src: "dashboard-analytics-questions-attempted.svg",
      number: 2000,
    },
    {
      title: "Correct Questions",
      src: "dashboard-analytics-correct-questions.svg",
      number: 1200,
    },
    {
      title: "Incorrect Questions",
      src: "dashboard-analytics-incorrect-questions.svg",
      number: 800,
    },
    {
      title: "Overall Accuracy",
      src: "dashboard-analytics-overall-accuracy.svg",
      number: 50,
    },
    {
      title: "Your Percentile",
      src: "dashboard-analytics-your-percentile.svg",
      number: 45,
    },
  ];

  return (
    <div className="analytics">
      <div className="container">
        <ExtraTitle title={"Analytics"} />
        <section className="analytics__topBar">
          {topBarItems.map((item) => (
            <p
              className={
                topBar === item
                  ? `analytics__topBar__item analytics__topBar__item--active`
                  : `analytics__topBar__item`
              }
              onClick={() => topBarChangeHandler(item)}
            >
              {item}
            </p>
          ))}
        </section>
        <section className="analytics__cardDeck">
          {questionData.map((item) => (
            <div className="analytics__cardDeck__card">
              <img
                src={`/assets/images/${item.src}`}
                alt={item.title}
                className="analytics__cardDeck__card__image"
              />
              <h6 className="analytics__cardDeck__card__title">{item.title}</h6>
              <p className="analytics__cardDeck__card__subtitle">
                {item.number}
              </p>
            </div>
          ))}
        </section>
        <section className="analytics__bottomWrapper">
          <article className="analytics__bottomWrapper__chartSection">
            <h5 className="analytics__bottomWrapper__chartSection__header">
              Performance Analysis
            </h5>
            <div className="analytics__bottomWrapper__chartSection__chart">
              <img
                src={`/assets/images/dashboard-analytics-chart-illustration.svg`}
                alt={"Chart"}
                className="analytics__bottomWrapper__chartSection__chart__image"
              />
            </div>
          </article>
          <article className="analytics__bottomWrapper__testSection">
            <h5 className="analytics__bottomWrapper__testSection__header">
              {`${topBar} Attempts`}
            </h5>
            <div className="analytics__bottomWrapper__testSection__nav">
              {subjectBarItems.map((item) => (
                <p
                  className={
                    subjectBar === item
                      ? `analytics__bottomWrapper__testSection__nav__item analytics__bottomWrapper__testSection__nav__item--active`
                      : `analytics__bottomWrapper__testSection__nav__item`
                  }
                  onClick={() => subjectBarChangeHandler(item)}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="analytics__bottomWrapper__testSection__contentWrapper">
              <div className="analytics__bottomWrapper__testSection__contentWrapper__content">
                {testData.map((item) => (
                  <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card">
                    <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__left">
                      <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__left__day">
                        {item.day}
                      </div>
                      <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__left__date">
                        {item.date.split(" ")[0]}
                      </div>
                      <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__left__month">
                        {item.date.split(" ")[1]}
                      </div>
                      <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__left__year">
                        {item.date.split(" ")[2]}
                      </div>
                    </div>
                    <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__right">
                      <h5 className="analytics__bottomWrapper__testSection__contentWrapper__content__card__right__header">
                        {item.title}
                      </h5>
                      <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__right__grid">
                        {item.analytics.map((param) => (
                          <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__right__grid__item">
                            <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__right__grid__item__title">
                              {param.title}
                            </div>
                            <div className="analytics__bottomWrapper__testSection__contentWrapper__content__card__right__grid__item__value">
                              {param.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Analytics;
