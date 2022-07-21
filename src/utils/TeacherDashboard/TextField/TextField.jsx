import React, { useState } from "react";

import "./TextField.scss";

const TextField = (props) => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div
      className="textField"
      data-required={props.required ? "*required" : ""}
    >
      <input
        {...props}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => inputChangeHandler(e)}
        required={props.required}
        className="textField__input"
      />
    </div>
  );
};

export default TextField;
