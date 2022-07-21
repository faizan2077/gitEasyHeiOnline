import React from "react";
import { Link } from "react-router-dom";

import "./QuestionPerformance.scss";

const QuestionPerformance = () => {
  const questionData = [
    {
      title: "Correct",
      src: "dashboard-results-correct-questions.svg",
      number: 20,
    },
    {
      title: "Incorrect",
      src: "dashboard-results-incorrect-questions.svg",
      number: 11,
    },
    {
      title: "Unattempted",
      src: "dashboard-results-unattempted-questions.svg",
      number: 44,
    },
  ];

  return (
    <section className="questionPerformance">
      <article className="questionPerformance__totalQuestions">
        <img
          src={`/assets/images/dashboard-results-correct-questions.svg`}
          alt="Revise Misses"
          className="questionPerformance__totalQuestions__image"
        />
        <h6 className="questionPerformance__totalQuestions__title">
          Total Correct Questions
        </h6>
        <div className="questionPerformance__totalQuestions__comparison">
          <div className="questionPerformance__totalQuestions__comparison__item">
            <p className="questionPerformance__totalQuestions__comparison__item__title">
              Me
            </p>
            <p className="questionPerformance__totalQuestions__comparison__item__value">
              <span className="questionPerformance__totalQuestions__comparison__item__value--me">
                25
              </span>
              {"/40"}
            </p>
          </div>
          <div className="questionPerformance__totalQuestions__comparison__item">
            <p className="questionPerformance__totalQuestions__comparison__item__title">
              Topper
            </p>
            <p className="questionPerformance__totalQuestions__comparison__item__value">
              <span className="questionPerformance__totalQuestions__comparison__item__value--topper">
                37
              </span>
              {"/40"}
            </p>
          </div>
        </div>
      </article>
      <article className="questionPerformance__currentQuestion">
        <div className="questionPerformance__currentQuestion__header">
          <div className="questionPerformance__currentQuestion__header__top">
            <img
              src={`/assets/images/dashboard-results-left-arrow.svg`}
              alt="Revise Misses"
            />
            <div className="questionPerformance__currentQuestion__header__top__title">
              <h6 className="questionPerformance__currentQuestion__header__top__title__heading">
                Question 1
              </h6>
              <p className="questionPerformance__currentQuestion__header__top__title__subheading">
                Introduction to Sets
              </p>
            </div>
            <img
              src={`/assets/images/dashboard-results-right-arrow.svg`}
              alt="Revise Misses"
            />
          </div>
          <div className="questionPerformance__currentQuestion__header__bottom">
            {
              "Which of the following is not a well defined collection of objects?"
            }
          </div>
        </div>
        <div className="questionPerformance__currentQuestion__content">
          <div className="questionPerformance__currentQuestion__content__item">
            <p className="questionPerformance__currentQuestion__content__item__title">
              Correct Answer
            </p>
            <p className="questionPerformance__currentQuestion__content__item__value">
              Option 1
            </p>
          </div>
          <div className="questionPerformance__currentQuestion__content__item">
            <p className="questionPerformance__currentQuestion__content__item__title">
              My Answer
            </p>
            <p className="questionPerformance__currentQuestion__content__item__value">
              Option 4
            </p>
          </div>
        </div>
        <Link
          to="/questions/Sets"
          className="questionPerformance__currentQuestion__viewSolution"
        >
          View Solution
        </Link>
      </article>
    </section>
  );
};

export default QuestionPerformance;
