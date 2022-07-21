import React, { useEffect, useState } from "react";
import { connect ,useSelector} from "react-redux";
import PropTypes from "prop-types";
import "./DropDown.scss";
import { getSubjects,getChapters } from "../../../actions/subject";
import { getSubjectbyid } from "../../../actions/getbyid";

const ChapterDropDown = ({
  type = "",
  chapterList,
  getSubjects,
  required,
  inputvals,setinputvals,
  subject: { subject, loading },
})=> {
  const state = useSelector((state) => state.savedata.test);
  const [currentOptions, setCurrentOptions] = useState(state.examtype || "");
  const [menuHeight, setMenuHeight] = useState(0);
  const [chainChapter, setchainChapter] = useState([]);
    const [exam_name, setexam_name] = useState(0);
    const [list, setlist] = useState([]);
    const optionChangeHandler = (value) => {
    setCurrentOptions([value])
    setinputvals({...inputvals, chapter:value})
  };

  const calculateIdealHeight = () => {
    return Math.min(32 + chainChapter.length * 37, 238);
  };

  useEffect(() => {
    // console.log(currentOptions);
  
  }, [currentOptions]);


  useEffect(() => {
    getChapters().then((data)=>{
        // console.log(data);
        const temp=data;
        
            setlist(temp)
        
          })
          getchainChapter()
        }, [inputvals]);
      
        const getchainChapter=()=>{
          console.log(inputvals.subject,"for the search of chain")
          getSubjectbyid(inputvals.subject).then((data=>{
            console.log(data.chapters)
            setchainChapter(data.chapters)
            calculateIdealHeight()
          }))
        }

  let selectedOption = [{name: "Chapters"}];
  let examType = "";
  if(currentOptions !== "" && list !== undefined){
    selectedOption = list.filter(data => data._id == currentOptions)
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
          {chainChapter&&chainChapter.map((s,i) =>
          
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
                  {/* {console.log(s)} */}
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
ChapterDropDown.propTypes = {
    getSubjects: PropTypes.func.isRequired,
    subject: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    subject: state.subject,
    error: state.error,
  });
  
  export default connect(mapStateToProps, { getSubjects })(ChapterDropDown);
  