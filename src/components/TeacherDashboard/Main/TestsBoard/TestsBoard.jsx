import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { testsBoardData } from "../../../../constants/TeacherDashboard/TestsBoard/testBoards";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import DropDownSmall from "../../../../utils/TeacherDashboard/DropDownSmall/DropDownSmall";
import TableCompTests from "../../../../utils/TeacherDashboard/TableCompTests/TableCompTests";

import "./TestsBoard.scss";

const TestsBoard = () => {
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
      title: "Test Type",
      required: true,
      options: [
        "Daily Practice Paper",
        "Test Series",
        "Assignment",
        "Previous Paper",
        "Preparatory Test",
      ],
    },
    {
      title: "Status",
      required: true,
      options: ["Approved", "Under Review"],
    },
    {
      title: "More",
      required: true,
      options: ["Difficulty Level", "Previous Year", "Grade", "Exam Type"],
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
    <div className="testsBoard">
      <GoBack linkText={""} relativeURL={"/teacher/dashboard"} />
      <section className="testsBoard__header">
        <h4 className="testsBoard__header__title">Questions Board</h4>
      </section>
      <section className="testsBoard__tabs">
        <Link
          to={"/teacher/questionsBoard"}
          className={`testsBoard__tabs__link`}
        >
          Question Bank
        </Link>
        <h4 className={`testsBoard__tabs__link testsBoard__tabs__link--active`}>
          Tests
        </h4>
      </section>
      <section className="testsBoard__searchAndAdd">
        <div className="testsBoard__searchAndAdd__search">
          <img
            className="testsBoard__searchAndAdd__search__image"
            alt="Search"
            src="/assets/images/teacher-dashboard-questions-board-search.svg"
          />
          <input
            className="testsBoard__searchAndAdd__search__input"
            type={"text"}
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => searchHandler(e)}
          />
        </div>
        <Link
          to={"/teacher/addTest"}
          className="testsBoard__searchAndAdd__addQuestion"
        >
          <img
            className="testsBoard__searchAndAdd__addQuestion__image"
            alt="Add"
            src="/assets/images/teacher-dashboard-questions-board-add.svg"
          />
          <div className="testsBoard__searchAndAdd__addQuestion__text">
            {"Add a Test"}
          </div>
        </Link>
      </section>
      <section className="testsBoard__dropDownRow">
        {dropDownRow.map((item) => (
          <DropDownSmall
            title={item.title}
            options={item.options}
            required={item.required}
          />
        ))}
      </section>

      <TableCompTests questionsBoardData={testsBoardData} />
    </div>
  );
};

export default TestsBoard;
