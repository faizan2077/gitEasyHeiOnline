import React, { useState } from "react";

import "./TextField.scss";

const InputTextField = ({type='',required='',placeholder='',valueinput='',setinputvals,inputvals}) => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value,e.target.value);
   
    setinputvals({...inputvals,[valueinput]:e.target.value})
    
  };

  return (
    <div
      className="textField"
      data-required={required ? "*required" : ""}
    >
      <input
        
        type={`${type}` || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputChangeHandler(e)}
        required={required}
        className="textField__input"
      />
      {console.log(type)}
    </div>
  );
};

export default InputTextField;
