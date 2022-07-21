import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddAssignmentMenu from "../../../../utils/TeacherDashboard/AddAssignmentMenu/AddAssignmentMenu";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";

import DropDown from "../../../../utils/TeacherDashboard/DropDown/DropDown";
import TextField from "../../../../utils/TeacherDashboard/TextField/TextField";

import "./AssignmentQuestionSettings.scss";

const AssignmentQuestionSettings = () => {
  const [radio, setRadio] = useState("No");

  const textField = [
    {
      title: "No. Of Easy Questions",
      required: true,
    },
    {
      title: "No. Of Medium Questions",
      required: true,
    },
    {
      title: "No. Of Hard Questions",
      required: true,
    },

    {
      title: "Correct Answer Marking ",
      required: true,
    },
    {
      title: "Wrong Answer Marking ",
      required: true,
    },
  ];

  const dropDownRow = [
    {
      title: "Select Subject",
      options: ["Maths", "Physics", "Chemistry", "Biology"],
      required: true,
    },
    {
      title: "Select Chapter",
      options: ["Maths", "Physics", "Chemistry", "Biology"],
      required: true,
    },
    {
      title: "Select Topic",
      options: ["Maths", "Physics", "Chemistry", "Biology"],
      required: true,
    },

    {
      title: "Question Type",
      options: [
        "Single Option Correct",
        "Multiple Option Correct",
        "Integer Type",
        "Assertion Type",
      ],
      required: true,
    },
  ];

  const radioHandler = () => {
    setRadio(radio === "Yes" ? "No" : "Yes");
  };

  return (
    <div className="assignmentQuestionSettings">
      <GoBack
        linkText={"Back to Assignments"}
        relativeURL={"/teacher/assignments"}
      />

      <AddAssignmentMenu type={1} />

      <section className="assignmentQuestionSettings__header">
        <h3 className="assignmentQuestionSettings__header__title">
          Please enter details below to retrieve Questions
        </h3>
      </section>
      <section className="assignmentQuestionSettings__dropDownRow">
        {dropDownRow.map((item) => (
          <DropDown
            title={item.title}
            options={item.options}
            required={item.required}
          />
        ))}

        {textField.map((item) => (
          <TextField
            type="text"
            placeholder={item.title}
            required={item.required}
          />
        ))}
      </section>

      <section className="assignmentQuestionSettings__subFooter">
        <Link
          to="/teacher/addAssignment"
          className="assignmentQuestionSettings__subFooter__title"
        >
          Previous
        </Link>
        <Link
          to="/teacher/assignmentPreview"
          className="assignmentQuestionSettings__subFooter__title"
        >
          Next
        </Link>
      </section>
    </div>
  );
};

export default AssignmentQuestionSettings;
