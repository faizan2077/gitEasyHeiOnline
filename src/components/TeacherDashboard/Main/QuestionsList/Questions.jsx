import React, { useEffect, useState } from "react";
import axios from "axios"

const Questions = () => {
    const [data, setdata] = useState([]);
    console.log(data);

     // /Getting Data from API---------------------------------------
  useEffect(() => {
    axios
      .get("https://api.pariksha247.com/api/question/")
      .then((res) => setdata(res.data))
      .then((err) => console.log(err));
      
      
  }, []);

    return (
        <div>
            <div className='row mt-4'>
                <div className='col-3' style={{overflowY:"scroll"}}>
                    <h2>Question Distribution</h2>
                </div>
                <div className='col-9' style={{overflowY:"scroll"}}>
                    <div className='row text-center'>
                        <div className='col-3'>
                            <ul  style={{listStyle:"none"}}>
                                <li><div className='d-flex justify-content-between'>
                                   <h5>Easy</h5> 
                                   <h5>0</h5> 
                                    </div></li>
                                <li><div className='d-flex justify-content-between'>
                                    <h5>Medium</h5>
                                    <h5>0</h5> 
                                    </div></li>
                                <li><div className='d-flex justify-content-between'>
                                    <h5>Hard</h5>
                                    <h5>0</h5> 
                                    </div></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h2>0</h2>
                            <h4>Numerical Questions</h4>
                        </div>
                        <div className='col-3'>
                        <h2>0</h2>
                            <h4>Previous Year Questions</h4>
                        </div>
                        <div className='col-3'>
                        <h2>0</h2>
                            <h4>(0/0 new Questions)</h4>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <h3 className='mt-5'>Review (0/30 new Questions)</h3>

                    <div>
                        {
                        data.map((item, key)=>(
                        <p>{key+1})  {item.question}
                        <br/>
                        <button className="btn btn-outline-warning">Pick</button>
                        </p>        
                        // <button className="btn btn-success">Pick</button>
                        
                        ))  }
                        
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Questions;
