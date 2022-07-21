import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { testsBoardData } from "../../../../constants/TeacherDashboard/TestsBoard/testBoards";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import DropDownSmall from "../../../../utils/TeacherDashboard/DropDownSmall/DropDownSmall";
import TableCompAssignments from "../../../../utils/TeacherDashboard/TableCompAssignments/TableCompAssignments";
import TableCompTests from "../../../../utils/TeacherDashboard/TableCompTests/TableCompTests";

import "./AssignmentsBoard.scss";

const AssignmentsBoard = () => {
  const [searchInput, setSearchInput] = useState("");

  const dropDownRow = [
    {
      title: "Subject",
      required: true,
      options: ["Maths", "Physics", "Chemistry", "Biology"],
    },
    {
      title: "Chapter",
      required: true,
      options: ["Sets", "Algebra", "Calculus", "3D Geometry"],
    },
    {
      title: "Topic",
      required: true,
      options: ["Sets", "Algebra", "Calculus", "3D Geometry"],
    },

    {
      title: "Status",
      required: true,
      options: ["Approved", "Under Review"],
    },
    {
      title: "Grade",
      options: ["Grade 11", "Grade 12", "Grade 13 (Dropper)"],
      required: true,
    },
    {
      title: "Exam Type",
      options: ["JEE MAINS", "JEE ADVANCED", "NEET", "ALL"],
      required: true,
    },
    {
      title: "More",
      required: true,
      options: ["Difficulty Level", "Previous Year"],
    },
  ];

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    console.log(searchInput);
    // Set table as per search input.
  }, [searchInput]);

  return (
    <div className="assignmentsBoard">
      <GoBack linkText={""} relativeURL={"/teacher/dashboard"} />
      <section className="assignmentsBoard__header">
        <h4 className="assignmentsBoard__header__title">Assignments</h4>
      </section>

      <section className="assignmentsBoard__searchAndAdd">
        <div className="assignmentsBoard__searchAndAdd__search">
          <img
            className="assignmentsBoard__searchAndAdd__search__image"
            alt="Search"
            src="/assets/images/teacher-dashboard-questions-board-search.svg"
          />
          <input
            className="assignmentsBoard__searchAndAdd__search__input"
            type={"text"}
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => searchHandler(e)}
          />
        </div>
        <Link
          to={"/teacher/addAssignment"}
          className="assignmentsBoard__searchAndAdd__addQuestion"
        >
          <img
            className="assignmentsBoard__searchAndAdd__addQuestion__image"
            alt="Add"
            src="/assets/images/teacher-dashboard-questions-board-add.svg"
          />
          <div className="assignmentsBoard__searchAndAdd__addQuestion__text">
            {"Create Assignment"}
          </div>
        </Link>
      </section>
      <section className="assignmentsBoard__dropDownRow">
        {dropDownRow.map((item) => (
          <DropDownSmall
            title={item.title}
            options={item.options}
            required={item.required}
          />
        ))}
      </section>

      {/* <TableCompTests questionsBoardData={testsBoardData} /> */}
      <TableCompAssignments questionsBoardData={testsBoardData} />
    </div>
  );
};

export default AssignmentsBoard;
