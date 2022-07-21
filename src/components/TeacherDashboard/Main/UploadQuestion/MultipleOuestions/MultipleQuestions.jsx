import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GoBack from "../../../../../utils/Common/GoBack/GoBack";
import AddQuestionMenu from "../../../../../utils/TeacherDashboard/AddQuestionMenu/AddQuestionMenu";
import OptionsMaker from "../../../../../utils/TeacherDashboard/OptionsMaker/OptionsMaker";
import MutipleQuestionOptionMaker from "../../../../../utils/TeacherDashboard/OptionsMaker/MutipleQuestionOptionMaker";
import Comprehention from "../../../../../utils/TeacherDashboard/TextEditor/Comprehention";
import TextEditorQuestion from "../../../../../utils/TeacherDashboard/TextEditor/TextEditorQuestion";
import TrueFalse from "../../../../../utils/TeacherDashboard/OptionsMaker/TrueFalse";
import Fillups from "../../../../../utils/TeacherDashboard/OptionsMaker/Fillups";
import "./SingleOption.scss";
import { Parser } from "html-to-react";
import TextEditorQuestionEditable from "../../../../../utils/TeacherDashboard/TextEditor/TextEditorQuestionEditable";
import { updatequestion } from "../../../../../actions/questions";
import Comprehension from "./Comprehension";
const MultipleQuestions = () => {
  // const questions = useSelector(state=>state.savedata.test)
  const questions = JSON.parse(localStorage.getItem("questions"));
  const [Editable, setEditable] = useState([]);
  const [Editableloop, setEditableloop] = useState([]);
  const [questionbank, setquestionbank] = useState(questions);
  const [fullcomprehenstion, setfullcomprehenstion] = useState(0  );
  const [comprehention, setcomprehention] = useState(0);
  useEffect(() => {
    questionbank.map((item)=>{
    //  console.log(item)


  
     if(item.quesType == "comprehension"){
       item.subQuestions.map((data)=>{
        let temp =Editableloop
        temp.push(0)
        // console.log(temp)
       
        setEditableloop(temp)
       })
     }else{
      let temp =Editable
      temp.push(0)
      // console.log(temp)
      setEditable(temp)     }
   })
  }, [Editable.length!=undefined]);
  const [questionData, setQuestionData] = useState({
    options: ["", "", "", ""],
    correctOptions: [],
    solution: "",
    hint: "",
  });
  const [multiplequestion, setmultiplequestion] = useState({
    options: ["", "", "", "", ""],
    correctOptions: [],
    solution: "",
    hint: "",
  });

  const [truefalsequestion, settruefalsequestion] = useState({
    options: ["True", "False"],
    correctOptions: [],
    solution: "",
    hint: "",
  });

  const [fillupquestion, setfillupquestion] = useState({
    options: [],
    correctOptions: [],
    solution: "",
    hint: "",
  });
  const [para, setpara] = useState("");
  // console.log("questions:", questions);
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


  const optionsChangeHandler2 = (val) => {
    // console.log("this is question data",multiplequestion)
    setmultiplequestion({ ...multiplequestion, options: val });
    setinputvals({ ...inputvals, options: val });
  };
  const correctOptionsChangeHandler2 = (val) => {
    setmultiplequestion({ ...multiplequestion, correctOptions: val });
    setinputvals({ ...inputvals, correctOptions: val });
  };

  const hintChangeHandler2 = (val) => {
    setmultiplequestion({ ...multiplequestion, hint: val });
    setinputvals({ ...inputvals, hint: val });
  };
  const solutionChangeHandler2 = (val) => {
    setmultiplequestion({ ...multiplequestion, solution: val });
    setinputvals({ ...inputvals, solution: val });
  };
  // console.log(multiplequestion);
  // console.log("this is Editable",Editable,Editableloop);
const handleSubmit =(data2,index)=>{
  data2.question=para
  // console.log(para)
  // console.log(data2)
  updatequestion(data2).then((data=>{
    const predata=[...questionbank]
    predata[index]=data
  
    // console.log("the updated questions",questionbank,predata)
  // setquestionbank(predata)
  localStorage.setItem("questions",JSON.stringify(predata))
  
   
    setcomprehention(0)
    // console.log(data,temp)   
  }))
  alert('updated')
    
}
  return (
    <div className="singleOption">
      <GoBack
        linkText={"Back Question Bank"}
        relativeURL={"/teacher/questionsBoard"}
      />

      {/* <AddQuestionMenu type={1} /> */}
      {questionbank &&
        questionbank.map((item, index) => {
          //   console.log(item)
          if (item.quesType == "multiple_choice") {
            //   console.log("these if",item.quesType)
            const singlequestion = item.subQuestions[0];
            //   setmultiplequestion({ ...multiplequestion, hint: val });
            //   options: ["", "", "", ""],
            //   correctOptions: [],
            //   solution: "",
            //   hint: "",
         
            
// setEditable([...Editable,{value:1}])
            return (
              <div key={index}>
                {/* <TextEditorQuestion
                  title={item.quesType}
                  question={JSON.stringify(singlequestion.question.quesDesc)}
                  image={singlequestion.question.photo!=undefined?singlequestion.question.photo:""}
                  key={index}
                  inputvals={inputvals}
                  setinputvals={setinputvals}
                  Editable={Editable}
                  setEditable={setEditable}
                  
                /> */}
                <MutipleQuestionOptionMaker
                  title={"Add your Options below (Single Option)*"}
                  item={item}
                  answer={
                    singlequestion.answer
                      ? singlequestion.answer.ansDesc
                      : "no Answer"
                  }
                  hintChangeHandler={hintChangeHandler2}
                  solution={
                    singlequestion.solution
                      ? singlequestion.solution.solnDesc
                      : "no Solution"
                  }
                  aphoto={
                    singlequestion.answer&&singlequestion.answer.photo!=undefined
                      ? singlequestion.answer.photo
                      : "no photo"
                  }
                  negativeMarks={singlequestion.negativeMarks}
                  positiveMarks={singlequestion.positiveMarks}
                  solutionChangeHandler={solutionChangeHandler2}
                  options={singlequestion.options}
                  correctOptions={multiplequestion.correctOptions}
                  optionsChangeHandler={optionsChangeHandler2}
                  correctOptionsChangeHandler={correctOptionsChangeHandler2}
                  question={JSON.stringify(singlequestion.question.quesDesc)}
                  image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
                  Editable={Editable}
                  setEditable={setEditable}
                  questionbank={questionbank}
                  setquestionbank={setquestionbank}
                  index={index}
                />
              </div>
            );
          } else if (item.quesType == "true_false") {
            const singlequestion = item.subQuestions[0];
      //  console.log(item)
            return (
              <div key={index}>
               
                <MutipleQuestionOptionMaker
                  title={"Tick the Correct"}
          item={item}
          answer={
            singlequestion.answer
              ? singlequestion.answer.ansDesc
              : "no Answer"
          }
          hintChangeHandler={hintChangeHandler2}
          solution={
            singlequestion.solution
              ? singlequestion.solution.solnDesc
              : "no Solution"
          }
          aphoto={
            singlequestion.answer&&singlequestion.answer.photo!=undefined
              ? singlequestion.answer.photo
              : "no photo"
          }
          negativeMarks={singlequestion.negativeMarks}
          positiveMarks={singlequestion.positiveMarks}
          solutionChangeHandler={solutionChangeHandler2}
          options={singlequestion.options}
          correctOptions={multiplequestion.correctOptions}
          optionsChangeHandler={optionsChangeHandler2}
          correctOptionsChangeHandler={correctOptionsChangeHandler2}
          question={JSON.stringify(singlequestion.question.quesDesc)}
          image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
          Editable={Editable}
          setEditable={setEditable}
          index={index}
          questionbank={questionbank}
                  setquestionbank={setquestionbank}
               />
              </div>
            );
          } else if (item.quesType == "fill_ups") {
            const singlequestion = item.subQuestions[0];
            //   setmultiplequestion({ ...multiplequestion, hint: val });
            //   options: ["", "", "", ""],
            //   correctOptions: [],
            //   solution: "",
            //   hint: "",
            // const answer=
            // console.log(item)
            // console.log("question:",singlequestion,singlequestion.solution,singlequestion.options)

            return (
              <div key={index}>
                

                <MutipleQuestionOptionMaker
                  title={"Blanks"}
                  item={item}
                  answer={
                    singlequestion.answer
                      ? singlequestion.answer.ansDesc
                      : "no Answer"
                  }
                  hintChangeHandler={hintChangeHandler2}
                  solution={
                    singlequestion.solution
                      ? singlequestion.solution.solnDesc
                      : "no Solution"
                  }
                  aphoto={
                    singlequestion.answer&&singlequestion.answer.photo!=undefined
                      ? singlequestion.answer.photo
                      : "no photo"
                  }
                  negativeMarks={singlequestion.negativeMarks}
                  positiveMarks={singlequestion.positiveMarks}
                  solutionChangeHandler={solutionChangeHandler2}
                  options={singlequestion.options}
                  correctOptions={multiplequestion.correctOptions}
                  optionsChangeHandler={optionsChangeHandler2}
                  correctOptionsChangeHandler={correctOptionsChangeHandler2}
                  question={JSON.stringify(singlequestion.question.quesDesc)}
                  image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
                  Editable={Editable}
                  setEditable={setEditable}
                  questionbank={questionbank}
                  setquestionbank={setquestionbank}
                  index={index}
               />
              </div>
            );
          } else if (item.quesType == "integer") {
            const singlequestion = item.subQuestions[0];
          

            return (
              <div key={index}>
                

                <MutipleQuestionOptionMaker
                  title={" "}
          item={item}
          answer={
            singlequestion.answer
              ? singlequestion.answer.ansDesc
              : "no Answer"
          }
          hintChangeHandler={hintChangeHandler2}
          solution={
            singlequestion.solution
              ? singlequestion.solution.solnDesc
              : "no Solution"
          }
          aphoto={
            singlequestion.answer&&singlequestion.answer.photo!=undefined
              ? singlequestion.answer.photo
              : "no photo"
          }
          negativeMarks={singlequestion.negativeMarks}
          positiveMarks={singlequestion.positiveMarks}
          solutionChangeHandler={solutionChangeHandler2}
          options={singlequestion.options}
          correctOptions={multiplequestion.correctOptions}
          optionsChangeHandler={optionsChangeHandler2}
          correctOptionsChangeHandler={correctOptionsChangeHandler2}
          question={JSON.stringify(singlequestion.question.quesDesc)}
          image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
          Editable={Editable}
          setEditable={setEditable}

          questionbank={questionbank}
                  setquestionbank={setquestionbank}
          index={index}
               />
              </div>
            );
          } else if (item.quesType == "comprehension") {
            const singlequestion = item.subQuestions;
        const fullquest=item
            return (
              <Comprehension singlequestion={item.subQuestions} 
              fullquest={item} 
              item={item}
              questionbank={questionbank}
              setquestionbank={setquestionbank}
              Editableloop={Editableloop}
              setEditableloop={setEditableloop}
              optionsChangeHandler2={optionsChangeHandler2}
              correctOptionsChangeHandler2={correctOptionsChangeHandler2}
              multiplequestion={multiplequestion}
              solutionChangeHandler2={solutionChangeHandler2}
              hintChangeHandler2={hintChangeHandler2}
              index={index}
              />
            );
         
        
        
        
          
         } 

         
        })}
    </div>
  );
};

export default MultipleQuestions;
