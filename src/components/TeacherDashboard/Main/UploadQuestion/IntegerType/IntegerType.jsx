import React from "react";
import { useNavigate } from "react-router-dom";

import "./IntegerType.scss";

const IntegerType = ({ sidebarMenu, setSidebarMenu }) => {
  const navigate = useNavigate();

  const integerTypeMenu = [
    {
      title: "Question Settings",
      src: "teacher-dashboard-questions-board-settings-icon-2.svg",
    },
    {
      title: "Add a Question",
      src: "teacher-dashboard-questions-board-add-settings-icon-2.svg",
    },
  ];

  return (
    <div className="integerType">
      <section className="integerType__goBack">
        <img
          className="integerType__goBack__icon"
          src="/assets/images/dashboard-subject-topics-go-back.svg"
          alt="Back arrow"
        />
        <h5 onClick={() => navigate(-1)} className="integerType__goBack__text">
          Back to Questions
        </h5>
      </section>

      <ul className="integerType__menuWrapper">
        {integerTypeMenu.map((item, index) => (
          <li
            className={
              index === 1
                ? `integerType__menuWrapper__menuItem integerType__menuWrapper__menuItemActive`
                : `integerType__menuWrapper__menuItem`
            }
          >
            <img
              src={`/assets/images/${item.src}`}
              alt="Item Icon"
              className="integerType__menuWrapper__menuItemIcon"
            />
            <p className="integerType__menuWrapper__menuItemTitle">
              {item?.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntegerType;
