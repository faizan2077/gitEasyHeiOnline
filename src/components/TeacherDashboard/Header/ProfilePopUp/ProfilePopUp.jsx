import React from "react";
import { Link,useNavigate } from "react-router-dom";

import "./ProfilePopUp.scss";

const ProfilePopUp = ({ setOpen, setEditOpen }) => {
  const navigate=useNavigate()
  const  handlelogout=()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
navigate('/')
  }
  const user=JSON.parse(localStorage.getItem('user'))
  console.log(user,"vgjjjhj")
  return (
    <div className="profilePopUp">
      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className="profilePopUp__profile"
      >
        <img
          src={user.image?user.image:"/assets/images/teacher-dashboard-header-profile.svg"}
          alt="User"
          className="profilePopUp__profile__photo"
        />
        <img
          src="/assets/images/dashboard-header-arrow-down.svg"
          alt="Down Arrow"
          className="profilePopUp__profile__downArrow"
        />
      </div>
      <p className="profilePopUp__name">{user.username}</p>
      <p className="profilePopUp__status">Teacher</p>
      <button
        className="profilePopUp__editBtn"
        onClick={() => {
          setEditOpen((prevState) => !prevState);
          setOpen(false);
        }}
      >
        
        Edit Profile
      </button>
      {/* <button className="profilePopUp__link">My Subscriptions</button> */}
      {/* <button className="profilePopUp__link">Feedback</button> */}
      {/* <div className="profilePopUp__bar"></div> */}
      {/* <Link to="/login" className="profilePopUp__logOut"> */}
        <button onClick={handlelogout}>

        Log Out
        </button>
      {/* </Link> */}
    </div>
  );
};

export default ProfilePopUp;
