import React, { useState } from "react";

import "./Questions.scss";

import { questionListData } from "../../../../constants/Dashboard/Questions/questions";

const Questions = ({
  subject = "Maths",
  topic = {
    name: "Sets",
    percentage: 35,
    topics: 6,
    incorrect: 4,
    speed: 20,
    accuracy: 20,
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
      case "correct":
        return "#29ab87";
      case "incorrect":
        return "#ff5139";
      case "key used":
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
  };

  const verifyAnswerHandler = () => {
    if (markedOption) {
      var answerStatus =
        markedOption === currentQuestion.correctAnswer
          ? keyUsed
            ? "key used"
            : "correct"
          : "incorrect";
      setVerify({ verification: true, answerStatus: answerStatus });
    }
    setQuestionList(
      questionList.map((item) =>
        item === currentQuestion ? { ...item, status: answerStatus } : item
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
    <div className="questions">
      <section className="questions__goBack">
        <img
          className="questions__goBack__icon"
          src="/assets/images/dashboard-subject-topics-go-back.svg"
          alt="Back arrow"
        />
        <h5 className="questions__goBack__text">Back</h5>
      </section>
      <section className="questions__header">
        <h4 className="questions__header__title">{topic.name}</h4>
        <div className="questions__header__options">
          <div className="questions__header__options__dropdown">
            <span className="questions__header__options__dropdown__text">
              Difficulty
            </span>{" "}
            <img
              className="questions__header__options__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
          <div className="questions__header__options__dropdown">
            <span className="questions__header__options__dropdown__text">
              Response
            </span>{" "}
            <img
              className="questions__header__options__dropdown__icon"
              src="/assets/images/dashboard-questions-down-arrow.svg"
              alt="Down arrow"
            />
          </div>
        </div>
      </section>
      <section className="questions__questionDetails">
        <h4 className="questions__questionDetails__title">
          Introduction To Sets
        </h4>
        <div className="questions__questionDetails__main">
          <div className="questions__questionDetails__main__question">
            <div className="questions__questionDetails__main__question__header">
              <h6 className="questions__questionDetails__main__question__header__title">
                Question {currentQuestion?.number}
              </h6>
              <div className="questions__questionDetails__main__question__header__support">
                <div className="questions__questionDetails__main__question__header__support__wrapper">
                  <img
                    className="questions__questionDetails__main__question__header__support__icon"
                    src="/assets/images/dashboard-questions-info-icon.svg"
                    alt="Info Icon"
                  />
                </div>
                <div className="questions__questionDetails__main__question__header__support__wrapper">
                  <img
                    className="questions__questionDetails__main__question__header__support__icon"
                    src="/assets/images/dashboard-questions-bookmark-icon.svg"
                    alt="Bookmark Icon"
                  />
                </div>
                <div
                  onClick={() => setKeyUsed(true)}
                  className="questions__questionDetails__main__question__header__support__wrapper"
                >
                  <img
                    className="questions__questionDetails__main__question__header__support__icon"
                    src="/assets/images/dashboard-questions-hint-icon.svg"
                    alt="Hint Icon"
                  />
                </div>
              </div>
            </div>
            <div className="questions__questionDetails__main__question__content">
              <h6 className="questions__questionDetails__main__question__content__title">
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
                  className="questions__questionDetails__main__question__content__option"
                >
                  <span className="questions__questionDetails__main__question__content__option__icon">
                    {index + 1}
                  </span>
                  <span className="questions__questionDetails__main__question__content__option__text">
                    {item}
                  </span>
                </p>
              ))}
            </div>
            {verify.verification ? (
              <div className="questions__questionDetails__main__question__content__solution">
                <h5 className="questions__questionDetails__main__question__content__solution__heading">
                  Solution:
                </h5>
                <p className="questions__questionDetails__main__question__content__solution__description">
                  {currentQuestion.solution}
                </p>
              </div>
            ) : (
              <></>
            )}
            {verify.verification ? (
              <div className="questions__questionDetails__main__question__content__buttonWrapper">
                <button
                  onClick={() =>
                    questionChangeHandler(currentQuestion?.number - 1)
                  }
                  className="questions__questionDetails__main__question__content__buttonWrapper__verify"
                  disabled={currentQuestion?.number === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    questionChangeHandler(currentQuestion?.number + 1)
                  }
                  className="questions__questionDetails__main__question__content__buttonWrapper__verify"
                  disabled={currentQuestion?.number === questionList.length}
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="questions__questionDetails__main__question__content__buttonWrapper">
                <button
                  onClick={() => verifyAnswerHandler()}
                  className="questions__questionDetails__main__question__content__buttonWrapper__verify"
                  disabled={!markedOption}
                >
                  Verify
                </button>
              </div>
            )}
          </div>

          <div className="questions__questionDetails__main__navigation">
            <div className="questions__questionDetails__main__navigation__list">
              <h4 className="questions__questionDetails__main__navigation__list__heading">
                {"9"} Questions
              </h4>
              <div className="questions__questionDetails__main__navigation__list__grid">
                {questionList.map((item) => (
                  <button
                    className="questions__questionDetails__main__navigation__list__grid__item"
                    style={{ background: backgroundDecider(item.status) }}
                    onClick={() => questionChangeHandler(item.number)}
                  >
                    {item.number}
                  </button>
                ))}
              </div>
            </div>
            <div className="questions__questionDetails__main__navigation__guide">
              <p className="questions__questionDetails__main__navigation__guide__item">
                <span className="questions__questionDetails__main__navigation__guide__item__icon"></span>
                Correct
              </p>
              <p className="questions__questionDetails__main__navigation__guide__item">
                <span className="questions__questionDetails__main__navigation__guide__item__icon"></span>
                Incorrect
              </p>
              <p className="questions__questionDetails__main__navigation__guide__item">
                <span className="questions__questionDetails__main__navigation__guide__item__icon"></span>
                Key Used
              </p>
              <p className="questions__questionDetails__main__navigation__guide__item">
                <span className="questions__questionDetails__main__navigation__guide__item__icon"></span>
                Unvisited
              </p>
              <p className="questions__questionDetails__main__navigation__guide__item">
                <span className="questions__questionDetails__main__navigation__guide__item__icon"></span>
                Unattempted
              </p>
            </div>

            <button
              onClick={restartHandler}
              className="questions__questionDetails__main__navigation__cta"
            >
              Restart{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
