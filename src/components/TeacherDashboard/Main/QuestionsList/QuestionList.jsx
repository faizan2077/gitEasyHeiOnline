import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const userData = [
  { name: "s block element" },
  { name: "p block element" },
  { name: "d block element" },
  { name: "f block element" },
];
const QuestionList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      console.log(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
  return (
    <div>
      <div className="container m-4 ">
        <h1>Let's define the syllabus for the assignment.</h1>
        <h4>Select one or more chapter from below</h4>
      </div>
      <div className=" my-4">
        <form className="form w-100">
          <h3>Select Topics</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="allSelect"
              // checked={
              //   users.filter((user) => user?.isChecked !== true).length < 1
              // }
              checked={!users.some((user) => user?.isChecked !== true)}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2  fs-4">Chemistry-II</label>
          </div>
          {users.map((user, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label className="form-check-label ms-2">{user.name}</label>
            </div>
          ))}
        </form>
      </div>
      {/* <div className='container m-4 '>  

            <div className="form-check form-check-inline mb-4">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
              <label className="form-check-label fs-3" for="inlineCheckbox1">Organic Chemistry-2</label>
            </div><br/>
       
            
            <input type="checkbox" className="btn-check m-1"  autocomplete="off" />
            
            <label className="btn btn-outline-primary m-1 " >Lable</label>
          
            </div> */}
      <div className="mx-5">
        <Link to="/teacher/createQuiz/question">
          <button className=" mt-3 btn btn-warning ">Continue</button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default QuestionList;
