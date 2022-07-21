import React from "react";
import Banner from './banner.png'
import './Institute.scss';
import AnmEducation from "./AnmEducation"
import AnmFaculty from "./AnmFaculty";
import AnmResearch from "./AnmResearch";
// import abc from "../../../../../public/assets/images/brand-icon.png"


export function Institute (){
  return (
    <>
      <div className="instituteContainer">
        <div className="box">
          <div className="logo">
            <img
              src=" /assets/images/brand-icon.png"
              alt="Easy hai Online"
              style={{ width: "1.5rem" }}
            />
          </div>
          <div className="information">
            {/* Info 1 */}
            <div className="info1">
              <div className="text">
                <h2>#1 QUALITY EDUCATION</h2>
                <h4>
                  We try to provide high-quality education with the use of the
                  latest technology.
                </h4>
              </div>
              <div className="animation">
                <AnmEducation />
              </div>
            </div>
            {/* Info 2 */}
            <div className="info2">
              <div className="animation2">
                <AnmFaculty />
              </div>
              <div className="text2">
                <h2>#2 EFFICIENT FACULTY</h2>
                <h4>
                  We only rely on professional and experienced faculty with high
                  expertise.
                </h4>
              </div>
            </div>

            {/* Info 3  */}
            <div className="info3">
              <div className="text">
                <h2>#3 Research and Innovation</h2>
                <h4>
                  We aim to work together with students and teachers to only
                  move forward.
                </h4>
              </div>
              <div className="animation">
                <AnmResearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institute;






 
