import React, { useState } from "react";

import "./TextArea.scss";

const InputTextArea = ({type="",valueinput='',placeholder="",required='',maxHeight='',inputvals,setinputvals}) => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
    setinputvals(
        {...inputvals,[valueinput]:e.target.value}
    )
  };

  return (
    <div className="textArea" data-required={required ? "*required" : ""}>
     {console.log(placeholder)}
      <textarea
        
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputChangeHandler(e)}
        required={required}
        className="textArea__input"
        style={{ maxHeight: maxHeight, height: maxHeight }}
      />
    </div>
  );
};

export default InputTextArea;
