import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddQuestionMenu from "../../../../utils/TeacherDashboard/AddQuestionMenu/AddQuestionMenu";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DropDown from "../../../../utils/TeacherDashboard/DropDown/DropDown";
import TextField from "../../../../utils/TeacherDashboard/TextField/TextField";

import "./AddQuestion.scss";
import { createquestion } from "../../../../actions/teacher";
import SubjectDropDown from "../../../../utils/TeacherDashboard/DropDown/SubjectDropDown";
import ExamtypeDropDown from "../../../../utils/TeacherDashboard/DropDown/ExamtypeDropDown";
import StandardDropDown from "../../../../utils/TeacherDashboard/DropDown/StandardDropDown";
import ChapterDropDown from "../../../../utils/TeacherDashboard/DropDown/ChapterDropDown";
import InputTextField from "../../../../utils/TeacherDashboard/TextField/InputTextFields";

const AddQuestion = ({ createquestion, teacher: { questions, loading } }) => {
  
  const [radio, setRadio] = useState("No");
  // const [questionType, setQuestionType] = useState("Single Option Correct");
  const [currentOptions2, setCurrentOptions2] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [chapter, setChapter] = useState([]);
  const Api = process.env.REACT_APP_API;
  const [inputvals, setinputvals] = useState({
    statement: "",
    image: "",
    solution: "",
    hint: "",
    difficulty: "",
    options: "",
    correctOptions: "",
    type: "",
    standard: "",
    subject: "",
    chapter: "",
    topic: "",
    time: 0,
    examtype: "",
    marks: 0,
    negativeMarks: -7,
    previousYear: 0,
    prreviousMonth: 0,
    //   type: "SINGLE-CORRECT",
    //   subject: "6221bc6fdb949b3858f811fa",
    //   chapter: "6221bc6fdb949b3858f811fb",
    //   topic: "cdcsdccds",
    //   time: 70,
    //   marks: 77,
    //   negativeMarks: -7,
    //   previousYear
  });

  const {
    statement,
    image,
    solution,
    hint,
    difficulty,
    options,
    correctOptions,
    type,
    subject,
    standard,
    examtype,
    topic,
    time,
    marks,
    negativeMarks,
    previousYear,
    previousmonth,
  } = inputvals;

  const dropDownRow = [
    {
      title: "Question Type",
      valueinput: "type",
      required: true,
      options: [
        "Single Option Correct",
        "Multiple Option Correct",
        "Integer Type",
        "Assertion Type",
      ],
    },
    {
      title: "Difficulty Level",
      required: true,
      valueinput: "difficulty",
      options: ["Easy", "Medium", "Hard"],
    },
  ];

  {
    // const data={
    //   statement: "this is a statedscdcscdssdment",
    //   image: "https://res.cloudinary.com/akdiagnostics/image/upload/v1643701952/ag7rkmnsoad2ehtzmfbg.png",
    //   options: [
    //     "sadsadasas"
    //   ],
    //   // correctOptions: [],
    //   solution: "this is the solution",
    //   hint: "ssjssj",
    //   difficulty: "EASY",
    //   type: "SINGLE-CORRECT",
    //   subject: "6221bc6fdb949b3858f811fa",
    //   chapter: "6221bc6fdb949b3858f811fb",
    //   topic: "cdcsdccds",
    //   time: 70,
    //   marks: 77,
    //   negativeMarks: -7,
    //   previousYear: "112022"
    // }
  }
  const radioHandler = () => {
    setRadio(radio === "Yes" ? "No" : "Yes");
  };

  return (
    <div className="addQuestion">
      <GoBack
        linkText={"Back to Question Bank"}
        relativeURL={"/teacher/questionsBoard"}
      />

      <AddQuestionMenu type={0} />

      <section className="addQuestion__header">
        <h3 className="addQuestion__header__title">
          Please enter details below
        </h3>
      </section>
      <section className="addQuestion__dropDownRow">
        <SubjectDropDown
          currentOptions2={currentOptions2}
          setCurrentOptions2={setCurrentOptions2}
          setChapterList={setChapterList}
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        />
        {console.log(chapterList)}
        <ExamtypeDropDown inputvals={inputvals} setinputvals={setinputvals} />
        <ChapterDropDown
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        />
        {console.log(currentOptions2, chapter)}
        <StandardDropDown inputvals={inputvals} setinputvals={setinputvals} />
        {dropDownRow.map((item, i) => (
          <DropDown
            key={i}
            title={item.title}
            valueinput={item.valueinput}
            options={item.options}
            required={item.required}
            inputvals={inputvals}
            setinputvals={setinputvals}
          />
        ))}
        <InputTextField
          type="text"
          placeholder="Enter Topic"
          valueinput="topic"
          inputvals={inputvals}
          setinputvals={setinputvals}
        />
      </section>
      <section className="addQuestion__previousYear">
        <div className="addQuestion__previousYear__left">
          <div className="addQuestion__previousYear__left__title">
            Previous Year{" "}
            <span className="addQuestion__previousYear__left__title__dull">
              (If yes, please specify Month and Year)
            </span>
          </div>
          <div className="addQuestion__previousYear__left__radioButton">
            <span className="addQuestion__previousYear__left__radioButton__text">
              Yes
            </span>
            <img
              className={
                radio === "Yes"
                  ? "addQuestion__previousYear__left__radioButton__image addQuestion__previousYear__left__radioButton__image--rotated"
                  : "addQuestion__previousYear__left__radioButton__image"
              }
              onClick={() => radioHandler()}
              src="/assets/images/teacher-dashboard-questions-board-radio.svg"
              alt="Radio"
            />
            <span className="addQuestion__previousYear__left__radioButton__text">
              No
            </span>
          </div>
          <div className="addQuestion__previousYear__left__inputs">
            <InputTextField
              valueinput="previousMonth"
              inputvals={inputvals}
              setinputvals={setinputvals}
              type="number"
              placeholder="Enter Month"
              required={radio === "Yes"}
            />
            <InputTextField
              valueinput="previousYear"
              inputvals={inputvals}
              setinputvals={setinputvals}
              type="number"
              placeholder="Enter Year"
              required={radio === "Yes"}
            />
          </div>
        </div>
      </section>
      <section className="addQuestion__subFooter">
        {console.log(inputvals)}
        <Link
          to="/teacher/addQuestion/singleOption"
          className="addQuestion__subFooter__title"
          
        >
          Next
        </Link>
      </section>
    </div>
  );
};

AddQuestion.propTypes = {
  createQuestions: PropTypes.func.isRequired,

  teacher: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  teacher: state.teacher,
  error: state.error,
});

export default connect(mapStateToProps, { createquestion })(AddQuestion);

// add-test-screen-fake
