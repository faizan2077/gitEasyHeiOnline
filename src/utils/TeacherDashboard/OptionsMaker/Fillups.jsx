
import React, { useState ,useEffect} from "react";
import { Modal } from "@material-ui/core";

import "./OptionsMaker.scss";
import OptionsModal from "../OptionsModal/OptionsModal";
// import ReactDOM from 'react-dom/client';
import SubmitModal from "../SubmitModal/SubmitModal";
import TinyEditor from "../../../components/TeacherDashboard/Main/UploadQuestion/TinyEditor";
import { Parser } from "html-to-react";

import TextEditorQuestionEditable from "../TextEditor/TextEditorQuestionEditable";

const Fillups = (props) => {
  // Props
  const [editedvals, seteditedvals] = useState(props.initialvals);
const [optionsmaker, setoptionsmaker] = useState([]);
// console.log(props)
 // console.log(props.aphoto)
useEffect(() => {
 const temp=[]
 props.initialvals.options.map((item)=>{
  
   temp.push(item.isCorrect)
 })

 setoptionsmaker(temp)
}, []);
  const {
    title = "",
    options = [],
    correctOptions = [""],
  //  initialvals.optionsChangeHandler,
    solution ,
    answer,
    question,
  
    image
  } = props.initialvals;

  // States

  const [correctOptionModalOpen, setCorrectOptionModalOpen] = useState({
    open: false,
    modalType: "solution",
    solution:"",
   answer:"",value:""
  });

  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  // Function Handlers

  const optionValueChangeHandler = (e, index) => {
    const newOptions = editedvals.options.map((item, i) =>
      i === index ? e.target.value : item
    );

     // optionsChangeHandler(newOptions);
  };

  const deleteOptionHandler = (index) => {
    if (options.length > 2) {
      const newOptions = editedvals.options.filter((item, i) => i !== index);
   //   optionsChangeHandler(newOptions);
    }
  };

  const addOptionHandler = (index) => {
    const newOptions = [...editedvals.options, ""];
   // optionsChangeHandler(newOptions);
  };

  const handleReview=()=>{
    setSubmitModalOpen(true)
  }
  // Constants

  const buttonList = [
    {
      title: "Solution",
      icon: "teacher-dashboard-question-single-option-add-button-white.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "solution" ,solution:JSON.stringify(editedvals.solution) }),
    },
    {
      title: "Answer",
      icon: "teacher-dashboard-question-single-option-add-button-white.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "answer" ,answer:JSON.stringify(editedvals.answer) }),
    },
    // {
    //   title: "Add Correct Option",
    //   icon: "teacher-dashboard-question-single-option-add-button-white.svg",
    //   handler: () =>
    //     setCorrectOptionModalOpen({ open: true, modalType: "correctOption" }),
    // },
  ];

  const handleEditor =(item)=>{
    setCorrectOptionModalOpen({ open: true, modalType: "editor" ,value:item})
 
  }
  const fourthButton = {
    title: "Add another Option",
    icon: "teacher-dashboard-question-single-option-add-button-white.svg",
    handler: addOptionHandler,
  };

  return (
    <section className="optionsMaker">
      {/* <div className="optionsMaker__title">{title}</div> */}
      <div>
      <TextEditorQuestionEditable
    
    question={props.initialvals.question}
    image={props.initialvals.image}
 changevalue={"question"}
    inputvals={props.initialvals}
    setinputvals={props.setinitialvals}
   />
      </div>
      <div className="optionsMaker__optionList">
        {editedvals.options.map((item, index) => (
        
          <div className="optionsMaker__optionList__item" key={index}>
            <div className="optionsMaker__optionList__item__number">
              <div className="optionsMaker__optionList__item__number__value">
                {index + 1}
              </div>
            
            </div>
            <label
              className="optionsMaker__optionList__item__textarea"
              
              onChange={(e) => optionValueChangeHandler(e, index)}
              placeholder={`Option ${index + 1}`}
            >{Parser().parse(item.answer)}
            </label>
  
            <div
              className="optionsMaker__optionList__item__delete"
              onClick={() => deleteOptionHandler(index)}
            >
                {editedvals.optionsmaker.map((option) => option === item) && (
                <div className="optionsMaker__optionList__item__number__correct">
                {item.isCorrect}
                </div>
              )}
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
            
              <span className="optionsMaker__buttonList__left__item__text">
                {item.title}
              </span>
            </button>
          ))}
        </div>
        <div className="optionsMaker__buttonList__right">
          
        </div>
      </div>

      <div className="optionsMaker__submitRow">
        
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
            solution={correctOptionModalOpen.solution}
            answer={correctOptionModalOpen.answer }
            value={correctOptionModalOpen.value}
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

export default Fillups;
