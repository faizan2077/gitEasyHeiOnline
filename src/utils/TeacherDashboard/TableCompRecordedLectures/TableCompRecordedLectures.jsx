import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {deletelecture} from '../../../actions/lecture'
import "./TableCompRecordedLectures.scss";
import DeleteModalById from "../DeleteModal/DeleteModalById"
import DeleteModal from "../DeleteModal/DeleteModal";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllRecordedLectures } from "../../../actions/lecture";
const TableCompRecordedLectures = ({ questionsBoardData,deletelecture,setload,lecture,setfilterlecture,filterlecture }) => {
  const [toBeDeleted, setToBeDeleted] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [deleteAllBoxOpen, setDeleteAllBoxOpen] = useState(false);
  const [deleteid, setdeleteid] = useState('');
  const [open, setOpen] = useState(false);
  const [reload, setreload] = useState(0);
  const [deletecomand, setdeletecomand] = useState(false);
  const [lecturelist, setlecturelist] = useState(lecture.lecture);
  const deleteAllItems = () => {
    if (deleteAll) {
      setToBeDeleted([]);
    } else {
      setToBeDeleted([...questionsBoardData]);
    }
    setDeleteAll((prevState) => !prevState);
  };
  const handleDelete=(id)=>{
    setOpen(true)
    console.log(id);
    setdeleteid(id)

  }
  const deletebyid=()=>{
    console.log('yes');
    deletelecture(deleteid)
    
   
 
  }

  const deleteOneItem = (value) => {
    const doesExist = toBeDeleted.find((item) => item.id === value.id);

    if (doesExist) {
      setToBeDeleted(toBeDeleted.filter((item) => item.id !== value.id));
    } else {
      setToBeDeleted([...toBeDeleted, value]);
    }
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
      // getlecturesbyid('LIVE')
      {

        getAllRecordedLectures().then((data)=>{
          setlecturelist(data)
        })
      }
    }, [deletecomand]);
 
  return (
    <article className="tableCompRecordedLectures">
      <div className="tableCompRecordedLectures__rows tableCompRecordedLectures__rows--noScroll">
        <div className="tableCompRecordedLectures__rows__row">
          <div className="tableCompRecordedLectures__rows__row__header">
            <div
              onClick={() => deleteAllItems()}
              className={
                deleteAll
                  ? "tableCompRecordedLectures__rows__row__header__checkbox tableCompRecordedLectures__rows__row__header__checkbox--checked"
                  : "tableCompRecordedLectures__rows__row__header__checkbox"
              }
            ></div>
            <img
              onClick={() => setDeleteAllBoxOpen((prevState) => !prevState)}
              className="tableCompRecordedLectures__rows__row__header__downArrow"
              src="/assets/images/teacher-dashboard-questions-board-down-arrow-2.svg"
              alt="Select All"
            />
            <div
              className={
                deleteAllBoxOpen
                  ? "tableCompRecordedLectures__rows__row__header__deleteAllBox tableCompRecordedLectures__rows__row__header__deleteAllBox--visible"
                  : "tableCompRecordedLectures__rows__row__header__deleteAllBox"
              }
              onClick={() => {
                setOpen(true);
                setDeleteAllBoxOpen((prevState) => !prevState);
              }}
            >
              <img
                src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                alt={"Delete"}
              />
              <span>Delete All</span>
            </div>
          </div>
          <div className="tableCompRecordedLectures__rows__row__header">
            <span className="tableCompRecordedLectures__rows__row__header--1">
              {"S. No"}
            </span>
          </div>
          <div className="tableCompRecordedLectures__rows__row__header">
            <span className="tableCompRecordedLectures__rows__row__header--2">
              {"Name"}
            </span>
          </div>
          <div className="tableCompRecordedLectures__rows__row__header">
            <span className="tableCompRecordedLectures__rows__row__header--3">
              {"Published Date"}
            </span>
          </div>

          <div className="tableCompRecordedLectures__rows__row__header">
            <span className="tableCompRecordedLectures__rows__row__header--3">
              {"Subject"}
            </span>
          </div>
          <div className="tableCompRecordedLectures__rows__row__header">
            <span className="tableCompRecordedLectures__rows__row__header--3">
              {""}
            </span>
          </div>

          <div className="tableCompRecordedLectures__rows__row__header">
            <span className="tableCompRecordedLectures__rows__row__header--3">
              {"Action"}
            </span>
          </div>
        </div>
      </div>
      <div className="tableCompRecordedLectures__rows">
     {lecturelist&&lecturelist.map((item,i)=>{
// console.log(item.createdAt.slice(0,10))
     })}
        {lecturelist&&lecturelist.map((item, index) => (
          <div className="tableCompRecordedLectures__rows__row">
            <div className="tableCompRecordedLectures__rows__row__rank">
              <div
                // onClick={() => deleteOneItem(item)}
                className={
                  "tableCompRecordedLectures__rows__row__rank__checkbox"
                }
              >
              </div>
            </div>
            <div className="tableCompRecordedLectures__rows__row__rank">
              {index + 1}
            </div>
            <div className="tableCompRecordedLectures__rows__row__rank">
              {item.title}
            </div>
            <div className="tableCompRecordedLectures__rows__row__rank">
              {item.createdAt.slice(0,10)}
            </div>

            <div className="tableCompRecordedLectures__rows__row__rank">
            {item.subject==null?"subject deleted":item.subject.name}
            </div>

            {/* <Link
              // to="/teacher/viewRecordedLecture"
              className="tableCompRecordedLectures__rows__row__rank"
            >
              {"View Details"}
             </Link> */}

           <div className="tableCompRecordedLectures__rows__row__rank"> 
              <div className="tableCompRecordedLectures__rows__row__rank__icons">
                <Link
                  to={`/teacher/RecordedLectureVideo/${item._id}`}
                  className={`tableCompRecordedLectures__rows__row__rank__icons__play`}
                >
                  <img
                    src={`/assets/images/teacher-dashboard-live-lectures-play.svg`}
                    alt={"Delete"}
                  />
                </Link>
                <img
                  onClick={() => handleDelete(item._id)}
                  src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                  alt={"Delete"}
                  className={`tableCompRecordedLectures__rows__row__rank__icons__delete`}
                />
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


TableCompRecordedLectures.propTypes = {
  
  deletelecture: PropTypes.func.isRequired,
  
 
  
}
const mapStateToProps = state =>({
  lecture: state.lecture,
  error: state.error
});


export default connect( mapStateToProps, { deletelecture } ) (TableCompRecordedLectures);
