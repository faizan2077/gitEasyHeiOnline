import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestions,createquestion ,deletequestion} from "../../../../actions/teacher";
import { questionsBoardData } from "../../../../constants/Dashboard/Results/results";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import DropDownSmall from "../../../../utils/TeacherDashboard/DropDownSmall/DropDownSmall";
import TableComp from "../../../../utils/TeacherDashboard/TableComp/TableComp";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./QuestionsBoard.scss";
import { getSubjects } from "../../../../actions/subject";
import SubjectDropDown from "../../../../utils/TeacherDashboard/DropDown/SubjectDropDown";

const QuestionsBoard = ({getQuestions ,createquestion ,deletequestion, getSubjects,teacher:{questions,loading} }) => {
  const [searchInput, setSearchInput] = useState("");
const [array, setarray] = useState();
const [load, setload] = useState(false);  
const dropDownRow = [
    {
      title: "Subject",
      required: true,
      options: ["Maths", "Physics", "Chemistry", "Biology"],
    },
    {
      title: "Chapter",
      required: true,
      options: ["Sets", "Algebra", "Calculus", "3D Geometry"],
    },
    {
      title: "Topic",
      required: true,
      options: ["Sets", "Algebra", "Calculus", "3D Geometry"],
    },
    {
      title: "Question Type",
      required: true,
      options: [
        "Single Option Correct",
        "Multiple Option Correct",
        "Integer Type",
        "Assertion Type",
      ],
    },
    {
      title: "Status",
      required: true,
      options: ["Under Review", "Approved"],
    },
    {
      title: "More",
      required: true,
      options: ["Difficulty Level", "Previous Year", "Grade", "Exam Type"],
    },
  ];

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };
 
  const hangleButton= () =>{

    const data={
      statement: "this is a statedscdcscdssdment",
      image: "https://res.cloudinary.com/akdiagnostics/image/upload/v1643701952/ag7rkmnsoad2ehtzmfbg.png",
      options: [
        "sadsadasas"
      ],
      correctOptions: [],
      solution: "this is the solution",
      hint: "ssjssj",
      difficulty: "EASY",
      type: "SINGLE-CORRECT",
      subject: "6221bc6fdb949b3858f811fa",
      chapter: "6221bc6fdb949b3858f811fb",
      topic: "cdcsdccds",
      time: 70,
      marks: 77,
      negativeMarks: -7,
      previousYear: "112022"
    }
    console.log(data);

    createquestion(data)
  }
  useEffect(() => {
    console.log(searchInput);
    // Set table as per search input.
    getQuestions()
 
  }, [load]);
  return (
    <div className="questionsBoard">
 {/* ,subject:{subject,loading} */}

      {console.log(questions)}
    <GoBack linkText={""} relativeURL={"/teacher/dashboard"} />
      <section className="questionsBoard__header">
        <h4 className="questionsBoard__header__title">Questions Board</h4>
      </section>
      <section className="questionsBoard__tabs">
        <h4
          className={`questionsBoard__tabs__link questionsBoard__tabs__link--active`}
        >
          Question Bank
        </h4>
        
        {/* <Link
          to={"/teacher/testsBoard"}
          className={`questionsBoard__tabs__link`}
        >
          Tests
        </Link> */}
      </section>
      <section className="questionsBoard__searchAndAdd">
        <div className="questionsBoard__searchAndAdd__search">
          <img
            className="questionsBoard__searchAndAdd__search__image"
            alt="Search"
            src="/assets/images/teacher-dashboard-questions-board-search.svg"
          />
          <input
            className="questionsBoard__searchAndAdd__search__input"
            type={"text"}
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => searchHandler(e)}
          />
        </div>
        <div className="questionsBoard__searchAndAdd__addQuestion">
          <img
            className="questionsBoard__searchAndAdd__addQuestion__image"
            alt="Add"
            src="/assets/images/teacher-dashboard-questions-board-bulk-add.svg"
          />
          <Link
            to={"/teacher/uploadQuestion"}
            className="questionsBoard__searchAndAdd__addQuestion__text"
          >
            {"Upload"}
          </Link>
        </div>

        <div className="questionsBoard__searchAndAdd__addQuestion">
          <img
            className="questionsBoard__searchAndAdd__addQuestion__image"
            alt="Add"
            src="/assets/images/teacher-dashboard-questions-board-add.svg"
          />
          <Link
            to={"/teacher/addQuestion"}
            className="questionsBoard__searchAndAdd__addQuestion__text"
          >
            {"Add a Question"}
          </Link>
        </div>
      </section>
      <section className="questionsBoard__dropDownRow">
        {/* {dropDownRow.map((item) => (
          <DropDownSmall
            title={item.title}
            options={item.options}
            required={item.required}
          />
        ))} */}
          {/* <SubjectDropDown/> */}
      </section>
      <TableComp questionsBoardData={questionsBoardData}  questions={questions}  setload={setload}/>
    </div>
  );
};


QuestionsBoard.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  createQuestions: PropTypes.func.isRequired,
  deleteQuestions: PropTypes.func.isRequired,
 
  teacher: PropTypes.object.isRequired,
  error:PropTypes.object.isRequired,
  
  getSubjects: PropTypes.func.isRequired


}
const mapStateToProps = state =>({

  teacher: state.teacher,
  error: state.error, 
  subject: state.subject,
  
});

export default connect( mapStateToProps, { getQuestions,getSubjects,createquestion } )(QuestionsBoard);
