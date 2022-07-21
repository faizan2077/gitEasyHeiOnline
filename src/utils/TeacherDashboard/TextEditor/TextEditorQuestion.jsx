import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import "./TextEditor.scss";
import { Parser } from "html-to-react";
import OptionsModal from "../OptionsModal/OptionsModal";
const TextEditorQuestion = ({
  title,
  question,
  inputvals,
  setinputvals,
  image,
  Editable,
  index,
  setEditable,
  setheadquestion,
}) => {
  const [value, setValue] = useState(question);
  const [correctOptionModalOpen, setCorrectOptionModalOpen] = useState({
    open: false,
    modalType: "solution",
    solution: "",
    answer: "",
    value: "",
    key: 0,
    setvalue: "",
  });
  const handlechange = (e) => {
    setCorrectOptionModalOpen({ open: true, modalType: "editor2" });
  };
  // input={props.options} closemodal={props.setModalOpen} setinput={props.edit} optionno={props.optionno}
  // console.log("this is the Texteditor Enable",Editable,index)
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    setinputvals({ ...inputvals, statement: e.target.value });
  };
  const [photo, setphoto] = useState(image != undefined ? image : "no");
  // console.log(Editable[index])
  // const data= Editable
  return (
    <section className="textEditor">
      {/* <div className="textEditor__title">{title}</div> */}
      {
        <div className="shiftend">
          <div className="textEditor__main">
            <div className="textEditor__main__imageRow">
              {/* <img
            src="/assets/images/teacher-dashboard-question-single-option-text-editor-bar.svg"
            alt="Text Editor Bar"
            className="textEditor__main__imageRow__image"
          /> */}
            </div>

            <label
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing?"
              // onChange={(e) => inputChangeHandler(e)}
              required={true}
              className="textEditor__main__inputBox"
            >
              {Parser().parse(question)}
            </label>
          </div>

          {photo != "no pic" ? (
            <div className="textEditor__main">
              <div className="center image">{Parser().parse(photo)}</div>
            </div>
          ) : (
            ""
          )}

          {Editable[index] == 1 ? (
            <a
              className="width"
              onClick={() => {
                handlechange();
              }}
            >
              <img
                src="/assets/images/teacher-dashboard-question-single-option-add-button-blue.svg"
                alt="Add Icon"
                className=" pl-4 optionsMaker__optionList__item__delete__image point"
              />
            </a>
          ) : (
            ""
          )}
        </div>
      }

      <Modal
        open={correctOptionModalOpen.open}
        onClose={() =>
          setCorrectOptionModalOpen({ open: false, modalType: "" })
        }
      >
        {/* input={props.options} closemodal={props.setModalOpen} setinput={props.edit} optionno={props.optionno} */}
        <>
          <OptionsModal
            // {...props}
            input={question}
            modalType={correctOptionModalOpen.modalType}
            setModalOpen={setCorrectOptionModalOpen}
            setheadquestion={setheadquestion}

            // options={option}

            // setinitialvals={setinitialvals}
          />
        </>
      </Modal>
    </section>
  );
};

export default TextEditorQuestion;
