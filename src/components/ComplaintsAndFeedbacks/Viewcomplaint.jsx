import React, { useState,useEffect } from 'react'
import { Complaintdatabyid, updateResponse } from '../../actions/complaint';
import { Link, useParams,useNavigate } from 'react-router-dom'

import "./ComplaintsAndFeedbacks.scss";
import ImageUpload from './Image2';

function Viewcomplaint() {
  const [complaint, setcomplaint] = useState("");
  const [image, setimage] = useState("");
  const [response, setresponse] = useState("");
  const id =useParams().id
  const navigate=useNavigate()
  useEffect(() => {
    Complaintdatabyid(id).then((data)=>{
      setcomplaint(data)
      setImageUploading(data.image)
      setimage(data.response?data.response.image:"")
      setresponse(data.response?data.response.answer:"")
      return complaint;
    })
  }, []);
  const [ImageUploading, setImageUploading] = useState("");
 console.log(complaint,image)
 
 const handlechange =(e)=>{
 setresponse(e.target.value)
 }
 const handleview =(e)=>{
  e.preventDefault()
  window.open(complaint.image);
 }
 const handleview2 =(e)=>{
  e.preventDefault()
  window.open(complaint.response?complaint.response.image:"");
 }


 const handleSubmit =(e)=>{
  e.preventDefault()
  var data ={
    answer:response,
    image:image,
    complaint:complaint._id
  }
  console.log(data)
  updateResponse(data).then((data)=>{
    
    alert("response is send")
navigate("/complaints")
  })
 }
  return (
    <div className='h'>
      
      <form >
      <div className='center2 mb-4'>
 
      <h4 className=''>Complaint Details</h4>
      </div>
      <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10 ">
      <label type="text" className="form-control" cols="40" rows="5" id="inputEmail3" value={complaint.query} placeholder="Complaint">{complaint.student?complaint.student.username:""}</label>
    </div>
  </div>
  
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Complaint</label>
    <div className="col-sm-10 ">
      <textarea type="text" className="form-control" cols="40" rows="5" id="inputEmail3" value={complaint.query} placeholder="Complaint"/>
    </div>
  </div>
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Mobile No.</label>
    <div className="col-sm-10 ">
      <input type="number" className="form-control" id="inputEmail3"value={complaint.mobile} placeholder="Number"/>
    </div>
  </div>
 
 

  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Complaint Image</label>
    <div className="col-sm-10">
    

      <img className='img' src={complaint.image} height="90px" onClick={(e)=>handleview(e)} width={"120px"}/>
       

     
    </div>
  </div>
 {complaint.response?<div> <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Response Image</label>

    <div className="col-sm-10 pb-3">
      {/* <Link to={complaint.image}> */}
      {/* <img src={complaint.image} height="100px" width={"100px"}/> */}
      {/* </Link> */}
      <img className='img' src={complaint.response.image} onClick={(e)=>handleview(e)} height="90px" width={"120px"}/>
     
      {/* <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/> */}
    </div>
  </div>
  <div className="form-group row pb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Response</label>
    <div className="col-sm-10">
      <textarea type="text" className="form-control"  cols="40" rows="5" id="inputPassword3" value={response} onChange={(e)=>handlechange(e)} placeholder="Response"/>
    </div>
  </div>
  </div>:""}
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Date of Issued</label>
    <div className="col-sm-10 ">
      <label type="text" className="form-control" cols="40" rows="5" id="inputEmail3" value={complaint.query} placeholder="Complaint">{complaint.updatedAt?complaint.updatedAt.substring(0, 10):""}</label>
    </div>
  </div> 
  
 
</form>



    </div>
  )
}

export default Viewcomplaint