import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "@material-ui/core";

import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";

import ChangeQuestionModal from "../../../../utils/TeacherDashboard/ChangeQuestionModal/ChangeQuestionModal";

import "./PublishAssignment.scss";
import AddAssignmentMenu from "../../../../utils/TeacherDashboard/AddAssignmentMenu/AddAssignmentMenu";

const PublishAssignment = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const testSummary = [
    { title: "Assignment Name", value: "Assignment 01" },
    { title: "Assignment Date", value: "01/02/2022" },
    { title: "Exam Type", value: "JEE MAINS" },
    { title: "Assignment Publish Time", value: "4:00 PM" },
    { title: "Maximum Marks", value: "300" },
    { title: "Grade", value: ["Grade 11", "Grade 12", "Grade 13 (Dropper)"] },
  ];

  const questionSummary = [
    { title: "Total Questions", value: "50" },
    { title: "Easy Questions", value: "15" },
    { title: "Medium Questions", value: "20" },
    { title: "Hard Questions", value: "15" },

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
    <div className="publishAssignment">
      <GoBack
        linkText={"Back to Assignments"}
        relativeURL={"/teacher/assignments"}
      />

      <AddAssignmentMenu type={3} />

      <section className="publishAssignment__header">
        <h3 className="publishAssignment__header__title">
          Please publish this Assignment or Send for Review
        </h3>
      </section>

      <section className="publishAssignment__testSummary">
        <article className="publishAssignment__testSummary__header">
          <div className="publishAssignment__testSummary__header__title">
            Assignment Settings Summary
          </div>
          <Link
            to="/teacher/addAssignment"
            className="publishAssignment__testSummary__header__editBtn"
          >
            <img
              src="/assets/images/teacher-dashboard-publish-test-edit-btn.svg"
              alt="Edit"
              className="publishAssignment__testSummary__header__editBtn__icon"
            />
            <p className="publishAssignment__testSummary__header__editBtn__text">
              Edit
            </p>
          </Link>
        </article>
        <article className="publishAssignment__testSummary__content">
          {testSummary.map((item) => (
            <div
              style={{
                width: item.value.constructor === Array ? "100%" : "auto",
              }}
              key={item.title}
              className="publishAssignment__testSummary__content__item"
            >
              <h5 className="publishAssignment__testSummary__content__item__title">
                {item.title}
              </h5>

              {item.value.constructor === Array ? (
                <div className="publishAssignment__testSummary__content__item__tagList">
                  {item.value.map((tag) => (
                    <p className="publishAssignment__testSummary__content__item__tagList__tag">
                      {tag}
                    </p>
                  ))}
                </div>
              ) : (
                <h5 className="publishAssignment__testSummary__content__item__subtitle">
                  {item.value}
                </h5>
              )}
            </div>
          ))}
        </article>
      </section>

      <section className="publishAssignment__testSummary">
        <article className="publishAssignment__testSummary__header">
          <div className="publishAssignment__testSummary__header__title">
            Question Settings Summary
          </div>
          <Link
            to="teacher/assignmentQuestionSettings"
            className="publishAssignment__testSummary__header__editBtn"
          >
            <img
              src="/assets/images/teacher-dashboard-publish-test-edit-btn.svg"
              alt="Edit"
              className="publishAssignment__testSummary__header__editBtn__icon"
            />
            <p className="publishAssignment__testSummary__header__editBtn__text">
              Edit
            </p>
          </Link>
        </article>
        <article className="publishAssignment__testSummary__content">
          {questionSummary.map((item) => (
            <div
              key={item.title}
              style={{
                width: item.value.constructor === Array ? "100%" : "auto",
              }}
              className="publishAssignment__testSummary__content__item"
            >
              <h5 className="publishAssignment__testSummary__content__item__title">
                {item.title}
              </h5>

              {item.value.constructor === Array ? (
                <div className="publishAssignment__testSummary__content__item__tagList">
                  {item.value.map((tag) => (
                    <p className="publishAssignment__testSummary__content__item__tagList__tag">
                      {tag}
                    </p>
                  ))}
                </div>
              ) : (
                <h5 className="publishAssignment__testSummary__content__item__subtitle">
                  {item.value}
                </h5>
              )}
            </div>
          ))}
        </article>
      </section>

      <section className="publishAssignment__ctaRow">
        <button
          onClick={() => setOpen(true)}
          className="publishAssignment__ctaRow__publish"
        >
          Publish
        </button>
        <button className="publishAssignment__ctaRow__submit">
          Submit for Review
        </button>
      </section>

      <section className="publishAssignment__subFooter">
        <Link
          to="/teacher/assignmentPreview"
          className="publishAssignment__subFooter__title"
        >
          Previous
        </Link>
      </section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ChangeQuestionModal
          title={"Successfully published!"}
          subtitle={
            "Your Assignment has been published successfully. Do you want to add another one?"
          }
          onClickHandler={() => navigate("/teacher/addAssignment")}
          setOpen={setOpen}
        />
      </Modal>
    </div>
  );
};

export default PublishAssignment;
