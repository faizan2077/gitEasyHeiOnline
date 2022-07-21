import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Main.scss";

const Main = () => {
  const dashboardCards = [
    {
      link: "questionsBoard",
      title: "Questions Bank",
      subtitle: "Create Questions & Tests for your Students",
    },
    {
      link: "liveLectures",
      title: "Live Lectures",
      subtitle: "Create and Post your Live and Upcoming Lectures",
    },
    {
      link: "recordedLectures",
      title: "Recorded Lectures",
      subtitle: "Solve doubts posted by your students",
    },
    {
      link: "createQuiz",
      title: "Create Assignment",
      subtitle: "Create the quiz of your own requirements",
    },
    // {
    //   link: "assignments",
    //   title: "Assignments",
    //   subtitle: "Prepare assignments for your students",
    // },
    // {
    //   link: "resultsAndAnalytics",
    //   title: "Results & Analytics",
    //   subtitle:
    //     "Get to see your student’s results and analyse their performances",
    // },
    // {
    //   link: "Content",
    //   title: "Content Board",
    //   subtitle: "Import your own content",
    // },
    // {
    //   link: "Fee",
    //   title: "Fee Board",
    //   subtitle: "Automate you institute’s fee management",
    // },
    // {
    //   link: "Surveys",
    //   title: "Surveys Board",
    //   subtitle: "Conduct surveys and get feedback about your institute",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const dashBoardItemClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mainTeacher">
      <div className="mainTeacher__header">
        <h3 className="mainTeacher__header__title">Categories</h3>
        <p className="mainTeacher__header__subtitle">
          Select your category below.
        </p>
      </div>
      <div className="mainTeacher__grid">
        {dashboardCards.map((item, index) => (
          <Link
            to={`/teacher/${item.link}`}
            key={item.name}
            className={
              index === activeIndex
                ? `mainTeacher__grid__item mainTeacher__grid__item--active`
                : `mainTeacher__grid__item`
            }
            onClick={() => dashBoardItemClickHandler(index)}
          >
            <img
              src={`/assets/images/teacher-dashboard-main-${item.title.toLowerCase()}.svg`}
              alt="Card"
              className="mainTeacher__grid__item__image"
            />
            <h6 className="mainTeacher__grid__item__title">{item.title}</h6>
            <p className="mainTeacher__grid__item__subtitle">{item.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
