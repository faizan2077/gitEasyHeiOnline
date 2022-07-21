import React from "react";
import { useNavigate } from "react-router-dom";

import "./AssertionType.scss";

const AssertionType = () => {
  const navigate = useNavigate();

  const assertionTypeMenu = [
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
    <div className="assertionType">
      <section className="assertionType__goBack">
        <img
          className="assertionType__goBack__icon"
          src="/assets/images/dashboard-subject-topics-go-back.svg"
          alt="Back arrow"
        />
        <h5
          onClick={() => navigate(-1)}
          className="assertionType__goBack__text"
        >
          Back to Questions
        </h5>
      </section>

      <ul className="assertionType__menuWrapper">
        {assertionTypeMenu.map((item, index) => (
          <li
            className={
              index === 1
                ? `assertionType__menuWrapper__menuItem assertionType__menuWrapper__menuItemActive`
                : `assertionType__menuWrapper__menuItem`
            }
          >
            <img
              src={`/assets/images/${item.src}`}
              alt="Item Icon"
              className="assertionType__menuWrapper__menuItemIcon"
            />
            <p className="assertionType__menuWrapper__menuItemTitle">
              {item?.title}
            </p>
          </li>
        ))}
      </ul>

      {/* 

      <section className="assertionType__header">
        <h3 className="assertionType__header__title">
          Please enter details below
        </h3>
      </section>
      <section className="assertionType__dropDownRow">
        {dropDownRow.map((item) => (
          <div className="assertionType__dropDownRow__item">
            <div className="assertionType__dropDownRow__item__text">
              {item.title}
            </div>
            <img
              src="/assets/images/teacher-dashboard-questions-board-down-arrow.svg"
              alt="Down"
              className="assertionType__dropDownRow__item__image"
            />
          </div>
        ))}
      </section>
      <section className="assertionType__previousYear">
        <div className="assertionType__previousYear__left">
          <div className="assertionType__previousYear__left__title">
            Previous Year{" "}
            <span className="assertionType__previousYear__left__title__dull">
              (If yes, please specify Month and Year)
            </span>
          </div>
          <div className="assertionType__previousYear__left__radioButton">
            <span className="assertionType__previousYear__left__radioButton__text">
              Yes
            </span>
            <img
              className={
                radio === "Yes"
                  ? "assertionType__previousYear__left__radioButton__image assertionType__previousYear__left__radioButton__image--rotated"
                  : "assertionType__previousYear__left__radioButton__image"
              }
              onClick={() => radioHandler()}
              src="/assets/images/teacher-dashboard-questions-board-radio.svg"
              alt="Radio"
            />
            <span className="assertionType__previousYear__left__radioButton__text">
              No
            </span>
          </div>
          <div className="assertionType__previousYear__left__inputs">
            <input
              type="text"
              placeholder="Enter Month"
              className="assertionType__previousYear__left__inputs__item"
            />

            <input
              type="text"
              placeholder="Enter Year"
              className="assertionType__previousYear__left__inputs__item"
            />
          </div>
        </div>
        <div className="assertionType__dropDownRow__item">
          <div className="assertionType__dropDownRow__item__text">{"Grade"}</div>
          <img
            src="/assets/images/teacher-dashboard-questions-board-down-arrow.svg"
            alt="Down"
            className="assertionType__dropDownRow__item__image"
          />
        </div>
      </section>
      <section className="assertionType__subFooter">
        <Link
          to="/teacher/addQuestion/assertionType"
          className="assertionType__subFooter__title"
        >
          Next
        </Link>
      </section> */}
    </div>
  );
};

export default AssertionType;
