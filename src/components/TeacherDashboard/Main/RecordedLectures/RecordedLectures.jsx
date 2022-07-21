import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { liveLecturesData } from "../../../../constants/TeacherDashboard/LiveLectures/liveLectures";
import GoBack from "../../../../utils/Common/GoBack/GoBack";import TableCompRecordedLectures from "../../../../utils/TeacherDashboard/TableCompRecordedLectures/TableCompRecordedLectures";
import { connect } from 'react-redux';
import { recordedlistSearch } from "../../../../actions/lecture";
import PropTypes from 'prop-types';
import { getlectures,getlecturesbyid } from "../../../../actions/lecture";
import "./RecordedLectures.scss";

import DropDownSmall from "../../../../utils/TeacherDashboard/DropDownSmall/DropDownSmall";
import TableCompLiveLectures from "../../../../utils/TeacherDashboard/TableCompLiveLectures/TableCompLiveLectures";


const RecordedLectures = ({getlecturesbyid,lecture:{lecture,loading} }) => {
  const [searchInput, setSearchInput] = useState("");
  const [load, setload] = useState(false); 
const [reload, setreload] = useState(0);
  const [filterlecture, setfilterlecture] = useState([]);

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    recordedlistSearch(e.target.value).then((data)=>{

      console.log(data,"tfyuy")
      setfilterlecture(data)
      setreload(1)

    })
  };

  const token=JSON.parse(localStorage.getItem("token"))
  console.log(token)

  useEffect(() => {
    // console.log(searchInput);
    // Set table as per search input.
    console.log('hy getting questions');
    getlecturesbyid("RECORDED",token)
 
  }, [load]);

  return (
    <div className="recordedLectures">
      <GoBack linkText={""} relativeURL={"/teacher/dashboard"} />
      <section className="recordedLectures__header">
        <h4 className="recordedLectures__header__title">Recorded Lectures</h4>
      </section>

      <section className="recordedLectures__searchAndAdd">
        <div className="recordedLectures__searchAndAdd__search">
          <img
            className="recordedLectures__searchAndAdd__search__image"
            alt="Search"
            src="/assets/images/teacher-dashboard-questions-board-search.svg"
          />
          <input
            className="recordedLectures__searchAndAdd__search__input"
            type={"text"}
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => searchHandler(e)}
          />
        </div>
        <Link
          to={"/teacher/addrecordedLecture"}
          className="liveLectures__searchAndAdd__addQuestion"
        >
          <img
            className="liveLectures__searchAndAdd__addQuestion__image"
            alt="Add"
            src="/assets/images/teacher-dashboard-questions-board-add.svg"
          />
          <div className="liveLectures__searchAndAdd__addQuestion__text">
            {"Create Lecture"}
          </div>
        </Link>
      </section>
     
{/* {console.log(lecture)} */}
      <TableCompRecordedLectures questionsBoardData={liveLecturesData} lecture={lecture} setfilterlecture={setfilterlecture} filterlecture={filterlecture } setreload={setreload} reload={reload} setload={setload}/>
    </div>
  );
};



RecordedLectures.propTypes = {
  getlecturesbyid: PropTypes.func.isRequired,
  lecture: PropTypes.object.isRequired,
  error:PropTypes.object.isRequired,
  



}
const mapStateToProps = state =>({

  lecture: state.lecture,
  error: state.error,

  
  subject: state.subject,
  
});

export default connect( mapStateToProps, { getlecturesbyid} )(RecordedLectures);
