import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultsSpecific.scss";

import {
  leaderBoardData,
  practiceTestsData,
  results,
} from "../../../../constants/Dashboard/Results/results";
import * as actions from "../../../../../src/actions/results";
import GoBack from "../../../../utils/Dashboard/GoBack/GoBack";
import QuestionPerformance from "../../../../utils/Dashboard/QuestionPerformance/QuestionPerformance";


const defaultScoreCardsData = [
  {
    title: "Score",
    src: "dashboard-results-score.svg",
    obtainedScore: 160,
    maxScore: 300,
    orientation: "left",
  },
  {
    title: "Rank",
    src: "dashboard-results-rank.svg",
    obtainedRank: 16,
    totalRanks: 28,
    orientation: "right",
  },
];

const defaultQuestionData = {
  correct: {
    title: "Correct",
    src: "dashboard-results-correct-questions.svg",
    number: 20,
  },
  incorrect: {
    title: "Incorrect",
    src: "dashboard-results-incorrect-questions.svg",
    number: 11,
  },
  unattempted: {
    title: "Unattempted",
    src: "dashboard-results-unattempted-questions.svg",
    number: 44,
  },
};

const ResultsSpecific = (
  {
    // results = [],
  }
) => {
  // MenuBar
  const dispatch = useDispatch();
  const { state } = useLocation();
  
  const getResults = useCallback(
    (requestBody) => dispatch(actions.getResults(requestBody)),
    [dispatch]
  );
  const resultObj = useSelector((state) => state.result.result);
  const [scoreCardsData, setScoreCard] = useState(defaultScoreCardsData);
  const [currentMenu, setCurrentMenu] = useState(results[0]);
  const [questionData, setQuestionData] = useState(defaultQuestionData);

  const subjectLinks = [
    { title: "Overall" },
    { title: "maths" },
    { title: "physics" },
    { title: "chemistry" },
  ];
  //  ScoreCardsData
  const [activeSubject, setActiveSubject] = useState(subjectLinks[0]);

  useEffect(() => {
    const requestObject = {
      studentId: 123,
      testId: state.testId,
    };
    getResults(requestObject);
  }, [getResults]);

  useEffect(() => {
    console.log(resultObj);

    const currentResultObj = resultObj.filter((ele) => {
      return activeSubject.title === ele.subject;
    })[0];
    if (currentResultObj) {
      const currentScoreCard = [...scoreCardsData];
      const currentQuestionData = { ...questionData };
      Object.keys(currentQuestionData).forEach((ele) => {
        const eachTile = { ...currentQuestionData[ele] };
        eachTile.number = currentResultObj[ele];
        currentQuestionData[ele] = eachTile;
      });
      const scoreTile = { ...currentScoreCard[0] };
      const rankTile = { ...currentScoreCard[1] };
      scoreTile.obtainedScore = currentResultObj.score;
      scoreTile.maxScore = currentResultObj.totalScore;
      rankTile.obtainedRank = currentResultObj.rank;
      rankTile.totalRanks = currentResultObj.totalStudents;
      setScoreCard([scoreTile, rankTile]);
      console.log(currentQuestionData)
      setQuestionData(currentQuestionData);
    }
  }, [resultObj]);
  // QuestionData

  const subjectChangeHandler = (title) => {
    const newSubject = subjectLinks.find((item) => item.title === title);
    setActiveSubject(newSubject || activeSubject);
    const currentResultObj = resultObj.filter((ele) => {
      return activeSubject.title === ele.subject;
    })[0];
    if (currentResultObj) {
      const currentScoreCard = [...scoreCardsData];
      const currentQuestionData = { ...questionData };
      Object.keys(currentQuestionData).forEach((ele) => {
        const eachTile = { ...currentQuestionData[ele] };
        eachTile.number = currentResultObj[ele];
        currentQuestionData[ele] = {...eachTile};
      });
      const scoreTile = { ...currentScoreCard[0] };
      const rankTile = { ...currentScoreCard[1] };
      scoreTile.obtainedScore = currentResultObj.score;
      scoreTile.maxScore = currentResultObj.totalScore;
      rankTile.obtainedRank = currentResultObj.rank;
      rankTile.totalRanks = currentResultObj.totalStudents;
      console.log(currentQuestionData);
      setScoreCard([scoreTile, rankTile]);
      setQuestionData({...currentQuestionData});
    }
  };

  const performanceLinks = [
    { title: "Chapter Performance" },
    { title: "Question Performance" },
  ];

  const [activePerformance, setActivePerformance] = useState(
    performanceLinks[0]
  );

  const performanceChangeHandler = (title) => {
    const newPerformance = performanceLinks.find(
      (item) => item.title === title
    );
    setActivePerformance(newPerformance || activePerformance);
  };

  const currentQuestionData = [
    {
      title: "My attempt",
      subtitle: "Time taken by Me",
      answer: "Incorrect",
      time: 30,
    },
    {
      title: "Topper's attempt",
      subtitle: "Time taken by Topper",
      answer: "Correct",
      time: 10,
    },
  ];

  return (
    <div className="resultsSpecific">
    
      <GoBack
        title={
          window.location.pathname.slice(9).replaceAll("*", " ") ||
          "MOCK TEST JEE - 1"
        }
      />



      <div className="resultsSpecific__overall">
        <section className="resultsSpecific__overall__left">
          <article className="resultsSpecific__overall__left__subjectLinks">
            {subjectLinks.map((item) => {
              const isActive = item.title === activeSubject.title;
              return (
                <div
                  key={item.title}
                  className={`resultsSpecific__overall__left__subjectLinks__item ${
                    isActive &&
                    "resultsSpecific__overall__left__subjectLinks__item--active"
                  }`}
                  onClick={() => subjectChangeHandler(item.title)}
                >
                  <p className="resultsSpecific__overall__left__subjectLinks__item__title">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </article>
          <article className="resultsSpecific__overall__left__scorecards">
            {scoreCardsData.map((item) => (
              <div className="resultsSpecific__overall__left__scorecards__card">
                <img
                  src={`/assets/images/${item.src}`}
                  alt={item.title}
                  className={`resultsSpecific__overall__left__scorecards__card__image--${item.orientation}`}
                />
                {item.orientation === "left" && (
                  <img
                    src={`/assets/images/dashboard-results-percentage.svg`}
                    alt={item.title}
                    className={`resultsSpecific__overall__left__scorecards__card__image--percentage`}
                  />
                )}
                <div className="resultsSpecific__overall__left__scorecards__card__value">
                  {item.title === "Score"
                    ? `${item.obtainedScore}/${item.maxScore}`
                    : `${item.obtainedRank}/${item.totalRanks}`}
                </div>
                <div className="resultsSpecific__overall__left__scorecards__card__title">
                  {item.title}
                </div>
              </div>
            ))}
          </article>
          {/* {activeSubject.title === "Overall" ? (
            <article className="resultsSpecific__overall__left__scorecards">
              {scoreCardsData.map((item) => (
                <div className="resultsSpecific__overall__left__scorecards__card">
                  <img
                    src={`/assets/images/${item.src}`}
                    alt={item.title}
                    className={`resultsSpecific__overall__left__scorecards__card__image--${item.orientation}`}
                  />
                  {item.orientation === "left" && (
                    <img
                      src={`/assets/images/dashboard-results-percentage.svg`}
                      alt={item.title}
                      className={`resultsSpecific__overall__left__scorecards__card__image--percentage`}
                    />
                  )}
                  <div className="resultsSpecific__overall__left__scorecards__card__value">
                    {item.title === "Score"
                      ? `${item.obtainedScore}/${item.maxScore}`
                      : `${item.obtainedRank}/${item.totalRanks}`}
                  </div>
                  <div className="resultsSpecific__overall__left__scorecards__card__title">
                    {item.title}
                  </div>
                </div>
              ))}
            </article>
          ) : (
            <article className="resultsSpecific__overall__left__performanceBar">
              {performanceLinks.map((item) => {
                const isActive = item.title === activePerformance.title;
                return (
                  <div
                    key={item.title}
                    className={`resultsSpecific__overall__left__performanceBar__item ${
                      isActive &&
                      "resultsSpecific__overall__left__performanceBar__item--active"
                    }`}
                    onClick={() => performanceChangeHandler(item.title)}
                  >
                    <p className="resultsSpecific__overall__left__performanceBar__item__title">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </article>
          )} */}
          {(activePerformance.title === performanceLinks[0].title ||
            activeSubject.title === "Overall") && (
            <article className="resultsSpecific__overall__left__board">
              {activeSubject.title === "Overall" ? (
                <div className="resultsSpecific__overall__left__board__rows resultsSpecific__overall__left__board__rows--noScroll">
                  <div className="resultsSpecific__overall__left__board__rows__row">
                    <div className="resultsSpecific__overall__left__board__rows__row__header">
                      <span className="resultsSpecific__overall__left__board__rows__row__header--1">
                        {"Name"}
                      </span>
                    </div>
                    <div className="resultsSpecific__overall__left__board__rows__row__header">
                      <span className="resultsSpecific__overall__left__board__rows__row__header--rank">
                        {"Rank"}
                      </span>
                    </div>
                    <div className="resultsSpecific__overall__left__board__rows__row__header">
                      <span className="resultsSpecific__overall__left__board__rows__row__header--score">
                        {"Score"}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="resultsSpecific__overall__left__board__rows resultsSpecific__overall__left__board__rows--noScroll resultsSpecific__overall__left__board__rows--practice">
                  <div className="resultsSpecific__overall__left__board__rows__row">
                    <div className="resultsSpecific__overall__left__board__rows__row__header">
                      <span className="resultsSpecific__overall__left__board__rows__row__header--1">
                        {"Chapter"}
                      </span>
                    </div>
                    <div className="resultsSpecific__overall__left__board__rows__row__header">
                      <span className="resultsSpecific__overall__left__board__rows__row__header--2">
                        {"Correct attempts"}
                      </span>
                      <div className="resultsSpecific__overall__left__board__rows__row__header__divider">
                        <div className="resultsSpecific__overall__left__board__rows__row__header__divider__text">
                          Me
                        </div>
                        <div className="resultsSpecific__overall__left__board__rows__row__header__divider__text">
                          Topper
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeSubject.title === "Overall" ? (
                <div className="resultsSpecific__overall__left__board__rows">
                  {leaderBoardData.map((item) => (
                    <div className="resultsSpecific__overall__left__board__rows__row">
                      <div
                        className={`resultsSpecific__overall__left__board__rows__row__user ${
                          item.rank < 4 &&
                          "resultsSpecific__overall__left__board__rows__row__user--active"
                        }`}
                      >
                        <img
                          src={`/assets/images/${item.src}`}
                          alt={item.name}
                          className={`resultsSpecific__overall__left__board__rows__row__user__image`}
                        />
                        <div className="resultsSpecific__overall__left__board__rows__row__user__name">
                          {item.name}
                        </div>
                      </div>
                      <div className="resultsSpecific__overall__left__board__rows__row__rank">
                        {item.rank > 0 && item.rank < 4 ? (
                          <img
                            src={`/assets/images/dashboard-results-rank-${item.rank}.svg`}
                            alt={item.name}
                            className={`resultsSpecific__overall__left__board__rows__row__rank__image`}
                          />
                        ) : (
                          <div
                            className={`resultsSpecific__overall__left__board__rows__row__rank__image`}
                          ></div>
                        )}
                        <div className="resultsSpecific__overall__left__board__rows__row__rank__value">
                          {item.rank}
                        </div>
                      </div>
                      <div className="resultsSpecific__overall__left__board__rows__row__score">
                        {item.rank > 0 && item.rank < 4 ? (
                          <img
                            src={`/assets/images/dashboard-results-score-${item.rank}.svg`}
                            alt={item.name}
                            className={`resultsSpecific__overall__left__board__rows__row__score__image`}
                          />
                        ) : (
                          <div
                            className={`resultsSpecific__overall__left__board__rows__row__score__image`}
                          ></div>
                        )}
                        <div className="resultsSpecific__overall__left__board__rows__row__score__value">
                          {item.score}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="resultsSpecific__overall__left__board__rows resultsSpecific__overall__left__board__rows--practice">
                  {practiceTestsData.map((item) => (
                    <div className="resultsSpecific__overall__left__board__rows__row">
                      <div
                        className={`resultsSpecific__overall__left__board__rows__row__chapter`}
                      >
                        <div className="resultsSpecific__overall__left__board__rows__row__chapter__name">
                          {item.name}
                        </div>
                      </div>
                      <div className="resultsSpecific__overall__left__board__rows__row__correctAttempts">
                        <span className="resultsSpecific__overall__left__board__rows__row__correctAttempts__highlighted">
                          {item.correctAttempts}
                        </span>
                        {"/40"}
                      </div>
                      <div className="resultsSpecific__overall__left__board__rows__row__toppersAttempts">
                        <span className="resultsSpecific__overall__left__board__rows__row__toppersAttempts__highlighted">
                          {item.toppersAttempts}
                        </span>
                        {"/40"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          )}
          {activePerformance.title === performanceLinks[1].title && (
            <QuestionPerformance />
          )}
        </section>
        <section className="resultsSpecific__overall__right">
          {(activeSubject.title === "Overall" ||
            activePerformance.title === performanceLinks[0].title) && (
            <article className="resultsSpecific__overall__right__questionWrapper">
              {Object.values(questionData).map((item) => (
                <div className="resultsSpecific__overall__right__questionWrapper__card">
                  <img
                    src={`/assets/images/${item.src}`}
                    alt="Revise Misses"
                    className="resultsSpecific__overall__right__questionWrapper__card__image"
                  />
                  <h6 className="resultsSpecific__overall__right__questionWrapper__card__title">
                    {item.title} Questions
                  </h6>
                  <p className="resultsSpecific__overall__right__questionWrapper__card__subtitle">
                    {item.number}
                  </p>
                </div>
              ))}
            </article>
          )}
          {activePerformance.title === performanceLinks[1].title && (
            <article className="resultsSpecific__overall__right__cardFlex">
              {currentQuestionData.map((item) => (
                <div
                  key={item.title}
                  className="resultsSpecific__overall__right__cardFlex__item"
                >
                  <p className="resultsSpecific__overall__right__cardFlex__item__title">
                    {item.title}
                  </p>
                  <p
                    className={`resultsSpecific__overall__right__cardFlex__item__value resultsSpecific__overall__right__cardFlex__item__value--${item.answer.toLowerCase()}`}
                  >
                    <p className="resultsSpecific__overall__right__cardFlex__item__title">
                      {item.title}
                    </p>
                    <p
                      className={`resultsSpecific__overall__right__cardFlex__item__value resultsSpecific__overall__right__cardFlex__item__value--${item.answer.toLowerCase()}`}
                    >
                      {item.answer}
                    </p>
                    <p className="resultsSpecific__overall__right__cardFlex__item__title">
                      {item.subtitle}
                    </p>
                    <p className="resultsSpecific__overall__right__cardFlex__item__time">
                      {item.time} s
                    </p>
                    </p>
                  </div>
                ))}
              </article>
            )}
          </section>
      </div>
    </div>
  );
};

export default ResultsSpecific;
