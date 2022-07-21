import React, { useState } from "react";
import { Modal } from "@material-ui/core";

import "./TableCompTests.scss";

import DeleteModal from "../DeleteModal/DeleteModal";

const TableCompTests = ({ questionsBoardData }) => {
  const [toBeDeleted, setToBeDeleted] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  const [deleteAllBoxOpen, setDeleteAllBoxOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const deleteAllItems = () => {
    if (deleteAll) {
      setToBeDeleted([]);
    } else {
      setToBeDeleted([...questionsBoardData]);
    }
    setDeleteAll((prevState) => !prevState);
  };

  const deleteOneItem = (value) => {
    const doesExist = toBeDeleted.find((item) => item.id === value.id);

    if (doesExist) {
      setToBeDeleted(toBeDeleted.filter((item) => item.id !== value.id));
    } else {
      setToBeDeleted([...toBeDeleted, value]);
    }
  };

  return (
    <article className="tableCompTests">
      <div className="tableCompTests__rows tableCompTests__rows--noScroll">
        <div className="tableCompTests__rows__row">
          <div className="tableCompTests__rows__row__header">
            <div
              onClick={() => deleteAllItems()}
              className={
                deleteAll
                  ? "tableCompTests__rows__row__header__checkbox tableCompTests__rows__row__header__checkbox--checked"
                  : "tableCompTests__rows__row__header__checkbox"
              }
            ></div>
            <img
              onClick={() => setDeleteAllBoxOpen((prevState) => !prevState)}
              className="tableCompTests__rows__row__header__downArrow"
              src="/assets/images/teacher-dashboard-questions-board-down-arrow-2.svg"
              alt="Select All"
            />
            <div
              className={
                deleteAllBoxOpen
                  ? "tableCompTests__rows__row__header__deleteAllBox tableCompTests__rows__row__header__deleteAllBox--visible"
                  : "tableCompTests__rows__row__header__deleteAllBox"
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
          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--1">
              {"S. No"}
            </span>
          </div>
          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--2">
              {"Test Name"}
            </span>
          </div>
          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--3">
              {"Exam Type"}
            </span>
          </div>

          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--3">
              {"Test Type"}
            </span>
          </div>
          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--3">
              {"Status"}
            </span>
          </div>
          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--3">{""}</span>
          </div>
          <div className="tableCompTests__rows__row__header">
            <span className="tableCompTests__rows__row__header--3">
              {"Action"}
            </span>
          </div>
        </div>
      </div>
      <div className="tableCompTests__rows">
        {questionsBoardData.map((item, index) => (
          <div className="tableCompTests__rows__row">
            <div className="tableCompTests__rows__row__rank">
              <div
                onClick={() => deleteOneItem(item)}
                className={
                  toBeDeleted.find((i) => i.id === item.id)
                    ? "tableCompTests__rows__row__rank__checkbox tableCompTests__rows__row__rank__checkbox--checked"
                    : "tableCompTests__rows__row__rank__checkbox"
                }
              ></div>
            </div>
            <div className="tableCompTests__rows__row__rank">{index + 1}</div>
            <div className="tableCompTests__rows__row__rank">
              {item.testName}
            </div>
            <div className="tableCompTests__rows__row__rank">
              {item.examType}
            </div>
            <div className="tableCompTests__rows__row__rank">
              {item.testType}
            </div>
            <div className="tableCompTests__rows__row__rank">{item.status}</div>
            <div
              className={
                item.status === "Under Review"
                  ? "tableCompTests__rows__row__rank inactive"
                  : "tableCompTests__rows__row__rank active"
              }
            >
              {item.status === "Under Review" ? "InActive" : "Active"}
            </div>
            <div className="tableCompTests__rows__row__rank">
              <img
                onClick={() => setOpen(true)}
                src={`/assets/images/teacher-dashboard-questions-board-delete.svg`}
                alt={"Delete"}
                className={`tableCompTests__rows__row__rank__delete`}
              />
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <DeleteModal
            modalTitle={"Delete Selected Questions?"}
            modalSubtitle={
              "Are you sure you want to delete selected Questions?"
            }
            setOpen={setOpen}
          />
        </>
      </Modal>
    </article>
  );
};

export default TableCompTests;
