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

const ImageUploadFeedback = ({
  setFeedbackData,
  feedbackData,
  setImageUploading,
}) => {
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  const uploadImage = async (e) => {
      setImageUploading(true);
    console.log("feedback Uplaod started");
    const files = e.target.files;
    let formFile = new FormData();
    formFile.append("myFile", e.target.files[0]);
    setLoadingFeedback(true);

    const res = await fetch("https://api.pariksha247.com/api/image-upload", {
      method: "POST",
      // headers: {
      //   Accept: "multipart/form-data",
      // },
      body: formFile,
    });

    const file = await res.json();
    // console.log("this is file ", file)
    if (file) {
      // console.log("file ka secure url", file.secure_url);
      // console.log(file.data[0].url);
      // let arr = [feedbackData[0], file.secure_url];
      setFeedbackData({
        ...feedbackData,
        imageUrl: file.secure_url,
      });
    }

    setLoadingFeedback(false);
    setImageUploading(false);
  };

  // React.useEffect(() => {
  //   console.log("UseEffectfeedback data", feedbackData);
  // }, [feedbackData]);

  return (
    <div>
      <div className="imageUploadContainer">
        <div className="upload-image-logo">
          {/* {!image ? <AddAPhotoIcon /> : null} */}

          {loadingFeedback ? (
            <h3>Loading...</h3>
          ) : (
            <img
              src={feedbackData.imageUrl}
              alt=""
              style={{ width: "120px" }}
            />
          )}
        </div>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={uploadImage}
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

export default ImageUploadFeedback;
