import React, { useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { createlecture } from "../../../../actions/lecture";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import AddTestMenu from "../../../../utils/TeacherDashboard/AddTestMenu/AddTestMenu";
import { useAuth0 } from '@auth0/auth0-react';
import DropDown from "../../../../utils/TeacherDashboard/DropDown/DropDown";
import TextArea from "../../../../utils/TeacherDashboard/TextArea/TextArea";
import InputTextField from "../../../../utils/TeacherDashboard/TextField/InputTextFields";
import TextField from "../../../../utils/TeacherDashboard/TextField/TextField";
import { connect, useStore } from "react-redux";
import PropTypes from "prop-types";
import { liveScheduling, googleaccess, tokenaccess, saveYoutubedata } from "../../../../actions/youtube"
import "./AddLiveLecture.scss";
import { useState } from "react";
import { withCookies } from "react-cookie";
import Cookies from 'js-cookie';
import InputTextArea from "../../../../utils/TeacherDashboard/TextArea/InputTextArea";
import CourseDropDown from "../../../../utils/TeacherDashboard/DropDown/CourseDropDown";
import ExamtypeDropDown from "../../../../utils/TeacherDashboard/DropDown/ExamtypeDropDown";
import StandardDropDown from "../../../../utils/TeacherDashboard/DropDown/StandardDropDown";
import SubjectDropDown from "../../../../utils/TeacherDashboard/DropDown/SubjectDropDown";
import ChapterDropDown from "../../../../utils/TeacherDashboard/DropDown/ChapterDropDown";
import ProceedDropDown from "../../../../utils/TeacherDashboard/DropDown/ProceedDropDown";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

// import { useHistory } from "react-router-dom";

const AddLiveLecture = ({ createlecture, saveYoutubedata, liveScheduling, googleaccess, tokenaccess, youtube: { youtube, youtubeId, token, loading } }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const data = bindActionCreators(tokenaccess, dispatch);
  // const history = useHistory();
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');
  console.log(code);
  const bearerToken = ""

  const authtoken = JSON.parse(localStorage.getItem("token"))
  // console.log(token)
  useEffect(() => {

    googleaccess();
    if (code != null) {
      console.log("bhagwaan tu hai",code)

      tokenaccess(code, JSON.parse(localStorage.getItem('inputvalues')))
      alert( "lecture scheduled successfully")
      // window.location.href = "https://teacher.easyhaionline.com/teacher/dashboard";
      
      bearerToken = token.access_token
      // liveScheduling(bearerToken,token)
    }
    // console.log(bearerToken)
    // liveScheduling(bearerToken)
  }, []);


  const gettoken = (code) => {
    // console.log(code);  

    // createtoken(code)
    tokenaccess(code, inputvals)
    // console.log(token)
    // liveScheduling()
    // if(code!="null"){
    //   tokenaccess(code)
    // }

  }


  // console.log(code);
  const textField1 = [
    //Text Areas

    {
      valueinput: "title",
      title: "Add Lecture Title",
      required: true,
      maxHeight: "67px",
    },
    {
      valueinput: "description",
      title: "Add description here",
      required: true,
      maxHeight: "167px",
    },
    {
      valueinput: "topic",
      title: "Add topic here",
      required: true,
      maxHeight: "67px",
    },
  ];
  const { loginWithPopup } = useAuth0();

  const state = useSelector((state) => state.savedata.test);
  // console.log(state);
  const dispatch = useDispatch();
  const data = bindActionCreators(saveYoutubedata, dispatch);
  // console.log(youtubeId.contentDetails.monitorStream.embedHtml.slice(68,79))
  const handleSave = () => {
    // loginWithPopup()
    // console.log(inputvals)
    if(inputvals.subject!=""&&inputvals.standard!=""&&inputvals.topic!=""&&inputvals.chapter!=""&&inputvals.examType!=""){
    const data = {

      "title": inputvals.title,

      "description": inputvals.description,
      "type": inputvals.type,
      "standard": inputvals.standard,
      "subject": inputvals.subject,
      "chapter": inputvals.chapter,
      "examtype": inputvals.examtype,
      "topic": inputvals.topic,
      "startingtime": inputvals.startingtime.split("-").reverse().join("-"),
      "endingtime": inputvals.endingtime.split("-").reverse().join("-"),
      "startingdate": inputvals.startingdate,
      "endingdate": inputvals.endingdate,
"course":inputvals.course,
      // "time":inputvals.time,
      "duration": inputvals.duration,
    };
    // console.log(inputvals.chapter)
    // console.log(data)
    localStorage.setItem('inputvalues', JSON.stringify(data));
    // saveYoutubedata(inputvals);
    window.location.href = `${youtube}`
    // {code=!"null"?tokenaccess(code):""}






    // history.push('https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000&response_type=code&client_id=596027896349-0mhqktvhfcpp7438jg01et6vuhtjrv22.apps.googleusercontent.com')
    // googleaccess(inputvals)

    // createlecture(inputvals);
  }else{
    alert("fill all details")
  }
  } 
  // function CreateLectureZoom(data){
  //   axios
  //   .post(`https://api.pariksha247.com/api/lecture`, data)
  //   .then((response) => {
  //     console.log(response, "lecture_created_success")

  //   })
  //   .catch((err) => console.error(err));
  // }

  function handleZoom() {

    let data1 = {

      "title": inputvals.title,
"filter":inputvals.filter,
      "description": inputvals.description,
      "type": inputvals.type,
      "standard": inputvals.standard,
      "subject": inputvals.subject,
      "chapter": inputvals.chapter,
      "examtype": inputvals.examtype,
      "topic": inputvals.topic,
      "startingtime": inputvals.startingtime,
      "endingtime": inputvals.endingtime,
      "startingdate": inputvals.startingdate,
      "endingdate": inputvals.endingdate,
      // "time":inputvals.time,
      "course":inputvals.course,
      "duration": inputvals.duration,
    };

    const datazoom = {
      email: "easyhaionline2021@gmail.com",
    };
    axios
      .post(`https://api.pariksha247.com/api/zoom/meeting`, datazoom)
      .then((response) => {
        // console.log(response.data.join_url)
        let URL =
          response.data.join_url;


          data1.zoomDetials = {
            id: response.data.zoom_response.id,
            password: response.data.zoom_response.password
          };
          console.log(data1, "data-zoom");
          // console.log("token", JSON.parse(localStorage.getItem("token")));
          createlecture(data1, JSON.parse(localStorage.getItem("token")));

          // window.location.href = "https://teacher.easyhaionline.com/teacher/dashboard";
      })
      .catch((err) => console.error(err));

  }

  
  // const liveLectures = {
  //   {
  //     "name":"dj", "link":"link", "standard":"6221b64edb949b3858f811e7", "subject":"6221bc6fdb949b3858f811fa", "chapter":"objectid", "topic":"topic", "practiceTests":["Objectid"], "type":"LIVE" 
  //  }
  // }

  const textField2 = [
    {

      valueinput: "duration",
      title: "Duration",
      inputtype: "text",
      required: true,
    },
    {

      valueinput: "startingdate",
      title: "Choose startingDate",
      inputtype: "date",
      required: true,
    },
    {
      valueinput: "startingtime",
      title: "Select starting Time",
      required: true,
      inputtype: "time",
    },
    {

      valueinput: "endingdate",
      title: "Choose endingDate",
      inputtype: "date",
      required: true,
    },
    {
      valueinput: "endingtime",
      title: "Select ending Time",
      required: true,
      inputtype: "time",
    }

  ];

  const [currentOptions2, setCurrentOptions2] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [proceed, setproceed] = useState("");
  const [inputvals, setinputvals] = useState({
    title: "",
filter:"",
    description: "",
    type: "",
    standard: "",
    course:"",
    subject: "",
    chapter: "",
    topic: "",
    examtype: "",
    startingtime: 0,
    endingtime: 0,
    startingdate: 0,
    endingdate: 0,
    time: 0,
    duration: 0,
    //   type: "SINGLE-CORRECT",
    //   subject: "6221bc6fdb949b3858f811fa",
    //   chapter: "6221bc6fdb949b3858f811fb",
    //   topic: "cdcsdccds",
    //   time: 70,
    //   marks: 77,
    //   negativeMarks: -7,
    //   previousYear
  });

  const { title,
    description,
    type,
    standard,
    subject,
    chapter,
    topic,
    startingtime,
    endingtime,
    startingdate,
    endingdate,
    time,
    filter,
    examtype,
    duration } = inputvals
  // console.log(lectures);
  // console.log(youtube);
  const dropDownRow = [



    {
      valueinput: "type",
      title: "Select lecture type",
      options: ['LIVE'],
      required: true,
    },
    {
      valueinput: "filter",
      title: "Select stream filter",
      options: ['LIVE',"ZOOM"],
      required: true,
    }



  ];

  return (
    <div className="addLiveLecture">
      <GoBack
        linkText={"Back to Live Lectures"}
        relativeURL={"/teacher/liveLectures"}
      />
      {/* <InputTextField/> */}

      <section className="addLiveLecture__header">
        <h3 className="addLiveLecture__header__title">Add a Lecture</h3>
      </section>

      {textField1.map((item) => (
        <InputTextArea
          type={item.inputtype}
          valueinput={item.valueinput}
          maxHeight={item.maxHeight}
          placeholder={item.title}
          required={item.required} inputvals={inputvals}
          setinputvals={setinputvals}
        />
      ))}



      {/* <SubjectDropDown
          currentOptions2={currentOptions2}
          setCurrentOptions2={setCurrentOptions2}
          setChapterList={setChapterList}
          chapterList={chapterList}
          inputvals={inputvals}
          setinputvals={setinputvals}
        /> */}
      <section className="addLiveLecture__dropDownRow">
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
        <ExamtypeDropDown inputvals={inputvals} setinputvals={setinputvals} />
        <StandardDropDown inputvals={inputvals} setinputvals={setinputvals} />
        <CourseDropDown  inputvals={inputvals} setinputvals={setinputvals}/>
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
          required="true"
        />


        {textField2.map((item, i) => (
          <InputTextField
            key={i}
            type={item.inputtype}

            placeholder={item.title}
            valueinput={item.valueinput}
            required={item.required}
            inputvals={inputvals}
            setinputvals={setinputvals}
          />
        ))}
      </section>
      {console.log(inputvals)}


      <section className="addLiveLecture__subFooter">
        {/* <ProceedDropDown
          title="Select Proceding"
          valueinput="proceed"
          options={['Zoom', 'Youtube']}
          required={true}
          proceed={proceed}
          setproceed={setproceed}
        /> */}


        {/* <Link className="addLiveLecture__subFooter__cta" to={youtube}>
        Schedule Lecture
        </Link> */}
        {/* {console.log(inputvals)} */}
        <button className="addLiveLecture__subFooter__cta" onClick={() => filter == "ZOOM" ? handleZoom() : handleSave()}>Schedule Lecture </button>




      </section>
    </div>
  );



};

AddLiveLecture.propTypes = {
  createlecture: PropTypes.func.isRequired,
  saveYoutubedata: PropTypes.func.isRequired,
  tokenaccess: PropTypes.func.isRequired,
  liveScheduling: PropTypes.func.isRequired,
  googleaccess: PropTypes.func.isRequired,

  youtube: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  youtube: state.youtube,
  error: state.error,
});


export default connect(mapStateToProps, { liveScheduling, saveYoutubedata, createlecture, googleaccess, tokenaccess })(AddLiveLecture);
