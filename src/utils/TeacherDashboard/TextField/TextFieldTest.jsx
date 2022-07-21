import React, { useState } from "react";

import "./TextField.scss";

const TextFieldTest = ({type='',required='',placeholder='',valueinput='',setinputvals,inputvals, inputValues}) => {
  const [value, setValue] = useState(inputValues);

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    setinputvals({...inputvals,[valueinput]:e.target.value})
    console.log(inputvals)
  };

  return (
    <div
      className="textField"
      // data-required={ ? "*required" : ""}
    >
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputChangeHandler(e)}
        required={required}
        className="textField__input"
      />
    </div>
  );
};

export default TextFieldTest;
