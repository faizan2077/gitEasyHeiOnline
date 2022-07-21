import React from "react";

import "./ExtraTitle.scss";

const ExtraTitle = ({ title }) => {
  return (
    <section className="extraTitle">
      <h5 className="extraTitle__text">{title}</h5>
    </section>
  );
};

export default ExtraTitle;
