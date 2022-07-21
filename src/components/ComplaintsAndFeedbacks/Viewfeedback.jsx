import React, { useState,useEffect } from 'react'
import { Complaintdatabyid, updateResponse } from '../../actions/complaint';
import { Link, useParams,useNavigate } from 'react-router-dom'

import "./ComplaintsAndFeedbacks.scss";
import ImageUpload from './Image2';

function Viewfeedback() {
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
 
      <h4 className=''>Feedback Details</h4>
      </div>
      <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10 ">
      <label type="text" className="form-control" cols="40" rows="5" id="inputEmail3" value={complaint.query} placeholder="Complaint">{complaint.student?complaint.student.username:""}</label>
    </div>
  </div>
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Feedback</label>
    <div className="col-sm-10 ">
      <textarea type="text" className="form-control" cols="40" rows="5" id="inputEmail3" value={complaint.feedback} placeholder="Feedback"/>
    </div>
  </div>
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Mobile No.</label>
    <div className="col-sm-10 ">
      <label type="number" className="form-control"  id="inputEmail3"value={complaint.mobile} placeholder="Number">{complaint.mobile}</label>
    </div>
  </div>
 
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Feedback Image</label>
    <div className="col-sm-10">
    

      <img className='img' src={complaint.image} height="90px" onClick={(e)=>handleview(e)} width={"120px"}/>
       

     
    </div>
  </div>
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Date of Issued</label>
    <div className="col-sm-10 ">
      <label type="text" className="form-control" cols="40" rows="5" id="inputEmail3" value={complaint.query} placeholder="Complaint">{complaint.updatedAt?complaint.updatedAt.substring(0, 10):""}</label>
    </div>
  </div> 
  <div className="form-group row pb-3">
    <div className="col-sm-10">
      {/* <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#093f5d" }}>Submit</button> */}
    </div>
  </div>
</form>



    </div>
  )
}

export default Viewfeedback