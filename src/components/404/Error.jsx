import React, { useState } from "react";
import error from "./img/error/error.png"
import "./Error.scss"

const Error = () => {
  return (
    <div className="main">
    <div className="container">
      <center>
        <div style={{margin:'10rem auto'}}>
          <img style={{width:'20vh'}} src={error}/>
          <h2 style={{color:'#093F5C'}}>Page Not Found</h2>
        </div>
      </center>
  </div>
  </div>
  );
};
export default Error;
