
import React, { useState } from "react";
import { updateprofile, uploadimage } from "../../../../actions/admin";
import "./EditProfile.scss";

const EditProfile = ({ setEditOpen }) => {
  const user=JSON.parse(localStorage.getItem('user'))
  // console.log(user,"vgjjjhj")
  const [username, setUsername] = useState(user.username);
  const [number, setnumber] = useState(user.number);
  const [email, setemail] = useState(user.email);
const [visible, setvisible] = useState(0);
  // const { formdata } = images;
  const [image, setImage] = useState(user.image?user.image:"/assets/images/teacher-dashboard-header-profile.svg");
// const {formdata}=images
  const handleImage = (e) => {
    e.preventDefault()
    console.log(e.target.files[0])
    const formData=new FormData();
   setvisible(1)
 
formData.append("myFile",e.target.files[0]);
// formData.append("data","e.target.files[0]");

console.log(formData)
uploadimage(formData).then((data)=>{
  console.log(data.secure_url)
  // pic=data;
  setImage(data.secure_url)
  setvisible(0)
//  alert(data.secure_url) 
})
  };
  const submitHandler = () => {
    console.log(username);
  updateprofile({username,email,image,number},JSON.parse(localStorage.getItem("token"))).then((result)=>{
  alert(result.message)
  localStorage.setItem("user",JSON.stringify(result.data))
  // {data.data?localStorage.setItem("user",data.data):""}
})
    // Send Data to Backend
    // ...
    setEditOpen(false);
  };

  return (
    <div className="editProfile">
      <h3 className="editProfile__title">Profile Settings</h3>
      <div className="editProfile__main">
        <div className="editProfile__main__right">
          <div className="editProfile__main__right__profile">
            <img
              src={image}
              alt="User"
              className="editProfile__main__right__profile__photo"
            />
                <img
                  src="/assets/images/dashboard-header-upload-image.svg"
                  alt="Down Arrow"
                  className="editProfile__main__right__profile__upload"
                >        
                </img>
          <div>
          </div>
          </div>
      <p className="editProfile__main__right__saveBtn mt-3  bbb">
      <label className="point" style={{margin:'5px'}}>
      Profile update
      <input
      type="file"
      id="customFile"
      hidden
      onChange={handleImage}
      required
    />
    </label>
    </p>
        </div>
        <div className="editProfile__main__left">
          <p className="editProfile__main__left__title">Name</p>
          <input
            type={"text"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="editProfile__main__left__value"
          />
          <p className="editProfile__main__left__title">
            Phone
            <img
              src="/assets/images/dashboard-header-lock-icon.svg"
              alt="Lock"
              className="editProfile__main__left__title__icon"
            />
          </p>
          <p className="editProfile__main__left__value editProfile__main__left__value--disabled">
          <input
            type={"text"}
            value={number}
            onChange={(e) => setnumber(e.target.value)}
            className="editProfile__main__left__value"
            readOnly
          />
          </p>
          <p className="editProfile__main__left__title">
            Email Id
            <img
              src="/assets/images/dashboard-header-lock-icon.svg"
              alt="Lock"
              className="editProfile__main__left__title__icon"
            />
          </p>
          <p className="editProfile__main__left__value editProfile__main__left__value--disabled">
          <input
            type={"text"}
            value={email}
            onChange={(e) => console.log(e.target.value)}
            className="editProfile__main__left__value"
            readOnly
          />
          </p>
          <p className="editProfile__main__left__title"><label>
          Profile
          <img
              src="/assets/images/dashboard-header-lock-icon.svg"
              alt="Lock"
              className="editProfile__main__left__title__icon"
            />
          <input
                type="file"
                hidden
                onChange={handleImage}
                required
              />
          </label>
          </p>
          <p className="editProfile__main__left__value">Teacher</p>
          {visible==1?       <button
            onClick={submitHandler}
            className="editProfile__main__right__saveBtn"
            disabled
          >
            uploading....
          </button>:       <button
            onClick={submitHandler}
            className="editProfile__main__right__saveBtn"

          >
            Save
          </button>}     
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
