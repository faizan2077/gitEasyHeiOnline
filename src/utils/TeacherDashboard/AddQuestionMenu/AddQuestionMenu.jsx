import React from "react";

import "./AddQuestionMenu.scss";

const AddQuestionMenu = ({ type = 0, question = true }) => {
  const singleOptionMenu = question
    ? [
        {
          title: "Question Settings",
          src: `teacher-dashboard-questions-board-settings-icon${
            type === 1 ? "-2" : ""
          }.svg`,
        },
        {
          title: "Add a Question",
       
          src: `teacher-dashboard-questions-board-add-settings-icon${
            type === 1 ? "-2" : ""
          }.svg`,
        },
      ]
    : [
        {
          title: "Test Settings",
          src: `teacher-dashboard-questions-board-add-test-icon${
            type === 1 ? "-2" : ""
          }.svg`,
        },
        {
          title: "Create a Test",
          src: `teacher-dashboard-questions-board-create-test-icon${
            type === 1 ? "-2" : ""
          }.svg`,
        },
      ];

  return (
    <ul className="addQuestionMenu">
      {singleOptionMenu.map((item, index) =>
        question ? (
          <li
            className={
              index === type
                ? `addQuestionMenu__menuItem addQuestionMenu__menuItemActive`
                : `addQuestionMenu__menuItem`
            }
          >
            <img
              src={`/assets/images/${item.src}`}
              alt="Item Icon"
              className="addQuestionMenu__menuItemIcon"
            />
            <p className="addQuestionMenu__menuItemTitle">{item?.title}</p>
          </li>
        ) : (
          <li
            className={
              index === type
                ? `addQuestionMenu__menuItemTest addQuestionMenu__menuItemActive`
                : `addQuestionMenu__menuItemTest`
            }
          >
            <img
              src={`/assets/images/${item.src}`}
              alt="Item Icon"
              className="addQuestionMenu__menuItemIcon"
            />
            <p className="addQuestionMenu__menuItemTitle">{item?.title}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default AddQuestionMenu;
