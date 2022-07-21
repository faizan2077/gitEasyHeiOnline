import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = () => {
    const a = [
        {
            "a": "Group-15"
        },
        {
            "a": "Group-16"
        },
        {
            "a": "Group-17"
        },
        {
            "a": "Group-18"
        }
        
    ]
    return (
        <div>
            <div className='container m-4 '>
            <h1>Let's define the syllabus for the assignment.</h1>
            <h4>Select one or more chapter from below</h4>
            </div>
            <div className='container m-4 '>  

            <div className="form-check form-check-inline mb-4">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
              <label className="form-check-label fs-3" for="inlineCheckbox1">Organic Chemistry-2</label>
            </div><br/>
       
            
            <input type="checkbox" className="btn-check m-1"  autocomplete="off" />
             {
            a.map((item)=>(
            <label className="btn btn-outline-primary m-1 " >{item.a}</label>
          
            ))
        } 
            </div>
            <div className='mx-5'>
            <Link to="/teacher/createQuiz/question">
                
                <button className=" mt-3 btn btn-warning ">
                  Continue
                </button>
                </Link>            </div>
        </div>
    );
}

export default QuestionList;
