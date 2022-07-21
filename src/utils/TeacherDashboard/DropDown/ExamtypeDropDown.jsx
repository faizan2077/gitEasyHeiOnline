import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import "./DropDown.scss";
import { getSubjects } from "../../../actions/subject";
import { getExams } from "../../../actions/exams";


const ExamDropDown = ({
  
  // type = "checkbox",
inputvals,setinputvals,getExams,exams:{exams,loading}}) => {
  const state = useSelector((state) => state.savedata.test);
  const [currentOptions, setCurrentOptions] = useState(state.examtype || "");
  const [menuHeight, setMenuHeight] = useState(0);
    const [exam_name, setexam_name] = useState(0);
  const optionChangeHandler = (value) => {
    setCurrentOptions([value])
    setinputvals({...inputvals, examtype:value})
    console.log(inputvals)
  };

  const calculateIdealHeight = () => {
    return Math.min(32 + exams.length * 37, 238);
  };

  useEffect(() => {
    // console.log(currentOptions);
  
  }, [currentOptions]);

  useEffect(() => {
 
    getExams()
  },[]);

  let selectedOption = [{name: "Exam-Type"}];
  let examType = "";
  if(currentOptions !== "" && exams !== undefined){
    selectedOption = exams.filter(data => data._id == currentOptions)
  }
  examType = selectedOption[0].name;

  return (
    <div
      className="dropDown"
      onMouseEnter={() => setMenuHeight(calculateIdealHeight())}
      onMouseLeave={() => setMenuHeight(0)}
    >
      <div
        className="dropDown__box"
        // data-required={true ? "*required" : ""}
      >
        <div className="dropDown__box__text"> {examType}</div>
        <img
          src="/assets/images/teacher-dashboard-questions-board-down-arrow.svg"
          alt="Down"
          className="dropDown__box__image"
        />
      </div>
      {/* {console.log(subject)}       */}
      <div className="dropDown__menu" style={{ height: `${menuHeight}px` }}>
        <div className="dropDown__menu__wrapper">
          {exams&&exams.map((s,i) =>
          
            true !== "checkbox" ? (
              <div
              key={i}
                onClick={() => optionChangeHandler(s._id)}
                // title={item}
                className={
                  currentOptions[0] === s.name
                    ? "dropDown__menu__wrapper__item dropDown__menu__wrapper__item--selected"
                    : "dropDown__menu__wrapper__item"
                }
              >
                
                {s.name}
              </div>
            ) : (
              <div
              key={i}
                onClick={() => optionChangeHandler(s.name)}
                className={"dropDown__menu__wrapper__item"}
              >
                <span
                  className={
                    currentOptions.find((i) => i === s.name)
                      ? "dropDown__menu__wrapper__item__checkMark dropDown__menu__wrapper__item__checkMark--checked"
                      : "dropDown__menu__wrapper__item__checkMark"
                  }
                ></span>
                <div className="dropDown__menu__wrapper__item__checkbox">
                  {s.name}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      
    </div>
  );
};
ExamDropDown.propTypes = {
  
    getExams: PropTypes.func.isRequired,
  exams: PropTypes.object.isRequired,
  
}
const mapStateToProps = state =>({

  exams: state.exams,
  error: state.error
});


export default connect( mapStateToProps, { getExams } )(ExamDropDown) ;
