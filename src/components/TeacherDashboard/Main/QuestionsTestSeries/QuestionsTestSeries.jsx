import React, { useState } from "react";

import "./QuestionsTestSeries.scss";

import { questionListData } from "../../../../constants/Dashboard/QuestionsTestSeries/questionsTestSeries";

const QuestionsTestSeries = ({
  subject = "Maths",
  test = {
    name: "MOCK TEST JEE - 3",
    duration: 3,
    // In hours
  },
}) => {
  // Constants

  const [questionList, setQuestionList] = useState(questionListData);

  const [currentQuestion, setCurrentQuestion] = useState(questionList[0]);
  const [markedOption, setMarkedOption] = useState("");
  const [keyUsed, setKeyUsed] = useState(false);
  const [verify, setVerify] = useState({
    verification: false,
    answerStatus: "unattempted",
  });

  // Functions

  const backgroundDecider = (status) => {
    switch (status) {
      case "attempted":
        return "#29ab87";
      case "incorrect":
        return "#ff5139";
      case "marked":
        return "#ffca05";
      case "unvisited":
        return "#d4d4d4";
      case "unattempted":
        return "#828282";
      default:
        return "#d4d4d4";
    }
  };

  const questionChangeHandler = (number) => {
    setCurrentQuestion(questionList[number - 1]);
    setMarkedOption("");
    setKeyUsed(false);
    setVerify({ verification: false, answerStatus: "unattempted" });
    setQuestionList(
      questionList.map((item) =>
        item === currentQuestion
          ? {
              ...item,
              status: item.status === "unvisited" ? "unattempted" : item.status,
            }
          : item
      )
    );
  };

  const optionChangeHandler = (option) => {
    if (!verify.verification) setMarkedOption(option);
    setQuestionList(
      questionList.map((item) =>
        item === currentQuestion ? { ...item, status: "attempted" } : item
      )
    );
  };

  const markQuestionHandler = () => {
    setQuestionList(
      questionList.map((item) =>
        item === currentQuestion ? { ...item, status: "marked" } : item
      )
    );
  };

  const restartHandler = () => {
    setQuestionList(questionListData);
    setCurrentQuestion(questionList[0]);
    setMarkedOption("");
    setKeyUsed(false);
    setVerify({
      verification: false,
      answerStatus: "unattempted",
    });
  };

  console.log(currentQuestion === questionList[0]);

  return (
    <div className="questionsTestSeries">
      <section className="questionsTestSeries__header">
        <h4 className="questionsTestSeries__header__title">{test.name}</h4>
        <div className="questionsTestSeries__header__options">
          <div className="questionsTestSeries__header__options__dropdown">
            <span className="questionsTestSeries__header__options__dropdown__text">
              Difficulty
            </span>{" "}
            <img
              className="questionsTestSeries__header__options__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
          <div className="questionsTestSeries__header__options__dropdown">
            <span className="questionsTestSeries__header__options__dropdown__text">
              Response
            </span>{" "}
            <img
              className="questionsTestSeries__header__options__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
        </div>
      </section>
      <section className="questionsTestSeries__questionDetails">
        <h4 className="questionsTestSeries__questionDetails__timer">
          {"02:59:59"}
          {/* Timer */}
        </h4>
        <div className="questionsTestSeries__questionDetails__main">
          <div className="questionsTestSeries__questionDetails__main__question">
            <div className="questionsTestSeries__questionDetails__main__question__header">
              <h6 className="questionsTestSeries__questionDetails__main__question__header__title">
                Question {currentQuestion?.number}
              </h6>
              <div className="questionsTestSeries__questionDetails__main__question__header__support">
                <div className="questionsTestSeries__questionDetails__main__question__header__support__wrapper">
                  <img
                    className="questionsTestSeries__questionDetails__main__question__header__support__icon"
                    src="/assets/images/dashboard-questions-info-icon.svg"
                    alt="Info Icon"
                  />
                </div>
                <div className="questionsTestSeries__questionDetails__main__question__header__support__wrapper">
                  <img
                    className="questionsTestSeries__questionDetails__main__question__header__support__icon"
                    src="/assets/images/dashboard-questions-bookmark-icon.svg"
                    alt="Bookmark Icon"
                  />
                </div>
                <div
                  onClick={() => markQuestionHandler()}
                  className="questionsTestSeries__questionDetails__main__question__header__support__wrapper"
                >
                  <img
                    className="questionsTestSeries__questionDetails__main__question__header__support__icon"
                    src="/assets/images/dashboard-questions-flag-icon.svg"
                    alt="Flag Icon"
                  />
                </div>
              </div>
            </div>
            <div className="questionsTestSeries__questionDetails__main__question__content">
              <h6 className="questionsTestSeries__questionDetails__main__question__content__title">
                {currentQuestion?.question}
              </h6>
              {currentQuestion.options.map((item, index) => (
                <p
                  style={{
                    background: verify.verification
                      ? markedOption === item
                        ? item === currentQuestion.correctAnswer
                          ? "rgba(41, 171, 135, 0.24)"
                          : "rgba(255, 81, 57, 0.34)"
                        : item === currentQuestion.correctAnswer
                        ? "rgba(41, 171, 135, 0.24)"
                        : ""
                      : markedOption === item
                      ? "#1E29f915"
                      : "",
                  }}
                  onClick={() => optionChangeHandler(item)}
                  className="questionsTestSeries__questionDetails__main__question__content__option"
                >
                  <span className="questionsTestSeries__questionDetails__main__question__content__option__icon">
                    {index + 1}
                  </span>
                  <span className="questionsTestSeries__questionDetails__main__question__content__option__text">
                    {item}
                  </span>
                </p>
              ))}
            </div>
            {verify.verification ? (
              <div className="questionsTestSeries__questionDetails__main__question__content__solution">
                <h5 className="questionsTestSeries__questionDetails__main__question__content__solution__heading">
                  Solution:
                </h5>
                <p className="questionsTestSeries__questionDetails__main__question__content__solution__description">
                  {currentQuestion.solution}
                </p>
              </div>
            ) : (
              <></>
            )}
            {
              <div className="questionsTestSeries__questionDetails__main__question__content__buttonWrapper">
                <button
                  onClick={() =>
                    questionChangeHandler(currentQuestion?.number - 1)
                  }
                  className="questionsTestSeries__questionDetails__main__question__content__buttonWrapper__verify"
                  disabled={currentQuestion?.number === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    questionChangeHandler(currentQuestion?.number + 1)
                  }
                  className="questionsTestSeries__questionDetails__main__question__content__buttonWrapper__verify"
                  disabled={currentQuestion?.number === questionList.length}
                >
                  Next
                </button>
              </div>
            }
          </div>

          <div className="questionsTestSeries__questionDetails__main__navigation">
            <div className="questionsTestSeries__questionDetails__main__navigation__list">
              <h4 className="questionsTestSeries__questionDetails__main__navigation__list__heading">
                {subject}
              </h4>
              <div className="questionsTestSeries__questionDetails__main__navigation__list__grid">
                {questionList.map((item) => (
                  <button
                    className="questionsTestSeries__questionDetails__main__navigation__list__grid__item"
                    style={{ background: backgroundDecider(item.status) }}
                    onClick={() => questionChangeHandler(item.number)}
                  >
                    {item.number}
                  </button>
                ))}
              </div>
            </div>
            <div className="questionsTestSeries__questionDetails__main__navigation__guide">
              <p className="questionsTestSeries__questionDetails__main__navigation__guide__item">
                <span className="questionsTestSeries__questionDetails__main__navigation__guide__item__icon"></span>
                Attempted
              </p>
              <p className="questionsTestSeries__questionDetails__main__navigation__guide__item">
                <span className="questionsTestSeries__questionDetails__main__navigation__guide__item__icon"></span>
                Marked
              </p>
              <p className="questionsTestSeries__questionDetails__main__navigation__guide__item">
                <span className="questionsTestSeries__questionDetails__main__navigation__guide__item__icon"></span>
                Unvisited
              </p>
              <p className="questionsTestSeries__questionDetails__main__navigation__guide__item">
                <span className="questionsTestSeries__questionDetails__main__navigation__guide__item__icon"></span>
                Unattempted
              </p>
            </div>

            <button
              onClick={restartHandler}
              className="questionsTestSeries__questionDetails__main__navigation__cta"
            >
              End Test{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionsTestSeries;
