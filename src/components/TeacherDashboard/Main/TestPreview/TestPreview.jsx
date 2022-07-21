import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";

import TestQuestionsView from "../../../../utils/TeacherDashboard/TestPreview/TestQuestionsView/TestQuestionsView";

import "./TestPreview.scss";

const TestPreview = () => {
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
    <div className="testPreview">
      <GoBack linkText={"Back to Tests"} relativeURL={"/teacher/testsBoard"} />

      <AddTestMenu type={2} />

      <section className="testPreview__header">
        <h3 className="testPreview__header__title">
          Please verify your Questions before publishing
        </h3>
      </section>

      <section className="testPreview__filterCards">
        {subjectCards.map((item) => (
          <div
            onClick={() => filterCardHandler(item.title)}
            className={
              item.title === activeTitle
                ? "testPreview__filterCards__card testPreview__filterCards__card--active"
                : "testPreview__filterCards__card"
            }
          >
            <img
              className="testPreview__filterCards__card__icon"
              src={item.title === activeTitle ? item.src2 : item.src}
              alt={item.title}
            />
            <div className="testPreview__filterCards__card__title">
              {item.title}
            </div>
          </div>
        ))}
      </section>

      <TestQuestionsView />

      <section className="testPreview__subFooter">
        <Link
          to="/teacher/questionSettings"
          className="testPreview__subFooter__title"
        >
          Previous
        </Link>
        <Link
          to="/teacher/publishTest"
          className="testPreview__subFooter__title"
        >
          Next
        </Link>
      </section>
    </div>
  );
};

export default TestPreview;
