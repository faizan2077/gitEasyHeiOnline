import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import ComplaintImg from "./ComplaintImg";
import FeedbackImg from "./FeedbackImg";
import Stack from "@mui/material/Stack";
import "./ComplaintsAndFeedbacks.scss";
import ImageUpload from "./ImageUpload";
import ImageUploadFeedback from "./ImageUploadFeedback.js";
import StudentFeedbackTable from "./StudentFeedbackTable";
import StudentComplaintTable from "./StudentComplaintTable";
import TextField from "@mui/material/TextField";
import { Complaintsbyid ,ComplaintdatabyAllteachers} from "../../actions/complaint";

const ariaLabel = { "aria-label": "description" };
const Complaints = () => {
  // functions for mui box
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //usestate for complaint && feedback data
  const [complaintData, setComplaintData] = useState({
    message: "",
    imageUrl: "",
  });
  const [feedbackData, setFeedbackData] = useState({
    message: "",
    imageUrl: "",
  });
  const [feedbackSend, setFeedbackSend] = useState(false)
  const [complaintSend, setComplaintSend] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [complaints, setcomplaints] = useState([]);

  useEffect(() => {}, [complaintData, feedbackData]);
  useEffect(() => {
   initcomplaints()
  }, []);
const initcomplaints=()=>{
  ComplaintdatabyAllteachers(JSON.parse(localStorage.getItem("user"))._id).then((data)=>{
    setcomplaints(data)
    console.log(data)
  })
}
  const complaintSendHandler = async () => {
    const uploadData = {
      query: complaintData.message,
      teacher: JSON.parse(localStorage.getItem("user"))._id,
      mobile: JSON.parse(localStorage.getItem("user")).mobile?JSON.parse(localStorage.getItem("user")).mobile:"no contact",
      image: complaintData.imageUrl,
      feedback: "",
      seprater:"T"
     
    };
    console.log(uploadData)
    // complaintData[0] = messageData
    const res = await fetch("https://api.pariksha247.com/api/complaint", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const response = await res.json();
    if (response) {
      alert("Your complaint has been sent to the admin");
      initcomplaints()
      setFeedbackData({ message: "", imageUrl: "" });
    }
  };
  
  
  const handleChangeComplaint = (e) => {
    setComplaintSend(true);
    setComplaintData({
      ...complaintData,
      message: e.target.value,
    });
    if(!e.target.value.length) setComplaintSend(false)
   
    // if(complaintData.message.size==0) setComplaintSend(false)
  };
  const handleChangeFeedback = (e) => {
    setFeedbackSend(true);
    setFeedbackData({
      ...feedbackData,
      message: e.target.value,
    });
  if (!e.target.value.length) setFeedbackSend(false);
  };
  return (
    <>
      <div className="content2 center">
    
        <div className="complaint-box">
          <Card
            sx={{ maxWidth: 500, borderRadius: "20px", paddingBottom: "15px" }}
          >
            <CardActionArea>
              <div style={{ height: "0px" }}>
               
                {/* <ComplaintImg  /> */}
              </div>

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Have any complains?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Let us know how we can help you with your issue.
                </Typography>
              </CardContent>
            </CardActionArea>
            <ImageUpload
              setComplaintData={setComplaintData}
              complaintData={complaintData}
              setImageUploading={setImageUploading}
            />
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="messageAndSend">
                <TextField
                  id="outlined-multiline-static"
                  className="wid"
                  label="Type your complaint here..."
                  multiline
                  rows={7}
                  defaultValue=""
                  onChange={handleChangeComplaint}
                  color="success"
                  // style={{  borderRadius:"200px" }}
                />
                {complaintSend && !imageUploading ? (
                  <Button
                    variant="outlined"
                    style={{ marginTop: "10px", width: "300px" }}
                    onClick={complaintSendHandler}
                    color="success"
                  >
                    Send
                  </Button>
                ) : (
                  <Button
                    variant="disabled"
                    style={{ marginTop: "10px", width: "300px" }}
                  >
                    Send
                  </Button>
                )}
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="table">
        {/* <StudentFeedbackTable/> */}
        <StudentComplaintTable data={complaints} />
      </div>
    </>
  );
};

export default Complaints;
