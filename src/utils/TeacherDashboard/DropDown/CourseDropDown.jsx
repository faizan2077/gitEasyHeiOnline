import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./DropDown.scss";
import { getstandards } from "../../../actions/standard";
import { getexamtypebyid } from "../../../actions/getbyid";
import { getstandardbyid } from "../../../actions/getbyid";

const CourseDropDown = ({
  
  // type = "checkbox",
inputvals,setinputvals,
 getstandards,standard:{standard,loading}
}) => {
  const [currentOptions, setCurrentOptions] = useState(['Courses']);
  const [menuHeight, setMenuHeight] = useState(0);
    const [chainStandard, setchainStandard] = useState([]);
  const optionChangeHandler = (value) => {
 setCurrentOptions([value.name]);

 setinputvals({...inputvals, course:value._id})
  };

  const calculateIdealHeight = () => {
    return Math.min(32 + chainStandard.length * 37, 238);
  };


  useEffect(() => {
    getstandards()
    getchainCourse()
    // getExams()
  },[inputvals]);
  const getchainCourse=()=>{
    // console.log(inputvals.examtype,"for the search of chain")
    getstandardbyid(inputvals.standard).then((data=>{
      console.log(data.course)
      setchainStandard(data.course)
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
          {chainStandard&&chainStandard.map((s,i) =>
          
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
CourseDropDown.propTypes = {
    // getExams: PropTypes.func.isRequired,
    getstandards:PropTypes.func.isRequired,
  standard: PropTypes.object.isRequired,
  
}
const mapStateToProps = state =>({
  standard: state.standard,
  error: state.error
});

export default connect( mapStateToProps, {  getstandards } )(CourseDropDown) ;
