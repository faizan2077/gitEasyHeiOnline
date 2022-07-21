import React from "react";

import "./Instructions.scss";

const Instructions = ({
  title = "MOCK TEST JEE - 3",
  questions = "75",
  duration = 3,
}) => {
  const instructions = [
    "Exam will start once you click begin.",
    "When the countdown timer at the top reaches zero, the examination will end by itself.",
    "The examination will end exactly in 3 hours, from the time when you click begin.",
    "Once you “Finish” the test, you cannot resume the test again.",
  ];

  return (
    <div className="instructions">
      <div className="instructions__goBack">
        <img
          className="instructions__goBack__icon"
          src="/assets/images/dashboard-subject-topics-go-back.svg"
          alt="Back arrow"
        />
        <h5 className="instructions__goBack__text">Back</h5>
      </div>
      <div className="instructions__header">
        <h4 className="instructions__header__title">Instructions</h4>
      </div>
      <div className="instructions__card">
        <div className="instructions__card__header">
          <h4 className="instructions__card__header__title">{title}</h4>
          <p className="instructions__card__header__testInfo">
            {questions} Questions | {duration} hours
          </p>
        </div>
        <ul className="instructions__card__instructionList">
          {instructions.map((item) => (
            <li
              key={item}
              className="instructions__card__instructionList__item"
            >
              <span className="instructions__card__instructionList__item__text">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <button className="instructions__card__cta">Begin</button>
      </div>
    </div>
  );
};

export default Instructions;
