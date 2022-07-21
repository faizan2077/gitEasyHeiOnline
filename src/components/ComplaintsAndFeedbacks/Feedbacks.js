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
import { Complaintsbyid,feedbacksbyid } from "../../actions/complaint";

const ariaLabel = { "aria-label": "description" };
const Feedbacks = () => {
  // functions for mui box
  const [value, setValue] = React.useState("Controlled");
const [complaints, setcomplaints] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    initcomplaints()
   }, []);
 const initcomplaints=()=>{
  feedbacksbyid(JSON.parse(localStorage.getItem("user"))._id).then((data)=>{
     setcomplaints(data)
     console.log(data)
   })
 }
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
  const [feedbacks, setfeedbacks] = useState([]);
  const [imageUploading, setImageUploading] = useState(false)

  useEffect(() => {}, [complaintData, feedbackData]);
 
  const complaintSendHandler = async () => {
    const uploadData = {
      query: complaintData.message,
      student: JSON.parse(localStorage.getItem("user"))._id,
      mobile: JSON.parse(localStorage.getItem("user")).mobile?JSON.parse(localStorage.getItem("user")).mobile:"no contact",
      image: complaintData.imageUrl,
      feedback: "",
    };
    // complaintData[0] = messageData
    const res = await fetch("https://api.pariksha247.com/api/complaint", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: complaintData.message,
        student:JSON.parse(localStorage.getItem("user"))._id,
        mobile: JSON.parse(localStorage.getItem("user")).mobile?JSON.parse(localStorage.getItem("user")).mobile:"no contact",
        image: complaintData.imageUrl,
        feedback: "",
      }),
    });
    const response = await res.json();
    if (response) {
      alert("Your complaint has been sent to the admin");
    }
    setFeedbackData({ message: "", imageUrl: "" });
  };
  const feedbackSendHandler = async () => {
    const uploadData = {
      query: "",
      student: JSON.parse(localStorage.getItem("user"))._id,
      mobile: JSON.parse(localStorage.getItem("user")).mobile?JSON.parse(localStorage.getItem("user")).mobile:"no contact",
      image: feedbackData.imageUrl,
      feedback: feedbackData.message,
    };

    const res = await fetch("https://api.pariksha247.com/api/complaint", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "",
        student: JSON.parse(localStorage.getItem("user"))._id,
        mobile: JSON.parse(localStorage.getItem("user")).mobile?JSON.parse(localStorage.getItem("user")).mobile:"no contact",
        image: feedbackData.imageUrl,
        feedback: feedbackData.message,
      }),
    });

    const response = await res.json();
    if (response) {
      alert("Your feedback has been sent to the admin");
      setFeedbackData({ message: "", imageUrl: "" });
      initcomplaints()
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
        <div className="feedback-box">
          <Card
            sx={{ maxWidth: 500, borderRadius: "20px", paddingBottom: "15px" }}
          >
            <CardActionArea>
              <div style={{ height: "0px" }}>
                {" "}
                {/* <FeedbackImg /> */}
              </div>

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Please give us a feedback!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Help us improve with your valuable feedback :)
                </Typography>
              </CardContent>
            </CardActionArea>
            <ImageUploadFeedback
              setFeedbackData={setFeedbackData}
              feedbackData={feedbackData}
              setImageUploading={setImageUploading}
            />
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* text field and send button for feedback */}
              <div className="messageAndSend">
                <TextField
                  id="outlined-multiline-static"
                  label="Type your feedback here..."
                  multiline
                  className="wid"
                  rows={7}
                  defaultValue=""
                  onChange={handleChangeFeedback}
                  color="success"
                  // style={{  borderRadius:"200px" }}
                />

                {feedbackSend && !imageUploading ? (
                  <Button
                    variant="outlined"
                    style={{ marginTop: "10px", width: "300px" }}
                    onClick={feedbackSendHandler}
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
        <StudentFeedbackTable data ={complaints}/>
        {/* <StudentComplaintTable /> */}
      </div>
    </>
  );
};

export default Feedbacks;
