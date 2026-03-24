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
  // const onButtonClick = () => {
  //   fetch(Resume_file).then((response) => {
  //     response.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob);
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "Resume.pdf";
  //       alink.click();
  //     });
  //   });
  // };
  return (
    <div id="resume" style={{ justifySelf: "center" }}>
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
