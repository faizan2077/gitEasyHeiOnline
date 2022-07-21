import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddAssignmentMenu from "../../../../utils/TeacherDashboard/AddAssignmentMenu/AddAssignmentMenu";

import TestQuestionsView from "../../../../utils/TeacherDashboard/TestPreview/TestQuestionsView/TestQuestionsView";

import "./AssignmentPreview.scss";

const AssignmentPreview = () => {
  const [activeTitle, setActiveTitle] = useState("");

  const subjectCards = [
    {
      title: "Maths",
      src: "/assets/images/teacher-dashboard-test-preview-maths.svg",
      src2: "/assets/images/teacher-dashboard-test-preview-maths-2.svg",
    },

    {
      title: "Physics",
      src: "/assets/images/teacher-dashboard-test-preview-physics.svg",
      src2: "/assets/images/teacher-dashboard-test-preview-physics-2.svg",
    },
    {
      title: "Chemistry",
      src: "/assets/images/teacher-dashboard-test-preview-chemistry.svg",
      src2: "/assets/images/teacher-dashboard-test-preview-chemistry-2.svg",
    },
  ];
  // {
  //   title: "Biology",
  // src: "/assets/images/teacher-dashboard-test-preview-biology.svg",
  //   src2: "/assets/images/teacher-dashboard-test-preview-biology-2.svg",
  //   required: true,
  // },

  const filterCardHandler = (title) => {
    if (activeTitle === title) {
      setActiveTitle("");
    } else {
      setActiveTitle(title);
    }
  };

  return (
    <div className="assignmentPreview">
      <GoBack
        linkText={"Back to Assignments"}
        relativeURL={"/teacher/assignments"}
      />

      <AddAssignmentMenu type={2} />

      <section className="assignmentPreview__header">
        <h3 className="assignmentPreview__header__title">
          Please verify your Questions before publishing
        </h3>
      </section>

      <section className="assignmentPreview__filterCards">
        {subjectCards.map((item) => (
          <div
            onClick={() => filterCardHandler(item.title)}
            className={
              item.title === activeTitle
                ? "assignmentPreview__filterCards__card assignmentPreview__filterCards__card--active"
                : "assignmentPreview__filterCards__card"
            }
          >
            <img
              className="assignmentPreview__filterCards__card__icon"
              src={item.title === activeTitle ? item.src2 : item.src}
              alt={item.title}
            />
            <div className="assignmentPreview__filterCards__card__title">
              {item.title}
            </div>
          </div>
        ))}
      </section>

      <TestQuestionsView title={"Assignment 01"} />

      <section className="assignmentPreview__subFooter">
        <Link
          to="/teacher/assignmentQuestionSettings"
          className="assignmentPreview__subFooter__title"
        >
          Previous
        </Link>
        <Link
          to="/teacher/publishAssignment"
          className="assignmentPreview__subFooter__title"
        >
          Next
        </Link>
      </section>
    </div>
  );
};

export default AssignmentPreview;
