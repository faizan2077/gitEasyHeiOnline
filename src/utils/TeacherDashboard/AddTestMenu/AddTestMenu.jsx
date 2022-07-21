import React from "react";

import "./AddTestMenu.scss";

const AddTestMenu = ({ type }) => {
  const singleOptionMenu = [
    {
      title: "Test Settings",
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
      title: "Test Preview",
      src: `teacher-dashboard-tests-board-test-preview${
        type === 2 ? "-2" : ""
      }.svg`,
    },
    {
      title: "Publish Test",
      src: `teacher-dashboard-tests-board-create-publish-test${
        type === 3 ? "-2" : ""
      }.svg`,
    },
  ];

  return (
    <ul className="addTestMenu">
      {singleOptionMenu.map((item, index) => (
        <li
          key={index}
          className={
            index === type
              ? `addTestMenu__menuItemTest addTestMenu__menuItemActive`
              : `addTestMenu__menuItemTest`
          }
        >
          <img
            src={`/assets/images/${item.src}`}
            alt="Item"
            className="addTestMenu__menuItemIcon"
          />
          <p className="addTestMenu__menuItemTitle">{item?.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default AddTestMenu;
