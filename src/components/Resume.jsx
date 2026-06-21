import React from "react";
import Resume_file from "../styling/images/files/Resume.pdf";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Resume = () => {
  const onButtonClick = async () => {
    try {
      const response = await axios.get(Resume_file, { responseType: "blob" });
      const fileURL = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Lucifer's Resume";
      link.click();
    } catch (error) {
      console.error(`Error downloading the Resume: ${error}`);
      alert("OOPS! An Error Occured");
    }
  };
 
  return (
    <div id="resume" class="" style={{ justifySelf: "center" }}>
      <button
        className="btn btn-primary download btn-lg"
        onClick={onButtonClick}
      >
        View my Resume
      </button>
    </div>
  );
};

export default Resume;
