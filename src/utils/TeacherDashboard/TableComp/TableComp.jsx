import React, { useState,useEffect } from "react";
import { Modal } from "@material-ui/core";

import "./TableComp.scss";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteModal from "../DeleteModal/DeleteModal";
import DeleteModalById from "../DeleteModal/DeleteModalById";
import { deletequestion,getQuestions } from "../../../actions/teacher";
import { useNavigate } from "react-router-dom";

const TableComp = ({ questionsBoardData, questions,deletequestion, setload }) => {
  const [toBeDeleted, setToBeDeleted] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [deleteAllBoxOpen, setDeleteAllBoxOpen] = useState(false);
  const [questionlist, setquestionlist] = useState(questions);
const [deleteid, setdeleteid] = useState('');
  const [open, setOpen] = useState(false);
const [deletecomand, setdeletecomand] = useState(false);
  const handleDelete=(id)=>{
    setOpen(true)
    console.log(id);
    setdeleteid(id)

  }
  const navigate=useNavigate();
  const deletebyid=()=>{
    console.log('yes');
    deletequestion(deleteid)
    setload(true)
   
 
  }
  const deleteAllItems = () => {
    if (deleteAll) {
      setToBeDeleted([]);
    } else {
      setToBeDeleted([...questionsBoardData]);
    }
    setDeleteAll((prevState) => !prevState);
  };
useEffect(() => {
console.log("delete comand");
  deletebyid()
 
}, [deletecomand]);
  const deleteOneItem = (value) => {
    const doesExist = toBeDeleted.find((item) => item.id === value.id);

    if (doesExist) {
      setToBeDeleted(toBeDeleted.filter((item) => item.id !== value.id));
    } else {
      setToBeDeleted([...toBeDeleted, value]);
    }
  };
console.log(questions);
  return (
    <article className="tableComp">
      <div className="tableComp__rows tableComp__rows--noScroll">
        <div className="tableComp__rows__row">
          <div className="tableComp__rows__row__header">
            <div
              onClick={() => deleteAllItems()}
              className={
                deleteAll
                  ? "tableComp__rows__row__header__checkbox tableComp__rows__row__header__checkbox--checked"
                  : "tableComp__rows__row__header__checkbox"
              }
            ></div>
            <img
              onClick={() => setDeleteAllBoxOpen((prevState) => !prevState)}
              className="tableComp__rows__row__header__downArrow"
              src="/assets/images/teacher-dashboard-questions-board-down-arrow-2.svg"
              alt="Select All"
            />
            <div
              className={
                deleteAllBoxOpen
                  ? "tableComp__rows__row__header__deleteAllBox tableComp__rows__row__header__deleteAllBox--visible"
                  : "tableComp__rows__row__header__deleteAllBox"
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
          <div className="tableComp__rows__row__header">
            <span className="tableComp__rows__row__header--1">{"S. No"}</span>
          </div>
          <div className="tableComp__rows__row__header">
            <span className="tableComp__rows__row__header--2">
              {"Question"}
            </span>
          </div>
          <div className="tableComp__rows__row__header">
            <span className="tableComp__rows__row__header--3">{"Subject"}</span>
          </div>

          <div className="tableComp__rows__row__header">
            <span className="tableComp__rows__row__header--3">{"Type"}</span>
          </div>
          <div className="tableComp__rows__row__header">
            <span className="tableComp__rows__row__header--3">{"Action"}</span>
          </div>
        </div>
      </div>
      <div className="tableComp__rows">
        
        { questionlist && questionlist.map((item, index) => (
          <div className="tableComp__rows__row" key={index}>
            <div className="tableComp__rows__row__rank">
              <div
                // onClick={() => deleteOneItem(item)}
                className={
                 "tableComp__rows__row__rank__checkbox"
                }
              ></div>
            </div>
            <div className="tableComp__rows__row__rank">{index + 1}</div>
            <div className="tableComp__rows__row__rank">{item.question}</div>
            <div className="tableComp__rows__row__rank">{item.subject.name?item.subject.name:"Deleted subject"}</div>
            <div className="tableComp__rows__row__rank">{item.quesType}</div>
            <div className="tableComp__rows__row__rank">
              <img
                onClick={() => handleDelete(item._id) }
                src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                alt={"Delete"}
                className={`tableComp__rows__row__rank__delete`}
              />
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
        
          <DeleteModalById
            modalTitle={"Delete Selected Questions?"}
            modalSubtitle={
              "Are you sure you want to delete selected Questions?"
            }
 id={deleteid}
setdeletecomand={setdeletecomand} 
            setOpen={setOpen}
          />
        </>
      </Modal>
    </article>
  );
};

TableComp.propTypes = {
deleteQuestions: PropTypes.func.isRequired,

 

  error:PropTypes.object.isRequired,
  



}
const mapStateToProps = state =>({

  error: state.error,

  
  subject: state.subject,
  
});


export default connect( mapStateToProps, { deletequestion,getQuestions } ) (TableComp) ;
