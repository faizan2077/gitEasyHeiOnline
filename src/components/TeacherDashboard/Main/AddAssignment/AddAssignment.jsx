import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddAssignmentMenu from "../../../../utils/TeacherDashboard/AddAssignmentMenu/AddAssignmentMenu";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";

import DropDown from "../../../../utils/TeacherDashboard/DropDown/DropDown";
import TextField from "../../../../utils/TeacherDashboard/TextField/TextField";

import "./AddAssignment.scss";

const AddAssignment = () => {
  const textField1 = [
    {
      title: "Enter Assignment Name",
      required: true,
    },
    {
      title: "Choose Assignment Date",
      required: true,
    },
    {
      title: "Assignment Publish Time",
      required: true,
    },
  ];

  const textField2 = [];

  const dropDownRow = [
    {
      title: "Exam Type",
      options: ["JEE MAINS", "JEE ADVANCED", "NEET", "ALL"],
      required: true,
    },

    {
      title: "Grade",
      options: ["Grade 11", "Grade 12", "Grade 13 (Dropper)"],
      required: true,
    },
  ];

  return (
    <div className="addAssignment">
      <GoBack
        linkText={"Back to Assignments"}
        relativeURL={"/teacher/assignments"}
      />

      <AddAssignmentMenu type={0} />

      <section className="addAssignment__header">
        <h3 className="addAssignment__header__title">
          Please fill out Assignment details below
        </h3>
      </section>
      <section className="addAssignment__dropDownRow">
        {textField1.map((item) => (
          <TextField
            type="text"
            placeholder={item.title}
            required={item.required}
          />
        ))}
        {dropDownRow.map((item) => (
          <DropDown
            title={item.title}
            options={item.options}
            required={item.required}
          />
        ))}

        {textField2.map((item) => (
          <TextField
            type="number"
            placeholder={item.title}
            required={item.required}
          />
        ))}
      </section>
      <section className="addAssignment__subFooter">
        <Link
          to="/teacher/assignmentQuestionSettings"
          className="addAssignment__subFooter__title"
        >
          Next
        </Link>
      </section>
    </div>
  );
};

export default AddAssignment;
