import React, { useEffect, useState } from "react";
import { Modal } from "@material-ui/core";

import { questionListData } from "../../../../constants/Dashboard/QuestionsTestSeries/questionsTestSeries";

import "./TestQuestionsView.scss";
import ChangeQuestionModal from "../../ChangeQuestionModal/ChangeQuestionModal";

const TestQuestionsView = (props) => {
  const [questionList, setQuestionList] = useState(questionListData);
  const [currentQuestion, setCurrentQuestion] = useState(questionList[0]);

  const [open, setOpen] = useState(false);

  // Functions

  const backgroundDecider = (status) => {
    switch (status) {
      case "visited":
        return "#29ab87";
      case "inProgress":
        return "#FF9F1C";
      case "unvisited":
        return "#d4d4d4";
      default:
        return "#d4d4d4";
    }
  };

  const questionChangeHandler = (number) => {
    const prev = currentQuestion;
    setCurrentQuestion(questionList[number - 1]);
    setQuestionList(
      questionList.map((item) =>
        item === prev
          ? {
              ...item,
              status: "visited",
            }
          : item
      )
    );
  };
  useEffect(() => {
    if (currentQuestion.status !== "inProgress") {
      setCurrentQuestion({ ...currentQuestion, status: "inProgress" });
      setQuestionList(
        questionList.map((item) =>
          item === currentQuestion
            ? { ...currentQuestion, status: "inProgress" }
            : item
        )
      );
    }
  }, [currentQuestion, questionList]);

  return (
    <div className="testQuestionsView">
      <h3 className="testQuestionsView__title">
        {props.title || "Test Name 01"}
      </h3>
      <section className="testQuestionsView__questionDetails">
        <div className="testQuestionsView__questionDetails__main">
          <article className="testQuestionsView__questionDetails__main__questionWrapper">
            <h3 className="testQuestionsView__questionDetails__main__questionWrapper__title">
              Maximum Marks: <span>{"300"}</span>
            </h3>

            <div className="testQuestionsView__questionDetails__main__questionWrapper__question">
              <div className="testQuestionsView__questionDetails__main__questionWrapper__question__header">
                <h6 className="testQuestionsView__questionDetails__main__questionWrapper__question__header__title">
                  Question {currentQuestion?.number}
                </h6>
                <div className="testQuestionsView__questionDetails__main__questionWrapper__question__header__support"></div>
              </div>
              <div className="testQuestionsView__questionDetails__main__questionWrapper__question__contentWrapper">
                <div className="testQuestionsView__questionDetails__main__questionWrapper__question__contentWrapper__content">
                  <h6 className="testQuestionsView__questionDetails__main__questionWrapper__question__contentWrapper__content__title">
                    {currentQuestion?.question}
                  </h6>
                  {currentQuestion.options.map((item, index) => (
                    <p className="testQuestionsView__questionDetails__main__questionWrapper__question__contentWrapper__content__option">
                      <span className="testQuestionsView__questionDetails__main__questionWrapper__question__contentWrapper__content__option__icon">
                        {index + 1}
                      </span>
                      <span className="testQuestionsView__questionDetails__main__questionWrapper__question__contentWrapper__content__option__text">
                        {item}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="testQuestionsView__questionDetails__main__questionWrapper__question__buttonWrapper">
              <button
                onClick={() =>
                  questionChangeHandler(currentQuestion?.number - 1)
                }
                className="testQuestionsView__questionDetails__main__questionWrapper__question__buttonWrapper__orange"
                disabled={currentQuestion?.number === 1}
              >
                Prev
              </button>
              <button
                onClick={() => setOpen(true)}
                className="testQuestionsView__questionDetails__main__questionWrapper__question__buttonWrapper__change"
              >
                Change
              </button>
              <button
                onClick={() =>
                  questionChangeHandler(currentQuestion?.number + 1)
                }
                className="testQuestionsView__questionDetails__main__questionWrapper__question__buttonWrapper__orange"
                disabled={currentQuestion?.number === questionList.length}
              >
                Next
              </button>
            </div>
          </article>

          <article className="testQuestionsView__questionDetails__main__navigation">
            <h3 className="testQuestionsView__questionDetails__main__navigation__title">
              Total Questions: <span>{"30"}</span>
            </h3>
            <div className="testQuestionsView__questionDetails__main__navigation__listWrapper">
              <div className="testQuestionsView__questionDetails__main__navigation__listWrapper__list">
                <div className="testQuestionsView__questionDetails__main__navigation__listWrapper__list__grid">
                  {questionList.map((item) => (
                    <button
                      className="testQuestionsView__questionDetails__main__navigation__listWrapper__list__grid__item"
                      style={{
                        background: backgroundDecider(item.status),
                      }}
                      onClick={() => questionChangeHandler(item.number)}
                    >
                      {item.number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ChangeQuestionModal
          title={"Change Question!"}
          subtitle={"Are you sure you want to change the Question?"}
          setOpen={setOpen}
        />
      </Modal>
    </div>
  );
};

export default TestQuestionsView;
