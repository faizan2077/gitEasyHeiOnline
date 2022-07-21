import React, { useState } from "react";

import "./OptionsModal.scss";
import { Parser } from "html-to-react";
import TinyEditortext from "../../../components/TeacherDashboard/Main/UploadQuestion/TinyEditortext";
import TinyEditor from "../../../components/TeacherDashboard/Main/UploadQuestion/TinyEditor";
import MutipleQuestionOptionMakerEditable from "../OptionsMaker/MutipleQuestionOptionMakerEditable";
const OptionsModal = (props) => {
  const [value1, setvalue1] = useState(props.positiveMarks);
  const [value2, setvalue2] = useState(props.negativeMarks);
  const {
 
    modalType,
  } = props;

  const handleSubmit =()=>{
    props.setpositiveMarks(value1) 
    props.setnegativeMarks(value2)
    console.log(value1,value2)
    props.setModalOpen({ open: false, modalType: "" })
  }
  const [values, setvalues] = useState(props.value);
  //  props.aphoto
  const titleDecider = (modalType) => {
    switch (modalType) {
      case "correctOption":
        return "Please choose correct option";
      case "hint":
        return "Please add hint";
      case "solution":
        return "Please add solution";
        case "answer":
          return "Please add Answer";
         
      default:
        break;
    }
  };

  // Multi-Correct
  // const correctOptionListChangeHandler = (option) => {
  //   const newOptions = correctOptions.find((item) => item === option)
  //     ? correctOptions.filter((item) => item !== option)
  //     : [...correctOptions, option];
  //   correctOptionsChangeHandler(newOptions);
  // };

  // Single Correct
  const correctOptionListChangeHandler = (option) => {
    props.correctOptionsChangeHandler([option]);
  };

  return (
    <section className="optionsModal">
      <div className="optionsModal__scrollable">
        <img
          src={`/assets/images/teacher-dashboard-question-single-option-modal-cross-button.svg`}
          alt={"Close"}
          className={`optionsModal__scrollable__crossButton`}
          onClick={() => props.setModalOpen({ open: false, modalType: "" })}
        />
        <h4 className="optionsModal__scrollable__title">
          {titleDecider(modalType)}
        </h4>
        <article className="optionsModal__scrollable__card">
          {/* <h5 className="optionsModal__scrollable__card__title">Question</h5> */}

          {/* Add Correct Option */}
          {modalType === "correctOption" && (
            <div className="optionsModal__scrollable__card__body">
              <h5 className="optionsModal__scrollable__card__body__question">
                {props.question}
              </h5>

              <div className="optionsModal__scrollable__card__body__options">
                {props.options.map((item, index) => (
                  <div className="optionsModal__scrollable__card__body__options__item">
                    <div className="optionsModal__scrollable__card__body__options__item__number">
                      {index + 1}
                    </div>
                    {props.correctOptions.find((option) => option === item) && <></>}
                    <div
                      className={
                        props.correctOptions.find((option) => option === item)
                          ? `optionsModal__scrollable__card__body__options__item__textarea optionsModal__scrollable__card__body__options__item__textarea--correct`
                          : `optionsModal__scrollable__card__body__options__item__textarea`
                      }
                      onClick={() => correctOptionListChangeHandler(item)}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => props.setModalOpen({ open: false, modalType: "" })}
                className="optionsModal__scrollable__card__body__submit"
              >
                Add
              </button>
            </div>
          )}

          {modalType === "solution" && (
            <div className="optionsModal__scrollable__card__body">
              <h5 className="optionsModal__scrollable__card__body__question">
              {props.question}
              </h5>

              <label
                type="text"
                value={props.editsolution}
                placeholder={`Add your solution here`}
                // onChange={(e) => props.seteditsolution(e.target.value)}
                className="optionsModal__scrollable__card__body__solution point"
              >{Parser().parse(props.editsolution)}</label>
              <button
                onClick={() => props.setModalOpen({ open: false, modalType: "" })}
                className="optionsModal__scrollable__card__body__submit"
              >
                close
              </button>
            </div>
          )}


{modalType === "answer" && (
            <div className="optionsModal__scrollable__card__body">
              <h5 className="optionsModal__scrollable__card__body__question">
              {props.question}
              </h5>
              <label
                type="text"
                value={props.editanswer}
                placeholder={`Add your answer here`}
                onChange={(e) => props.seteditanswer(e.target.value)}
                className="optionsModal__scrollable__card__body__solution point"
              >{Parser().parse(props.editanswer)}</label>
            

              <button
                onClick={() => props.setModalOpen({ open: false, modalType: "" })}
                className="optionsModal__scrollable__card__body__submit "
              >
                close
              </button>
              
             
           
              
            </div>
          )}

{modalType === "marks" && (
            <div className="optionsModal__scrollable__card__body">
              <h5 className="optionsModal__scrollable__card__body__question">
              Positive Marks Are
              </h5>
              <label
                type="text"
                value={props.positiveMarks}
                placeholder={`Add your answer here`}
                onChange={(e) => props.setpositiveMarks(e.target.value)}
                className="marks"
              >{Parser().parse(props.positiveMarks)}</label>
              <h5 className="optionsModal__scrollable__card__body__question">
              Negative Marks Are
              </h5>
              <label
                type="text"
                value={props.negativeMarks}
                placeholder={`Add your answer here`}
                onChange={(e) => props.setnegativeMarks(e.target.value)}
                className="marks"
              >{Parser().parse(props.negativeMarks)}</label>
            

              <button
                onClick={() => props.setModalOpen({ open: false, modalType: "" })}
                className="optionsModal__scrollable__card__body__submit "
              >
                close
              </button>
              
             
           
              
            </div>
          )}

{modalType === "marksedit" && (
            <div className="optionsModal__scrollable__card__body">
              <h5 className="optionsModal__scrollable__card__body__question">
              Positive Marks Are
              </h5>
              <input
                type="number"
                value={value1}
                placeholder={`Add your Positive value here`}
                min="0"
                onChange={(e) => setvalue1(e.target.value)}
                className="marks point"
              ></input>
              <h5 className="optionsModal__scrollable__card__body__question">
              Negative Marks Are
              </h5>
              <input
                type="number"
                value={value2}
                placeholder={`Add your negative value here`}
                min="0"
                onChange={(e) => setvalue2(e.target.value)}
                className="marks point"
              ></input>
            

              <button
                onClick={() =>handleSubmit()}
                className="optionsModal__scrollable__card__body__submit "
              >
               Save
              </button>
              
             
           
              
            </div>
          )}


          {modalType === "hint" && (
            <div className="optionsModal__scrollable__card__body">
              <h5 className="optionsModal__scrollable__card__body__question">
                {props.question}
              </h5>

              <textarea
                type="text"
                value={props.hint}
                placeholder={`Add your hint here`}
                onChange={(e) => props.hintChangeHandler(e.target.value)}
                className="optionsModal__scrollable__card__body__solution"
              />
              <button
                onClick={() => props.setModalOpen({ open: false, modalType: "" })}
                className="optionsModal__scrollable__card__body__submit"
              >
                Add
              </button>
            </div>
          )}


{modalType === "edit" && (
            <div className="optionsModal__scrollable__card__body">
              {/* <h5 className="optionsModal__scrollable__card__body__question">
                {props.question}
              </h5> */}

              {/* <textarea
                type="text"
                value={props.hint}
                placeholder={`Add your hint here`}
                onChange={(e) => props.hintChangeHandler(e.target.value)}
                className="optionsModal__scrollable__card__body__solution"
              /> */}
              <button
                onClick={() => props.setModalOpen({ open: false, modalType: "" })}
                className="optionsModal__scrollable__card__body__submit"
              >
                Add
              </button>
            </div>
          )}
         {/* { console.log(props)} */}

{modalType === "editor" && (
            <div className="optionsModal__scrollable__card__body">
             <TinyEditor input={props.options} closemodal={props.setModalOpen} setinput={props.edit} optionno={props.optionno}/>
            </div>
          )}

          
{modalType === "editor2" && (
            <div className="optionsModal__scrollable__card__body">
             <TinyEditortext input={props.input} closemodal={props.setModalOpen} setinput={props.setheadquestion}/>
            </div>
          )}

{modalType === "editanswer" && (
            <div className="optionsModal__scrollable__card__body">
             <TinyEditortext input={props.editanswer} closemodal={props.setModalOpen} setinput={props.seteditanswer}/>
            </div>
          )}
          {modalType === "editsolution" && (
            <div className="optionsModal__scrollable__card__body">
             <TinyEditortext input={props.editsolution} closemodal={props.setModalOpen} setinput={props.seteditsolution}/>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default OptionsModal;
