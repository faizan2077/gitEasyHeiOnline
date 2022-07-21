import React, { useEffect, useState } from "react";
import { Line, Circle } from "rc-progress";
import "./CreateQuiz.scss";
import {Link} from 'react-router-dom'

const Progress = () => {
  const [loading, setloading] = useState(true);
  const [dataFromLocalStorage, setdataFromLocalStorage] = useState([]);
  const data = dataFromLocalStorage.slice(-1);
  const ab = data[0];
  console.log(ab);
  useEffect(() => {
    setloading(true);
    const items = JSON.parse(localStorage.getItem("assignment"));

    if (items) {
      setdataFromLocalStorage(items);
      setloading(false);
    }
  }, []);

  return (
    <div className="" style={{ overflowX: "hidden" }}>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="row">
          <div className="col-3   ">
            <div className="__cirlce-progress-bar mx-3 ">
              <Circle
                percent={1}
                strokeWidth={8}
                trailWidth={0}
                strokeColor=" #ff9f1c"
                trailColor="#D3D3D3"
              />
              <div className="__cirlce-progress-bar-text">
                <h2>0/{ab.count}</h2>
                <h6>Questions</h6>
              </div>
            </div>
            <div className="mt-3 mx-5">
              <h6>{ab.name}</h6>
              <h6 className="text-muted">{ab.date}</h6>
            </div>
          </div>

          <div className="col-9 bg-light">
            <div className="row">
              <div className="col-5 m-3 assignment-card ">
                <h5 className="mb-4">{ab.subject}</h5>
                <div className="d-flex justify-content-between">
                  <h6>Questions</h6>
                  <h6>0/{ab.count}</h6>
                </div>
                <Line
                  percent={0}
                  strokeWidth={4}
                  trailWidth={0}
                  strokeColor=" #ff9f1c"
                  trailColor="#D3D3D3"
                />
                <Link to="/teacher/createQuiz/question-list">
                
                <button className=" mt-3 btn btn-warning w-100">
                  Continue
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;
