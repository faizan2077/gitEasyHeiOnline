import React from "react";

import "./ChangeQuestionModal.scss";

const ChangeQuestionModal = (props) => {
  const { setOpen } = props;
  return (
    <section className="changeQuestionModal">
      <div className="changeQuestionModal__scrollable">
        <h4 className="changeQuestionModal__scrollable__title">
          {props.title}
        </h4>
        <h6 className="changeQuestionModal__scrollable__subtitle">
          {props.subtitle}
        </h6>
        <div className="changeQuestionModal__scrollable__actionButtons">
          <button
            onClick={() => {
              if (props.onClickHandler) props.onClickHandler();
              else console.log("Call API");
            }}
            className="changeQuestionModal__scrollable__actionButtons__true"
          >
            Yes
          </button>
          <button
            onClick={() => setOpen(false)}
            className="changeQuestionModal__scrollable__actionButtons__cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangeQuestionModal;
