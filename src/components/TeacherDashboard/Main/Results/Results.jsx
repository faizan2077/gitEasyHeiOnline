
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Results.scss";

import {
  results,
  mockTests,
} from "../../../../constants/Dashboard/Results/results";

const Results = (
  {
    // results = [],
  }
) => {
  const navigate = useNavigate();
  const menuBarItems = [
    "Test Series",
    "Previous Papers",
    "Assignments",
    "Preparatory Tests",
  ];
  const [menuBar, setMenuBar] = useState(menuBarItems[0]);

  const menuBarChangeHandler = (value) => {
    setMenuBar(value);
  };

  const detailResultNavigate = (path, id) => {
    navigate(path, { state: { testId: id } });
  };
  return results.length === 0 ? (
    <div className="results">
      <div className="results__blank">
        <img
          src={`/assets/images/dashboard-results-blank.svg`}
          alt={"No Results Found!"}
          className={`results__blank__illustration`}
        />
        <h4 className="results__blank__title">No Results Found!</h4>
        <p className="results__blank__description">
          Please perform Practice Tests/Test Series to get your results.
        </p>
      </div>
    </div>
  ) : (
    <div className="results">
      <div className="results__overall">
        <section className="results__overall__left">
          <article className={`results__overall__left__menuBar `}>
            {menuBarItems.map((item) => (
              <p
                className={
                  menuBar === item
                    ? `results__overall__left__menuBar__item results__overall__left__menuBar__item--active`
                    : `results__overall__left__menuBar__item`
                }
                onClick={() => menuBarChangeHandler(item)}
              >
                {item}
              </p>
            ))}
          </article>
        </section>
        <section className="results__overall__right">
          <article className="results__overall__right__reviseCard">
            <img
              src="/assets/images/dashboard-results-review-bookmarks.svg"
              alt="Review Bookmarks"
              className="results__overall__right__reviseCard__image"
            />
            <p className="results__overall__right__reviseCard__subtitle">
              You have a few saved Questions in Bookmark.
            </p>
            <Link
              to="/dashBoard"
              className={`results__overall__right__reviseCard__cta`}
            >
              Review
            </Link>
          </article>
        </section>
      </div>
      <div className="results__mockTests">
        {mockTests.map((item) => (
          <div key={item.title} className="results__mockTests__item">
            <h6 className="results__mockTests__item__title">{item.title}</h6>
            <p className="results__mockTests__item__subtitle">
              {item.subtitle}
            </p>
            <span
              // to={`/results/${item.title.replaceAll(" ", "*")}`}
              onClick={() =>
                detailResultNavigate(
                  `/results/${item.title.replaceAll(" ", "*")}`,
                  item?._id
                )
              }
              className="results__mockTests__item__beginBtn"
            >
              View Results
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
