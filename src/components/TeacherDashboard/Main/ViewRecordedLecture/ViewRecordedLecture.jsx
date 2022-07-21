import React, { useState } from "react";
import GoBack from "../../../../utils/Common/GoBack/GoBack";

import "./ViewRecordedLecture.scss";

const ViewRecordedLecture = () => {
  const initialDoubts = [
    {
      title: "Shweta Sharma",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      src: "/assets/images/teacher-dashboard-recorded-lectures-user-icon.svg",
      answerSrc:
        "/assets/images/teacher-dashboard-recorded-lectures-teacher-icon.svg",
      id: 1,
      showAnswer: false,
    },
    {
      title: "Shweta Sharma",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      src: "/assets/images/teacher-dashboard-recorded-lectures-user-icon.svg",
      answerSrc:
        "/assets/images/teacher-dashboard-recorded-lectures-teacher-icon.svg",
      id: 2,
      showAnswer: false,
    },
    {
      title: "Shweta Sharma",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      src: "/assets/images/teacher-dashboard-recorded-lectures-user-icon.svg",
      answerSrc:
        "/assets/images/teacher-dashboard-recorded-lectures-teacher-icon.svg",
      id: 3,
      showAnswer: false,
    },
  ];
  const [doubts, setDoubts] = useState(initialDoubts);

  const viewAnswerHandler = (id) => {
    setDoubts(
      doubts.map((item) =>
        item.id === id ? { ...item, showAnswer: !item.showAnswer } : item
      )
    );
  };

  return (
    <section className="viewRecordedLecture">
      <GoBack
        linkText={"Back to Recorded Lectures"}
        relativeURL={"/teacher/recordedLectures"}
      />
      <article className="viewRecordedLecture__main">
        <div className="viewRecordedLecture__main__left">
          <img
            src="/assets/images/teacher-dashboard-recorded-lectures-video-player.svg"
            alt="Live Video"
            className="viewRecordedLecture__main__left__video"
          />
        </div>
      </article>
      <article className="viewRecordedLecture__titleBar">
        <h4 className="viewRecordedLecture__titleBar__title">
          Binomial Theorems
        </h4>
        <p className="viewRecordedLecture__titleBar__time">10th Dec, 2021</p>
      </article>
      <h4 className="viewRecordedLecture__overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor.
      </h4>
      <ul className="viewRecordedLecture__navigation">
        <li>Doubts</li>
      </ul>

      <ul className="viewRecordedLecture__doubts">
        {doubts.map((item) => (
          <li className="viewRecordedLecture__doubts__item">
            <img
              src={item.src}
              alt="Live Video"
              className="viewRecordedLecture__doubts__item__left"
            />
            <div className="viewRecordedLecture__doubts__item__right">
              <h5 className="viewRecordedLecture__doubts__item__right__title">
                {item.title}
              </h5>
              <p className="viewRecordedLecture__doubts__item__right__subtitle">
                {item.subtitle}
              </p>
              {!item.showAnswer && (
                <button
                  onClick={() => viewAnswerHandler(item.id)}
                  className="viewRecordedLecture__doubts__item__right__cta"
                >
                  {"View answer"}
                </button>
              )}
              {item.showAnswer && (
                <li className="viewRecordedLecture__doubts__answer">
                  <img
                    src={item.answerSrc}
                    alt="Live Video"
                    className="viewRecordedLecture__doubts__answer__left"
                  />
                  <div className="viewRecordedLecture__doubts__answer__right">
                    <p className="viewRecordedLecture__doubts__answer__right__subtitle">
                      {item.answer}
                    </p>
                    <button
                      onClick={() => viewAnswerHandler(item.id)}
                      className="viewRecordedLecture__doubts__answer__right__cta"
                    >
                      {"Hide answer"}
                    </button>
                  </div>
                </li>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ViewRecordedLecture;
