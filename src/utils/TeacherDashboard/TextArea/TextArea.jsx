import React, { useState } from "react";

import "./TextArea.scss";

const TextArea = (props) => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div className="textArea" data-required={props.required ? "*required" : ""}>
      <textarea
        {...props}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => inputChangeHandler(e)}
        required={props.required}
        className="textArea__input"
        style={{ maxHeight: props.maxHeight, height: props.maxHeight }}
      />
    </div>
  );
};

export default TextArea;
