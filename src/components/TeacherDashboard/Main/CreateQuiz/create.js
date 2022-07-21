import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoBack from "../../../../utils/Common/GoBack/GoBack";
import { recordedlistSearch } from "../../../../actions/lecture";
import { getlecturesbyid } from "../../../../actions/lecture";
import "./CreateQuiz.scss";
import axios from "axios";

const CreateQuiz = () => {
  let navigate = useNavigate();
  const lecture = "Hello";
  const [searchInput, setSearchInput] = useState("");
  const [load, setload] = useState(false);
  const [reload, setreload] = useState(0);
  const [filterlecture, setfilterlecture] = useState([]);

  const [displayPopup, setdisplayPopup] = useState(false);

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    recordedlistSearch(e.target.value).then((data) => {
      console.log(data, "tfyuy");
      setfilterlecture(data);
      setreload(1);
    });
  };

  const token = JSON.parse(localStorage.getItem("token"));
  // console.log(token)

  useEffect(() => {
    // console.log(searchInput);
    // Set table as per search input.
    // console.log('hy getting questions');
    getlecturesbyid("RECORDED", token);
  }, [load]);

  const [subjects, setSubjects] = useState([]);
  const [dynamic, setdynamic] = useState([]);
  const [assignmentData, setassignmentData] = useState({
    name: "",
    date: "",
    subject: "",
    count: "",
  });

  assignmentData.subject = dynamic.toString();
  useEffect(() => {
    axios
      .get("https://api.pariksha247.com/api/course/active")
      .then((res) => setSubjects(res.data))
      .then((err) => console.log(err));
  }, []);

  const handler = (e) => {
    setdynamic([e.target.value]);

    axios
      .get("https://api.pariksha247.com/api/course/active")
      .then((res) => setSubjects(res.data))
      .then((err) => console.log(err));
  };
  function handlerinput(evt) {
    const value = evt.target.value;
    setassignmentData({
      ...assignmentData,
      [evt.target.name]: value,
    });
  }
  function setData() {
    const assignmentPrv = JSON.parse(localStorage.getItem("assignment"));
    localStorage.setItem(
      "assignment",
      JSON.stringify([...assignmentPrv, assignmentData])
    );
    navigate("/teacher/progress");
  }

  const [dataFromLocalStorage, setdataFromLocalStorage] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("assignment"));
    if (items) {
      setdataFromLocalStorage(items);
    }
  }, []);
  // console.log(dataFromLocalStorage);

  // const [subjectData, setsubjectData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://api.pariksha247.com/api/subject/get-by-id/62c27d0f5c123a2233364b59")
  //     .then((res) => setsubjectData(res.data))
  //     .then((err) => console.log(err));
  // }, []);
  // console.log(subjectData);


  return (
    <div>
      <div className="recordedLectures">
        <GoBack linkText={""} relativeURL={"/teacher/dashboard"} />
        <section className="recordedLectures__header">
          <h4 className="recordedLectures__header__title">Create Assignment</h4>
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

          <button
            className="liveLectures__searchAndAdd__addQuestion"
            onClick={() => setdisplayPopup(true)}
          >
            <img
              className="liveLectures__searchAndAdd__addQuestion__image"
              alt="Add"
              src="/assets/images/teacher-dashboard-questions-board-add.svg"
            />
            <div className="liveLectures__searchAndAdd__addQuestion__text">
              {"New Assigment"}
            </div>
          </button>
          <button
            className="liveLectures__searchAndAdd__addQuestion"
            onClick={() => setdisplayPopup(true)}
          >
            <img
              className="liveLectures__searchAndAdd__addQuestion__image"
              alt="Add"
              src="/assets/images/teacher-dashboard-questions-board-add.svg"
            />
            <div className="liveLectures__searchAndAdd__addQuestion__text">
              {"New Test"}
            </div>
          </button>
          {/* <button
          className="liveLectures__searchAndAdd__addQuestion"
        >
          <img
            className="liveLectures__searchAndAdd__addQuestion__image"
            alt="Add"
            src="/assets/images/teacher-dashboard-questions-board-search.svg"
          />
          <div className="liveLectures__searchAndAdd__addQuestion__text">
            {"Filter"}
          </div>
        </button> */}
          <div></div>
          {displayPopup && (
            <div className="__popup-create-quiz">
              <button
                className="__popup-create-quiz-close-btn"
                onClick={() => setdisplayPopup(false)}
              >
                X
              </button>

              <input
                className="__popup-create-quiz-input"
                type={"text"}
                placeholder="Assignment Name"
                name="name"
                onChange={handlerinput}
              />
              <input
                className="__popup-create-quiz-input"
                type={"date"}
                name="date"
                placeholder="Assignment Name"
                onChange={handlerinput}
              />

              <select
                defaultValue
                className="form-select __popup-create-quiz-select "
                name="subject"
                onChange={handler}
                aria-label="Default select example"
              >
                <option selected>Select Code</option>
                {subjects.map((item) =>
                  item.subject.map((a) => (
                    <option key={""} value={a.name}>
                      {item.code}
                    </option>
                  ))
                )}
              </select>

              <select
                defaultValue
                className="form-select __popup-create-quiz-select "
                onChange={handlerinput}
                aria-label="Default select example"
              >
                <option selected>Select Subject</option>

                {dynamic.map((zc) => (
                  <option key={""} value={zc}>
                    {zc}
                  </option>
                ))}
              </select>
              <input
                className="__popup-create-quiz-input"
                type={"number"}
                placeholder="Q count"
                onChange={handlerinput}
                name="count"
              />

              <div>
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="id"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label " for="flexRadioDefault1">
                    Multiple Sets
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="id"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label  " for="flexRadioDefault2">
                    Online Test
                  </label>
                </div>
              </div>
              <button className="__popup-create-quiz-btn" onClick={setData}>
                Next
              </button>
            </div>
          )}
        </section>
        <div>
          <h4 className="text-center">Assignments</h4>

          <table className=" table-striped" style={{ width: "100%" }}>
            <thead style={{ width: "100%" }}>
              <tr style={{ width: "100%" }}>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Questions</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody style={{ width: "100%" }}>
              {dataFromLocalStorage.map((item) => (
                <tr style={{ height: "50px" }}>
                  <th scope="row">{item.name}</th>
                  <td>{item.date}</td>
                  <td>{item.count}</td>
                  <td>
                    <button className="btn btn-outline-warning">
                      Continue
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="mt-5">
<h4 className="text-center">Tests</h4>
     
      <table className=" table-striped" style={{width:"100%"}}>
  <thead style={{width:"100%"}}>
    <tr style={{width:"100%"}}>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Questions</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody style={{width:"100%"}}>
    <tr style={{height:"50px"}}>
      <th scope="row">{dataFromLocalStorage.name}</th>
      <td>{dataFromLocalStorage.date}</td>
      <td>{dataFromLocalStorage.count}</td>
      <td><button className="btn btn-outline-warning">Continue</button></td>
    </tr>

  </tbody>
</table>
     </div>   */}
      </div>
    </div>
  );
};

export default CreateQuiz;