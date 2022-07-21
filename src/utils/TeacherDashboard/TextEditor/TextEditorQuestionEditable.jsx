

import React, { useState } from "react";

import "./TextEditor.scss";
import { Parser } from "html-to-react";

const TextEditorQuestionEditable = ({ title ,question, inputvals,setinputvals ,image,changevalue}) => {
  const [value, setValue] = useState(question);

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    setinputvals({...inputvals,statement:e.target.value})
  };
  const [photo, setphoto] = useState(image!=undefined?image:"no");
// console.log(photo)
  return (
    <section className="textEditor">
      <div className="textEditor__title">{title}</div>
      <div className="textEditor__main">
        <div className="textEditor__main__imageRow">
          {/* <img
            src="/assets/images/teacher-dashboard-question-single-option-text-editor-bar.svg"
            alt="Text Editor Bar"
            className="textEditor__main__imageRow__image"
          /> */}
        </div>

        <label
          type="text"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing?"
    
          // onChange={(e) => inputChangeHandler(e)}
          required={true}
          className="textEditor__main__inputBox"
        >{Parser().parse(value)}</label>
            <div className="center">
              {photo!="no"?Parser().parse(photo):""}
            </div>
      </div>
    </section>
  );
};

export default TextEditorQuestionEditable;
