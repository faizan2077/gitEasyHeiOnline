import React, { useState } from "react";
import { Modal } from "@material-ui/core";

import "./OptionsMaker.scss";
import OptionsModal from "../OptionsModal/OptionsModal";
import SubmitModal from "../SubmitModal/SubmitModal";

const OptionsMaker = (props) => {
  // Props

  const {
    title = "",
    options = [],
    correctOptions = [""],
    optionsChangeHandler,
  } = props;

  // States

  const [correctOptionModalOpen, setCorrectOptionModalOpen] = useState({
    open: false,
    modalType: "solution",
  });

  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  // Function Handlers

  const optionValueChangeHandler = (e, index) => {
    const newOptions = options.map((item, i) =>
      i === index ? e.target.value : item
    );

    optionsChangeHandler(newOptions);
  };

  const deleteOptionHandler = (index) => {
    if (options.length > 2) {
      const newOptions = options.filter((item, i) => i !== index);
      optionsChangeHandler(newOptions);
    }
  };

  const addOptionHandler = (index) => {
    const newOptions = [...options, ""];
    optionsChangeHandler(newOptions);
  };

  const handleReview=()=>{
    setSubmitModalOpen(true)
  }
  // Constants

  const buttonList = [
    {
      title: "Add Solution",
      icon: "teacher-dashboard-question-single-option-add-button-white.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "solution" }),
    },
    {
      title: "Add Hint",
      icon: "teacher-dashboard-question-single-option-add-button-blue.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "hint" }),
    },
    {
      title: "Add Correct Option",
      icon: "teacher-dashboard-question-single-option-add-button-white.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "correctOption" }),
    },
  ];

  const fourthButton = {
    title: "Add another Option",
    icon: "teacher-dashboard-question-single-option-add-button-white.svg",
    handler: addOptionHandler,
  };

  return (
    <section className="optionsMaker">
      <div className="optionsMaker__title">{title}</div>
      <div className="optionsMaker__optionList">
        {options.map((item, index) => (
          console.log(item,"these are options"),
          <div className="optionsMaker__optionList__item" key={index}>
            <div className="optionsMaker__optionList__item__number">
              <div className="optionsMaker__optionList__item__number__value">
                {index + 1}
              </div>
              {correctOptions.find((option) => option === item) && (
                <div className="optionsMaker__optionList__item__number__correct">
                  correct
                </div>
              )}
            </div>
            <textarea
              className="optionsMaker__optionList__item__textarea"
              value={item}
              onChange={(e) => optionValueChangeHandler(e, index)}
              placeholder={`Option ${index + 1}`}
            />
            <div
              className="optionsMaker__optionList__item__delete"
              onClick={() => deleteOptionHandler(index)}
            >
              <img
                src="/assets/images/teacher-dashboard-question-single-option-cross-button.svg"
                alt="Delete"
                className="optionsMaker__optionList__item__delete__image"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="optionsMaker__buttonList">
        <div className="optionsMaker__buttonList__left">
          {buttonList.map((item,i) => (
            <button
            key={i}
              className="optionsMaker__buttonList__left__item"
              onClick={item.handler}
            >
              <img
                src={`/assets/images/${item.icon}`}
                alt="Add Icon"
                className="optionsMaker__buttonList__left__item__icon"
              />
              <span className="optionsMaker__buttonList__left__item__text">
                {item.title}
              </span>
            </button>
          ))}
        </div>
        <div className="optionsMaker__buttonList__right">
          <button
            className="optionsMaker__buttonList__right__item"
            onClick={fourthButton.handler}
          >
            <img
              src={`/assets/images/${fourthButton.icon}`}
              alt="Add Icon"
              className="optionsMaker__buttonList__item__icon"
            />
            <span className="optionsMaker__buttonList__item__text">
              {fourthButton.title}
            </span>
          </button>
        </div>
      </div>

      <div className="optionsMaker__submitRow">
        <button
          className="optionsMaker__submitRow__review"
          onClick={() => handleReview(  ) }
        >
          Submit for Review
        </button>
        <button
          className="optionsMaker__submitRow__addAnother"
          onClick={() => {}}
        >
          <img
            src={`/assets/images/teacher-dashboard-question-single-option-add-button-blue.svg`}
            alt="Add Icon"
            className="optionsMaker__submitRow__addAnother__icon"
          />
          <span className="optionsMaker__submitRow__addAnother__text">
            Add More Questions
          </span>
        </button>
      </div>
      <Modal
        open={correctOptionModalOpen.open}
        onClose={() =>
          setCorrectOptionModalOpen({ open: false, modalType: "" })
        }
      >
        <>
          <OptionsModal
            {...props}
            title={"Please choose correct option"}
            modalType={correctOptionModalOpen.modalType}
            setModalOpen={setCorrectOptionModalOpen}
          />
        </>
      </Modal>
      <Modal
        open={submitModalOpen}
        setOpen={setSubmitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
      >
        <>
          <SubmitModal
            open={submitModalOpen}
            setOpen={setSubmitModalOpen}
            onClose={() => setSubmitModalOpen(false)}
          />
        </>
      </Modal>
    </section>
  );
};

export default OptionsMaker;
