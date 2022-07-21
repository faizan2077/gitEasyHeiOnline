import React from "react";

import "./AddAssignmentMenu.scss";

const AddAssignmentMenu = ({ type }) => {
  const singleOptionMenu = [
    {
      title: "Assignment Settings",
      src: `teacher-dashboard-tests-board-test-settings-icon${
        type === 0 ? "-2" : ""
      }.svg`,
    },
    {
      title: "Question Settings",
      src: `teacher-dashboard-tests-board-question-settings-icon${
        type === 1 ? "-2" : ""
      }.svg`,
    },
    {
      title: "Assignment Preview",
      src: `teacher-dashboard-tests-board-test-preview${
        type === 2 ? "-2" : ""
      }.svg`,
    },
    {
      title: "Publish Assignment",
      src: `teacher-dashboard-tests-board-create-publish-test${
        type === 3 ? "-2" : ""
      }.svg`,
    },
  ];

  return (
    <ul className="addAssignmentMenu">
      {singleOptionMenu.map((item, index) => (
        <li
          className={
            index === type
              ? `addAssignmentMenu__menuItemTest addAssignmentMenu__menuItemActive`
              : `addAssignmentMenu__menuItemTest`
          }
        >
          <img
            src={`/assets/images/${item.src}`}
            alt="Item"
            className="addAssignmentMenu__menuItemIcon"
          />
          <p className="addAssignmentMenu__menuItemTitle">{item?.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default AddAssignmentMenu;
