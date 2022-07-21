import React, { useState } from "react";

import GoBack from "../../../../../utils/Common/GoBack/GoBack";
import AddQuestionMenu from "../../../../../utils/TeacherDashboard/AddQuestionMenu/AddQuestionMenu";
import OptionsMaker from "../../../../../utils/TeacherDashboard/OptionsMaker/OptionsMaker";
import TextEditor from "../../../../../utils/TeacherDashboard/TextEditor/TextEditor";

import "./SingleOption.scss";

const SingleOption = () => {
  const [questionData, setQuestionData] = useState({
    options: ["", "", "", ""],
    correctOptions: [],
    solution: "",
    hint: "",
  });

  const [inputvals, setinputvals] = useState({
    statement: "",
    image: "",
    solution: "",
    hint: "",
    difficulty: "",
    options: "",
    correctOptions: [],
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

  const optionsChangeHandler = (val) => {
    setQuestionData({ ...questionData, options: val });
setinputvals({...inputvals,options:val})
  };
  const correctOptionsChangeHandler = (val) => {
    setQuestionData({ ...questionData, correctOptions: val });
  setinputvals({...inputvals,correctOptions:val})
  };

  const hintChangeHandler = (val) => {
    setQuestionData({ ...questionData, hint: val });
  setinputvals({...inputvals,hint:val})
  };
  const solutionChangeHandler = (val) => {
    setQuestionData({ ...questionData, solution: val });
    setinputvals({...inputvals,solution:val})
  };

  console.log(questionData);
console.log(inputvals);
  return (
    <div className="singleOption">
      <GoBack
        linkText={"Back to Question Bank"}
        relativeURL={"/teacher/questionsBoard"}
      />
      <AddQuestionMenu type={1} />
      <TextEditor title="Add a Question*"  inputvals={inputvals} setinputvals={setinputvals}/>
      <OptionsMaker
        title={"Add your Options below (Single Option)*"}
        hint={questionData.hint}
        hintChangeHandler={hintChangeHandler}
        solution={questionData.solution}
        solutionChangeHandler={solutionChangeHandler}
        options={questionData.options}
        correctOptions={questionData.correctOptions}
        optionsChangeHandler={optionsChangeHandler}
        correctOptionsChangeHandler={correctOptionsChangeHandler}
      />
    </div>
  );
};

export default SingleOption;
