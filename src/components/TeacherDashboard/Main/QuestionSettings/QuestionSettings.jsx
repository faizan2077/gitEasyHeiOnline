import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import DropDown from "../../../../utils/TeacherDashboard/DropDown/DropDown";
import ExamtypeDropDown from "../../../../utils/TeacherDashboard/DropDown/ExamtypeDropDown";
import InputTextField from "../../../../utils/TeacherDashboard/TextField/InputTextFields";
import SubjectDropDown from "../../../../utils/TeacherDashboard/DropDown/SubjectDropDown";
import ChapterDropDown from "../../../../utils/TeacherDashboard/DropDown/ChapterDropDown";
import TextFieldTest from "../../../../utils/TeacherDashboard/TextField/TextFieldTest";
import store  from "../../../../reducers/index";
import { savedata } from "../../../../actions/savedata";

import "./QuestionSettings.scss";

const QuestionSettings = ({ savedata, test }) => {

  const state = useSelector((state) => state.savedata.test);

  console.log(state);

  const dispatch = useDispatch();

  const data = bindActionCreators(savedata, dispatch);

  const [radio, setRadio] = useState("No");
  const [currentOptions2, setCurrentOptions2] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [inputvals, setinputvals] = useState({
    ...state
  });

  const {
    
    quationTopic,
    totalQuestion,
    noEasyQuestion,
    noMediumQuestion,
    noHardQuestion,
    correctAnsMarking,
    wrongAnsMarking,
    previousYear,
    prevMonth,
    prevYear
  } = inputvals;

  const textField = [
    {
      valueinput: "topic",
      title: "Topic",
      required: true,
      inputType: "text",
      inputValues : state.topic
    },
    {
      valueinput:"totalQuestions",
      title: "Total Questions",
      required: true,
      inputType: "text",
      inputValues : state.totalQuestions
    },

    {
      valueinput:"easyquestions",
      title: "No. Of Easy Questions",
      required: true,
      inputType: "number",
      inputValues : state.easyquestions
    },
    {
      valueinput:"mediumquestions",
      title: "No. Of Medium Questions",
      required: true,
      inputType: "number",
      inputValues : state.mediumquestions
    },
    {
      valueinput:"hardquestions",
      title: "No. Of Hard Questions",
      required: true,
      inputType: "text",
      inputValues : state.hardquestions
    },

    {
      valueinput:"correctAnswer",
      title: "Correct Answer Marking ",
      required: true,
      inputType: "number",
      inputValues : state.correctAnswer
    },
    {
      valueinput:"wrongAnswer",
      title: "Wrong Answer Marking ",
      required: true,
      inputType: "number",
      inputValues : state.wrongAnswer
      
    }
  ];

  const dropDownRow = [
    {
      title: "Select Subject",
      options: ["Maths", "Physics", "Chemistry", "Biology"],
      required: true,
    },
    {
      title: "Select Chapter",
      options: ["Maths", "Physics", "Chemistry", "Biology"],
      required: true,
    },
    {
      title: "Select Topic",
      options: ["Maths", "Physics", "Chemistry", "Biology"],
      required: true,
    },

    {
      title: "Question Type",
      options: [
        "Single Option Correct",
        "Multiple Option Correct",
        "Integer Type",
        "Assertion Type",
      ],
      required: true,
    },
  ];

  const radioHandler = () => {
    setRadio(radio === "Yes" ? "No" : "Yes");
  };

  return (
    <div className="questionSettings">
      <GoBack linkText={"Back to Tests"} relativeURL={"/teacher/testsBoard"} />

      <AddTestMenu type={1} />

      <section className="questionSettings__header">
        <h3 className="questionSettings__header__title">
          Please enter details below to retrieve Questions
        </h3>
      </section>
      <section className="questionSettings__dropDownRow">
        <SubjectDropDown
          currentOptions2={currentOptions2}
          setCurrentOptions2={setCurrentOptions2}
          setChapterList={setChapterList}
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        />
        <ChapterDropDown
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        />

        {textField.map((item,i) => (
         
         <TextFieldTest 
            inputvals={inputvals}
            setinputvals={setinputvals}
            valueinput={item.valueinput}
            type={item.valueinput}
            placeholder={item.title}
            required={item.required}
            inputValues = {item.inputValues}
          />
        ))}
      </section>

      <section className="questionSettings__previousYear">
        <div className="questionSettings__previousYear__left">
          <div className="questionSettings__previousYear__left__title">
            Previous Year{" "}
            <span className="questionSettings__previousYear__left__title__dull">
              (If yes, please specify Month and Year)
            </span>
          </div>
          <div className="questionSettings__previousYear__left__radioButton">
            <span className="questionSettings__previousYear__left__radioButton__text">
              Yes
            </span>
            <img
              className={
                radio === "Yes"
                  ? "questionSettings__previousYear__left__radioButton__image questionSettings__previousYear__left__radioButton__image--rotated"
                  : "questionSettings__previousYear__left__radioButton__image"
              }
              onClick={() => radioHandler()}
              src="/assets/images/teacher-dashboard-questions-board-radio.svg"
              alt="Radio"
            />
            <span className="questionSettings__previousYear__left__radioButton__text">
              No
            </span>
          </div>
          <div className="questionSettings__previousYear__left__inputs">
            <TextFieldTest
              type="number"
              inputvals={inputvals}
              setinputvals={setinputvals}
              valueinput="previousMonth"
              placeholder="Enter Month"
              required={radio === "Yes"}
              inputValues = {state.previousMonth}
            />
            <TextFieldTest
              type="number"
              inputvals={inputvals}
              setinputvals={setinputvals}
              valueinput="previousYear"
              placeholder="Enter Year"
              required={radio === "Yes"}
              inputValues = {state.previousYear}
            />
            
          </div>
        </div>
       
      </section>
      <section className="questionSettings__subFooter">
        <Link
          to="/teacher/addTest"
          className="questionSettings__subFooter__title"
          onClick = {()=>savedata(inputvals)}
        >
          Previous
        </Link>
        <Link
          to="/teacher/testPreview"
          className="questionSettings__subFooter__title"
          onClick = {()=>savedata(inputvals)}
        >
          Next
        </Link>
      </section>
    </div>
  );
};

QuestionSettings.propTypes = {
  savedata: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  payload: state.playload,
  error: state.error,
});

export default connect(mapStateToProps, { savedata })(QuestionSettings);
