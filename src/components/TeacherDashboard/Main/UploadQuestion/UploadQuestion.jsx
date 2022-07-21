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
import CourseDropDown from "../../../../utils/TeacherDashboard/DropDown/CourseDropDown";
import SubjectDropDown from "../../../../utils/TeacherDashboard/DropDown/SubjectDropDown";
import ExamtypeDropDown from "../../../../utils/TeacherDashboard/DropDown/ExamtypeDropDown";
import StandardDropDown from "../../../../utils/TeacherDashboard/DropDown/StandardDropDown";
import ChapterDropDown from "../../../../utils/TeacherDashboard/DropDown/ChapterDropDown";
import InputTextField from "../../../../utils/TeacherDashboard/TextField/InputTextFields";
import SubtopicDropDown from "../../../../utils/TeacherDashboard/DropDown/SubtopicDropDown";
import TopicDropDown from "../../../../utils/TeacherDashboard/DropDown/TopicDropDown";
import { bulkupload,uploadPdf } from "../../../../actions/questions";
import Standard2 from "../../../../utils/TeacherDashboard/DropDown/Standard2";
import Examtype2 from "../../../../utils/TeacherDashboard/DropDown/Examtype2";
import {savedata} from "../../../../actions/savedata"
const AddQuestion = ({ createquestion,savedata, teacher: { questions, loading } }) => {
  const [ButtonDeactive, setButtonDeactive] = useState(0);
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
  subTopic:"",
    filePath:"",
    chapter: "",
    topic: "",
    time: 0,
    examType: "",
course:"",
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
    subTopic,
    filePath,
    subject,
    standard,
    chapter,
    examType,
    topic,
    time,
    marks,
    negativeMarks,
    previousYear,
    previousmonth,
  } = inputvals;
  const handlepath=(e)=>{
    console.log(e.target.files[0].mozFullPath,e,e.target.files[0])
    // setinputvals({...inputvals, filePath:e.target.files[0]}) 
    const formData = new FormData();
    formData.append("media", e.target.files[0]);


        // console.log(data.fileUrl);
        // setCount(2);

        // const finalData = JSON.stringify(data.fileUrl);
        // setPdfLink((data.fileUrl));
      
        setinputvals({...inputvals, filePath:e.target.files[0]}) 
  
  }
  
  const handleSubmit =()=>{
    console.log(subject,standard,topic,subTopic,chapter,examType)
    if(subject!=""&&standard!=""&&topic!=""&&subTopic!=""&&chapter!=""&&examType!=""){
   
    // console.log(inputvals)
    let formFile = new FormData();
    formFile.append('filePath',filePath)
    formFile.append('subject',subject)
    formFile.append('standard',standard)
    formFile.append('topic',topic)
    formFile.append('subTopic',subTopic)
    formFile.append('chapter',chapter)
    formFile.append('examType',examType)
  
    // console.log(data)  
    bulkupload(formFile).then((data)=>{
      console.log(data)
      savedata(data)
      localStorage.setItem('questions',JSON.stringify(data),
      )
    })
    alert("upload successfull")
  }else{
    alert("fill all the fields")
  }
  }
  const [radio, setRadio] = useState("No");
  // const [questionType, setQuestionType] = useState("Single Option Correct");
  const [currentOptions2, setCurrentOptions2] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [topics, settopics] = useState([]);
 
  const Api = process.env.REACT_APP_API;

  const dropDownRow = [
    {
      title: "Question Type",
      valueinput: "type",
      required: true,
      options: [
        "multiple choice",
        "integer",
        "fill_ups",
        "true_false",
        "comprehension"
      ],
    },
    {
      title: "Difficulty Level",
      required: true,
      valueinput: "difficulty",
      options: ["Easy", "Medium", "Hard"],
    },
  ];
  const radioHandler = () => {
    setRadio(radio === "Yes" ? "No" : "Yes");
  };

  return (
    <div className="addQuestion">
      <GoBack
        linkText={"Back to Question Bank"}
        relativeURL={"/teacher/questionsBoard"}
      />
   
      <section className="addQuestion__header">
        <h3 className="addQuestion__header__title">
          Uploading Quesions In Bulk
        </h3>
      </section>
      <section className="addQuestion__dropDownRow">
        <Examtype2 inputvals={inputvals} setinputvals={setinputvals} />
        <Standard2 inputvals={inputvals} setinputvals={setinputvals} />
        <CourseDropDown inputvals={inputvals} setinputvals={setinputvals}/>
        <SubjectDropDown
          currentOptions2={currentOptions2}
          setCurrentOptions2={setCurrentOptions2}
          setChapterList={setChapterList}
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        />
        {console.log(chapterList)}
        <ChapterDropDown
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        />
<TopicDropDown inputvals={inputvals} setinputvals={setinputvals} />
<SubtopicDropDown 
inputvals={inputvals}
setinputvals={setinputvals}
/>


        {console.log(currentOptions2, chapter)}
        {/* {dropDownRow.map((item, i) => (
          <DropDown
            key={i}
            title={item.title}
            valueinput={item.valueinput}
            options={item.options}
            required={item.required}
            inputvals={inputvals}
            setinputvals={setinputvals}
          />
        ))} */}




     
        <label className="btn btn-primary design-button">
                          Pdf Upload
                          <input
                            onChange={handlepath}
                            type="file"
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            hidden
                          ></input>
                        </label>

                       
    



      </section>
      <section className="addQuestion__subFooter">
      <button className="design-button" onClick={()=>handleSubmit()}>
                          Upload the Docs
                        </button>
        {/* {console.log(inputvals)} */}
      </section>
        <Link
          to="/teacher/multipleQuestions"
          className="addQuestion__subFooter__title"
        >
          Next
        </Link>
    </div>
  );
};

AddQuestion.propTypes = {
  createQuestions: PropTypes.func.isRequired,
  savedata:PropTypes.func.isRequired,
  teacher: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  teacher: state.teacher,
  error: state.error,
});

export default connect(mapStateToProps, { createquestion,savedata })(AddQuestion);