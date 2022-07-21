import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "@material-ui/core";

import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";

import ChangeQuestionModal from "../../../../utils/TeacherDashboard/ChangeQuestionModal/ChangeQuestionModal";

import "./PublishTest.scss";

const PublishTest = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const testSummary = [
    { title: "Test Name", value: "Test Name 01" },
    { title: "Test Date", value: "01/02/2022" },
    { title: "Test Type", value: "Test Series" },
    { title: "Exam Type", value: "JEE MAINS" },
    { title: "Test Publish Time", value: "4:00 PM" },
    { title: "Exam Duration", value: "43:00 Hrs" },
    { title: "Test Publish Time", value: "300" },
    { title: "Maximum Marks", value: "4:00 PM" },
    { title: "Grade", value: ["Grade 11", "Grade 12", "Grade 13 (Dropper)"] },
  ];

  const questionSummary = [
    { title: "Total Questions", value: "50" },
    { title: "Easy Questions", value: "15" },
    { title: "Medium Questions", value: "20" },
    { title: "Hard Questions", value: "15" },

    { title: "Previous Year", value: "No" },
    { title: "Month", value: "-" },
    { title: "Year", value: "-" },
    {
      title: "Question Type",
      value: ["Single Option Correct", "Multiple Option Correct"],
    },
    {
      title: "Subjects",
      value: ["Maths", "Physics", "Chemistry"],
    },
    {
      title: "Chapters",
      value: [
        "Introduction to Sets",
        "Mathematical Induction",
        "States of Matter",
      ],
    },
    {
      title: "Topics",
      value: [
        "Principle Of Finite Mathematics",
        "Relations and Functions",
        "Algebra",
        "Calculus",
        "Vectors and 3-D Geometry",
      ],
    },
  ];

  return (
    <div className="publishTest">
      <GoBack linkText={"Back to Tests"} relativeURL={"/teacher/testsBoard"} />

      <AddTestMenu type={3} />

      <section className="publishTest__header">
        <h3 className="publishTest__header__title">
          Please publish this Test or Send for Review
        </h3>
      </section>

      <section className="publishTest__testSummary">
        <article className="publishTest__testSummary__header">
          <div className="publishTest__testSummary__header__title">
            Test Settings Summary
          </div>
          <Link
            to="/teacher/addTest"
            className="publishTest__testSummary__header__editBtn"
          >
            <img
              src="/assets/images/teacher-dashboard-publish-test-edit-btn.svg"
              alt="Edit"
              className="publishTest__testSummary__header__editBtn__icon"
            />
            <p className="publishTest__testSummary__header__editBtn__text">
              Edit
            </p>
          </Link>
        </article>
        <article className="publishTest__testSummary__content">
          {testSummary.map((item) => (
            <div
              style={{
                width: item.value.constructor === Array ? "100%" : "auto",
              }}
              key={item.title}
              className="publishTest__testSummary__content__item"
            >
              <h5 className="publishTest__testSummary__content__item__title">
                {item.title}
              </h5>

              {item.value.constructor === Array ? (
                <div className="publishTest__testSummary__content__item__tagList">
                  {item.value.map((tag) => (
                    <p className="publishTest__testSummary__content__item__tagList__tag">
                      {tag}
                    </p>
                  ))}
                </div>
              ) : (
                <h5 className="publishTest__testSummary__content__item__subtitle">
                  {item.value}
                </h5>
              )}
            </div>
          ))}
        </article>
      </section>

      <section className="publishTest__testSummary">
        <article className="publishTest__testSummary__header">
          <div className="publishTest__testSummary__header__title">
            Question Settings Summary
          </div>
          <Link
            to="teacher/questionSettings"
            className="publishTest__testSummary__header__editBtn"
          >
            <img
              src="/assets/images/teacher-dashboard-publish-test-edit-btn.svg"
              alt="Edit"
              className="publishTest__testSummary__header__editBtn__icon"
            />
            <p className="publishTest__testSummary__header__editBtn__text">
              Edit
            </p>
          </Link>
        </article>
        <article className="publishTest__testSummary__content">
          {questionSummary.map((item) => (
            <div
              key={item.title}
              style={{
                width: item.value.constructor === Array ? "100%" : "auto",
              }}
              className="publishTest__testSummary__content__item"
            >
              <h5 className="publishTest__testSummary__content__item__title">
                {item.title}
              </h5>

              {item.value.constructor === Array ? (
                <div className="publishTest__testSummary__content__item__tagList">
                  {item.value.map((tag) => (
                    <p className="publishTest__testSummary__content__item__tagList__tag">
                      {tag}
                    </p>
                  ))}
                </div>
              ) : (
                <h5 className="publishTest__testSummary__content__item__subtitle">
                  {item.value}
                </h5>
              )}
            </div>
          ))}
        </article>
      </section>

      <section className="publishTest__ctaRow">
        <button
          onClick={() => setOpen(true)}
          className="publishTest__ctaRow__publish"
        >
          Publish
        </button>
        <button className="publishTest__ctaRow__submit">
          Submit for Review
        </button>
      </section>

      <section className="publishTest__subFooter">
        <Link
          to="/teacher/testPreview"
          className="publishTest__subFooter__title"
        >
          Previous
        </Link>
      </section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ChangeQuestionModal
          title={"Successfully published!"}
          subtitle={
            "Your Test has been published successfully. Do you want to add another Test?"
          }
          onClickHandler={() => navigate("/teacher/addTest")}
          setOpen={setOpen}
        />
      </Modal>
    </div>
  );
};

export default PublishTest;
