import React, { useState } from "react";
import Video from "./Video";
import Pdf from "./Pdf";
import "./Instructions.scss";

const CourseMaterial = ({
  title = "MOCK TEST JEE - 3",
  questions = "75",
  duration = 3,
}) => {
  const instructions = [
    "Exam will start once you click begin.",
    "When the countdown timer at the top reaches zero, the examination will end by itself.",
    "The examination will end exactly in 3 hours, from the time when you click begin.",
    "Once you “Finish” the test, you cannot resume the test again.",
  ];
  const [editOpen, setEditOpen] = useState(true);
  const changeButton = ()=>{
    setEditOpen(!editOpen)
  }
  return (
    <div className="instructions">
      <div className="instructions__goBack">
        <img
          className="instructions__goBack__icon"
          src="/assets/images/dashboard-subject-topics-go-back.svg"
          alt="Back arrow"
        />
        <h5 className="instructions__goBack__text">Back</h5>
      </div>
      <div className="instructions__header">
        <h4 className="instructions__header__title">Course Material</h4>
      </div>
      <section class="publishAssignment__ctaRow">
        <button class="publishAssignment__ctaRow__publish" onClick={()=>changeButton()}>Video</button>
        <button class="publishAssignment__ctaRow__submit" onClick={()=>changeButton()}>Pdf</button>
      </section>
      <section class="publishAssignment__ctaRow">
        {editOpen ? <Video /> : <Pdf /> }
      
      </section>
    </div>
  );
};

export default CourseMaterial;
