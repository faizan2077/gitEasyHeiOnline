import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { liveLecturesData } from "../../../../constants/TeacherDashboard/LiveLectures/liveLectures";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import DropDownSmall from "../../../../utils/TeacherDashboard/DropDownSmall/DropDownSmall";
import TableCompLiveLectures from "../../../../utils/TeacherDashboard/TableCompLiveLectures/TableCompLiveLectures";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import "./LiveLectures.scss";
import { getlectures,getlecturesbyid, listSearch } from "../../../../actions/lecture";

const LiveLectures = ({getlecturesbyid,lecture:{lecture,loading} }) => {
  const [load, setload] = useState(false); 
  const [searchInput, setSearchInput] = useState("");
  const [filterlecture, setfilterlecture] = useState([]);
  const [reload, setreload] = useState(0);

  const dropDownRow = [
    {
      title: "Subject",
      required: true,
      options: ["Maths", "Physics", "Chemistry", "Biology"],
    },
    {
      title: "Chapter",
      required: true,
      options: ["Sets", "Algebra", "Calculus", "3D Geometry"],
    },
    {
      title: "Topic",
      required: true,
      options: ["Sets", "Algebra", "Calculus", "3D Geometry"],
    },

    {
      title: "Grade",
      options: ["Grade 11", "Grade 12", "Grade 13 (Dropper)"],
      required: true,
    },
    {
      title: "Category",
      required: true,
      options: ["Live", "Upcoming"],
    },
  ];

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    listSearch(e.target.value).then((data)=>{

      // console.log(data,"tfyuy")
      setreload(1)
      setfilterlecture(data)

    })
  };
  const token=JSON.parse(localStorage.getItem("token"))
  // console.log(token)
  useEffect(() => {
    // console.log(searchInput);
    // Set table as per search input.
    // console.log('hy getting questions');
    getlecturesbyid("LIVE",token)
 
  }, [load]);

  return (
    <div className="liveLectures">
      <GoBack linkText={""} relativeURL={"/teacher/dashboard"} />
      <section className="liveLectures__header">
        <h4 className="liveLectures__header__title">Live Lectures</h4>
      </section>

      <section className="liveLectures__searchAndAdd">
        <div className="liveLectures__searchAndAdd__search">
          <img
            className="liveLectures__searchAndAdd__search__image"
            alt="Search"
            src="/assets/images/teacher-dashboard-questions-board-search.svg"
          />
          <input
            className="liveLectures__searchAndAdd__search__input"
            type={"text"}
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => searchHandler(e)}
          />
        </div>
        <Link
          to={"/teacher/addLiveLecture"}
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
      <section className="liveLectures__dropDownRow">
        {/* {dropDownRow.map((item,i) => (
          <DropDownSmall
          key={i}
            title={item.title}
            options={item.options}
            required={item.required}
          />
          // console.log(item)
        ))} */}
      </section>
      {/* {console.log(lecture)} */}
      <TableCompLiveLectures questionsBoardData={liveLecturesData} lecture={lecture} setfilterlecture={setfilterlecture} filterlecture={filterlecture} setreload={setreload} reload={reload} setload={setload}/>
     
    </div>
  );
};



LiveLectures.propTypes = {
  getlecturesbyid: PropTypes.func.isRequired,
  lecture: PropTypes.object.isRequired,
  error:PropTypes.object.isRequired,
  



}
const mapStateToProps = state =>({

  lecture: state.lecture,
  error: state.error,

  
  subject: state.subject,
  
});


export default connect( mapStateToProps, { getlecturesbyid} )(LiveLectures);
