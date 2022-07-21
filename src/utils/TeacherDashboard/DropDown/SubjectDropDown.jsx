import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./DropDown.scss";
import { getSubjects } from "../../../actions/subject";
import { getCoursebyid } from "../../../actions/getbyid";
const SubjectDropDown = ({
  
  // type = "checkbox"
  inputvals , setinputvals,
  chapterList,setChapterList,
  currentOptions2, setCurrentOptions2,
  getSubjects,subject:{subject,loading}
}) => {
  const [currentOptions, setCurrentOptions] = useState(["subjects"]);
  const [menuHeight, setMenuHeight] = useState(0);
  const [chainSubject, setchainSubject] = useState([]);

  const optionChangeHandler = (value) => {
  
    
    setChapterList(value.chapters)
    setCurrentOptions([value.name])
setCurrentOptions2([value._id])
setinputvals({...inputvals,subject:value._id})

};

  const calculateIdealHeight = () => {
    return Math.min(32 + chainSubject.length * 37, 238);
  };

  useEffect(() => {
 
    getSubjects()
    getchainSubject()
  },[inputvals]);
  const getchainSubject=()=>{
    console.log(inputvals.examtype,"for the search of chain")
    getCoursebyid(inputvals.course).then((data=>{
      console.log(data.subject)
      setchainSubject(data.subject)
      calculateIdealHeight()
    }))
  }

  return (
    <div
      className="dropDown"
      onMouseEnter={() => setMenuHeight(calculateIdealHeight())}
      onMouseLeave={() => setMenuHeight(0)}
    >
      <div
        className="dropDown__box"
        data-required={true ? "*required" : ""}
      >
        <div className="dropDown__box__text">{currentOptions}</div>
        <img
          src="/assets/images/teacher-dashboard-questions-board-down-arrow.svg"
          alt="Down"
          className="dropDown__box__image"
        />
      </div>
    
      <div className="dropDown__menu" style={{ height: `${menuHeight}px` }}>
        <div className="dropDown__menu__wrapper">
          {chainSubject&&chainSubject.map((s,i) =>
          
            true !== "checkbox" ? (
              <div
              key={i}
                onClick={() => optionChangeHandler(s)}
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
                onClick={() => optionChangeHandler(s._id)}
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
SubjectDropDown.propTypes = {
  
  getSubjects: PropTypes.func.isRequired,
  subject: PropTypes.object.isRequired,
  
}
const mapStateToProps = state =>({

  subject: state.subject,
  error: state.error
});


export default connect( mapStateToProps, { getSubjects } )(SubjectDropDown) ;
