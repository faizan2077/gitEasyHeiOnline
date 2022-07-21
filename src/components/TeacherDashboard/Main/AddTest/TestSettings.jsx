import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";
import PropTypes from "prop-types";

import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import DropDown from "../../../../utils/TeacherDashboard/DropDown/DropDown";
import ExamtypeDropDown from "../../../../utils/TeacherDashboard/DropDown/ExamtypeDropDown";
import StandardDropDown from "../../../../utils/TeacherDashboard/DropDown/StandardDropDown";
import TextFieldTest from "../../../../utils/TeacherDashboard/TextField/TextFieldTest";
import {savedata} from "../../../../actions/savedata";

import "./TestSettings.scss";

const TestSettings = ({ savedata, test }) => {

  const state = useSelector((state) => state.savedata.test);

  console.log(state);

  const dispatch = useDispatch();

  const data = bindActionCreators(savedata, dispatch);

  
  const [inputvals, setinputvals] = useState({
    ...state
  });

  const {
    testName,
    chapter,
    type,
    difficulty,
    examDuration,
    subject,
    standard,
    examtype,
    topic,
    time,
    marks,
    totalQuesrions,
    easyquestions,
    hardquestions,
    mediumquestions,
    negativeMarks,
    previousYear,
    previousmonth,
  } = inputvals;

  const textField1 = [
    {
      title: "Enter Test Name",
      required: true,
      type: "text",
      inputName: 'testName',
      inputValues : state.testName
    },
    {
      title: "Choose Test Date",
      required: true,
      type: "date",
      inputName: 'testDate',
      inputValues : state.testDate
    },
    {
      title: "Test Publish Time",
      required: true,
      type: "time",
      inputName: 'testTime',
      inputValues : state.testTime
    },
    // {
    //   title: "Total Questions",
    //   required: true,
    // },
  ];

 

  const dropDownRow = [
    {
      title: "Test Type",
      options: [
        "Daily Practice Paper",
        "Test Series",
        "Assignment",
        "Previous Paper",
        "Preparatory Test",
      ],
      required: true,
    },
    

    
  ];

 
  return (
    <div className="testSettings">
      <GoBack linkText={"Back to Tests"} relativeURL={"/teacher/testsBoard"} />

      <AddTestMenu type={0} />

      <section className="testSettings__header">
        <h3 className="testSettings__header__title">
          Please fill out Test details below
        </h3>
      </section>
      <section className="testSettings__dropDownRow">
        {textField1.map((item,i) => (
          <TextFieldTest 
            type={item.type}
            placeholder={item.title}
            required={item.required}
            valueinput={item.inputName}
            inputvals={inputvals}
            setinputvals={setinputvals}
            inputValues = {item.inputValues}
          />
        ))}
        {dropDownRow.map((item,i) => (
          <DropDown
            key={i}
            title={item.title}
            options={item.options}
            required={item.required}
          />
        ))}
        
        <StandardDropDown inputvals={inputvals} setinputvals={setinputvals} />
        <ExamtypeDropDown inputvals={inputvals} setinputvals={setinputvals} />
 
       
          <TextFieldTest
            type="number"
            placeholder="Exam Duration"
            required={true}
            valueinput="examDuration"
            inputvals={inputvals}
            setinputvals={setinputvals}
            inputValues = {state.examDuration}
          />
      </section>
      <section className="testSettings__subFooter">
        
        <Link
          to="/teacher/questionSettings"
          className="testSettings__subFooter__title"
          onClick = {()=>savedata(inputvals)}
        >
          Next
        </Link>
      </section>
    </div>
  );

};

TestSettings.propTypes = {
  savedata: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  test: state.test,
  error: state.error,
});
export default connect(mapStateToProps, { savedata })(TestSettings);

//
