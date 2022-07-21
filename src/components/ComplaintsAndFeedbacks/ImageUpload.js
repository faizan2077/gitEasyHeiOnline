import React, { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

const ImageUpload = ({
  setComplaintData,
  complaintData,
  setImageUploading,
}) => {
  const [loading, setLoading] = useState(false);

  const uploadImage2 = async (e) => {
      setImageUploading(true);
    console.log("ho rha hia ");

    const files = e.target.files;
    let formFile = new FormData();
    formFile.append("myFile", e.target.files[0]);
    setLoading(true);

    const res = await fetch("https://api.pariksha247.com/api/image-upload", {
      method: "POST",
      // headers: {
      //   Accept: "multipart/form-data",
      // },
      body: formFile,
    });

    const file = await res.json();
    if (file) {
      // console.log(file);
      // console.log(file.data[0].url);
      // let arr = [complaintData[0], file.data[0].url]
      setComplaintData({
        ...complaintData,
        imageUrl: file.secure_url,
      });
      // console.log(complaintData,"ye hai ")
    }

    setLoading(false);
    setImageUploading(false);
  };
  return (
    <div>
      <div className="imageUploadContainer">
        <div className="upload-image-logo">
          {/* {!image ? <AddAPhotoIcon /> : null} */}

          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <img
              src={complaintData.imageUrl}
              alt=""
              style={{ width: "120px" }}
            />
          )}
        </div>
        <label htmlFor="contained-button-file2">
          <Input
            accept="image/*"
            id="contained-button-file2"
            multiple
            type="file"
            onChange={uploadImage2}
          />
          <Button
            variant="contained"
            component="span"
            style={{ backgroundColor: "#29AB87" }}
          >
            Upload Image
          </Button>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
