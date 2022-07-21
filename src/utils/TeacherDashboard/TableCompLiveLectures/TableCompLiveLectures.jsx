import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import "./TableCompLiveLectures.scss";
import DeleteModalById from "../DeleteModal/DeleteModalById"
import DeleteModal from "../DeleteModal/DeleteModal";
import { Link } from "react-router-dom";
import { getlectures ,getlecturesbyid,deletelecture,getAllLectures} from "../../../actions/lecture";
import { useEffect } from "react";

const TableCompLiveLectures = ({questionsBoardData,deletelecture,setload,lecture,setfilterlecture,filterlecture}) => {
  const [toBeDeleted, setToBeDeleted] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [deleteAllBoxOpen, setDeleteAllBoxOpen] = useState(false);
  const [deleteid, setdeleteid] = useState('');
  const [open, setOpen] = useState(false);
  const [deletecomand, setdeletecomand] = useState(false);
  const [lecturelist, setlecturelist] = useState(lecture.lecture);
  
  const handleDelete=(id)=>{
    setOpen(true)
    console.log(id);
    setdeleteid(id)

  }
  const deletebyid=()=>{
    console.log('yes');
    deletelecture(deleteid)
    
   
 
  }
  console.log(lecture.lecture);
  const deleteAllItems = () => {
    if (deleteAll) {
      setToBeDeleted([]);
    } else {
      setToBeDeleted([...questionsBoardData]);
    }
    setDeleteAll((prevState) => !prevState);
  };

  useEffect(() => {
   console.log(filterlecture,"in the data")
   if(filterlecture.length!=0){
     setlecturelist(filterlecture)
    }
    
  }, [filterlecture]);

  useEffect(() => {
    console.log("delete comand");
      deletebyid()
      {

        getAllLectures().then((data)=>{
          setlecturelist(data)
        })
      }
      // getlecturesbyid('LIVE')
     
    }, [deletecomand]);
 
  const deleteOneItem = (value) => {
    const doesExist = toBeDeleted.find((item) => item.id === value.id);

    if (doesExist) {
      setToBeDeleted(toBeDeleted.filter((item) => item.id !== value.id));
    } else {
      setToBeDeleted([...toBeDeleted, value]);
    }
  };




  return (
    <article className="tableCompLiveLectures">
      <div className="tableCompLiveLectures__rows tableCompLiveLectures__rows--noScroll">
        <div className="tableCompLiveLectures__rows__row">
          <div className="tableCompLiveLectures__rows__row__header">

          <div
              // onClick={() => deleteAllItems()}
              className={
                deleteAll
                  ? "tableCompLiveLectures__rows__row__header__checkbox tableCompLiveLectures__rows__row__header__checkbox--checked"
                  : "tableCompLiveLectures__rows__row__header__checkbox"
              }
            ></div>
            <img
              // onClick={() => setDeleteAllBoxOpen((prevState) => !prevState)}
              className="tableCompLiveLectures__rows__row__header__downArrow"
              src="/assets/images/teacher-dashboard-questions-board-down-arrow-2.svg"
              alt="Select All"
            />
            <div
              className={
                deleteAllBoxOpen
                  ? "tableCompLiveLectures__rows__row__header__deleteAllBox tableCompLiveLectures__rows__row__header__deleteAllBox--visible"
                  : "tableCompLiveLectures__rows__row__header__deleteAllBox"
              }
              // onClick={() => {
              //   setOpen(true);
              //   setDeleteAllBoxOpen((prevState) => !prevState);
              // }}
            >
              <img
                src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                alt={"Delete"}
              />
              <span>Delete All</span>
            </div>
          </div>
          <div className="tableCompLiveLectures__rows__row__header">
            <span className="tableCompLiveLectures__rows__row__header--1">
              {"S. No"}
            </span>
          </div>
          <div className="tableCompLiveLectures__rows__row__header">
            <span className="tableCompLiveLectures__rows__row__header--2">
              {"Chapter/Topic"}
            </span>
          </div>
          <div className="tableCompLiveLectures__rows__row__header">
            <span className="tableCompLiveLectures__rows__row__header--3">
              {"Category"}
            </span>
          </div>

          <div className="tableCompLiveLectures__rows__row__header">
            <span className="tableCompLiveLectures__rows__row__header--3">
              {"Subject"}
            </span>
          </div>

          <div className="tableCompLiveLectures__rows__row__header">
            <span className="tableCompLiveLectures__rows__row__header--3">
              {"Action"}
            </span>
          </div>
        </div>
      </div>
      <div className="tableCompLiveLectures__rows">
        {/* {questionsBoardData.map((item, index) => (
          <div className="tableCompLiveLectures__rows__row">
            <div className="tableCompLiveLectures__rows__row__rank">
              <div
                onClick={() => deleteOneItem(item)}
                className={
                  toBeDeleted.find((i) => i.id === item.id)
                    ? "tableCompLiveLectures__rows__row__rank__checkbox tableCompLiveLectures__rows__row__rank__checkbox--checked"
                    : "tableCompLiveLectures__rows__row__rank__checkbox"
                }
              ></div>
            </div>
            <div className="tableCompLiveLectures__rows__row__rank">
              {index + 1}
            </div>
            <div className="tableCompLiveLectures__rows__row__rank">
              {item.topic}
            </div>
            <div className="tableCompLiveLectures__rows__row__rank">
              {item.category}
            </div>

            <div className="tableCompLiveLectures__rows__row__rank">
              {item.subject}
            </div>

            <div className="tableCompLiveLectures__rows__row__rank">
              <div className="tableCompLiveLectures__rows__row__rank__icons">
                <Link
                  to={
                    item.type === "Live" ? "/teacher/viewLiveLecture" : ""
                  }
                  className={`tableCompLiveLectures__rows__row__rank__icons__play`}
                >
                  <img
                    title={item.type === "Live" ? "Live" : "Upcoming"}
                    src={`/assets/images/teacher-dashboard-live-lectures-play.svg`}
                    alt={"Delete"}
                    style={{ opacity: item.type === "Live" ? "1" : "0.5" }}
                  />
                </Link>
                <img
                  onClick={() => setOpen(true)}
                  src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                  alt={"Delete"}
                  className={`tableCompLiveLectures__rows__row__rank__icons__delete`}
                />
              </div>
            </div>
          </div>
        ))} */}
        
      
         {lecturelist&&lecturelist.map((item, index) => (
          <div key={index}>
         {/* {   console.log(item.chapter.title)} */}
        
 <div className="tableCompLiveLectures__rows__row" key={index}>
          <div className="tableCompLiveLectures__rows__row__rank">
             <div
               
                className={
                 "tableCompLiveLectures__rows__row__rank__checkbox"
                }
              ></div>
            </div>
            <div className="tableCompLiveLectures__rows__row__rank">
              {index + 1}
            </div>
            <div className="tableCompLiveLectures__rows__row__rank">
              {item.title}
            </div>
            <div className="tableCompLiveLectures__rows__row__rank">
            {item.zoomPass?"ZOOM":  item.type}
            </div>

            <div className="tableCompLiveLectures__rows__row__rank">
            {item.subject==null?"subject deleted":item.subject.name}
           
            </div>

            <div className="tableCompLiveLectures__rows__row__rank">
              <div className="tableCompLiveLectures__rows__row__rank__icons">
                <div
                  className={`tableCompLiveLectures__rows__row__rank__icons__play`}
                >
                 {item.zoomPass? <a href={"http://zoom.easyhaionline.com/?id=" + item.zoomid + "?pass=" + item.zoomPass + "?role=1?name=" + item.title + "?leave_url=https://www.teacher.easyhaionline.com/teacher/liveLectures"} ><img
                    title={item.type === "Live" ? "Live" : "Upcoming"}
                    src={`/assets/images/teacher-dashboard-live-lectures-play.svg`}
                    alt={"Delete"}
                   
                  /></a>:<a href={`/teacher/viewLiveLecture/${item._id}`} ><img
                  title={item.type === "Live" ? "Live" : "Upcoming"}
                  src={`/assets/images/teacher-dashboard-live-lectures-play.svg`}
                  alt={"Delete"}
                 
                /></a>}
                </div>
                <img
                  onClick={() => handleDelete(item._id) }
                  src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                  alt={"Delete"}
                  className={`tableCompLiveLectures__rows__row__rank__icons__delete`}
                />
              </div>
            </div>
          </div>
          </div>
         
        ))}
       
      </div>
      
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <DeleteModalById
            modalTitle={"Delete Selected Lectures?"}
            modalSubtitle={"Are you sure you want to delete selected Lectures?"}
            setOpen={setOpen}
            id={deleteid}
            setdeletecomand={setdeletecomand} 
          />
        </>
      </Modal>
    </article>
  );
};

TableCompLiveLectures.propTypes = {
  
  deletelecture: PropTypes.func.isRequired,
  
 
  
}
const mapStateToProps = state =>({
  lecture: state.lecture,
  error: state.error
});



export default connect( mapStateToProps, { getlectures,getlecturesbyid,deletelecture } )(TableCompLiveLectures);
