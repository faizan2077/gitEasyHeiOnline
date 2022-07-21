import React from "react";
import GoBack from "../../../../utils/Common/GoBack/GoBack";

import "./ViewLiveLecture.scss";

const ViewLiveLecture = () => {
  return (
    <section className="viewLiveLecture">
      <GoBack
        linkText={"Back to Live Lectures"}
        relativeURL={"/teacher/liveLectures"}
      />
      <article className="viewLiveLecture__main">
        <div className="viewLiveLecture__main__left">
          <img
            src="/assets/images/teacher-dashboard-live-lecture-video-box.svg"
            alt="Live Video"
            className="viewLiveLecture__main__left__video"
          />
        </div>
        <div className="viewLiveLecture__main__right">
          <img
            src="/assets/images/teacher-dashboard-live-lecture-chat-box.svg"
            alt="Live Chat"
            className="viewLiveLecture__main__right__chat"
          />
        </div>
      </article>
      <article className="viewLiveLecture__titleBar">
        <h4 className="viewLiveLecture__titleBar__title">Binomial Theorems</h4>
        <p className="viewLiveLecture__titleBar__time">10th Dec, 2021</p>
      </article>
      <ul className="viewLiveLecture__navigation">
        <li>Overview</li>
      </ul>{" "}
      <h4 className="viewLiveLecture__overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor.
      </h4>
    </section>
  );
};

export default ViewLiveLecture;
