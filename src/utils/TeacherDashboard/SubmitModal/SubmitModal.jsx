import React from "react";
import { useNavigate } from "react-router-dom";

import "./SubmitModal.scss";

const SubmitModal = (props) => {
  const { setOpen } = props;

  const navigate = useNavigate();

  return (
    <section className="submitModal">
      <div className="submitModal__scrollable">
        <h4 className="submitModal__scrollable__title">Sent For Review!</h4>
        <h6 className="submitModal__scrollable__subtitle">
          Your Question has been sent for Review. Do you want to add another
          Question?
        </h6>
        <div className="submitModal__scrollable__actionButtons">
          <button
            onClick={() => navigate("/teacher/addQuestion")}
            className="submitModal__scrollable__actionButtons__true"
          >
            Yes, Add Another
          </button>
          <button
            onClick={() => setOpen(false)}
            className="submitModal__scrollable__actionButtons__cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubmitModal;
