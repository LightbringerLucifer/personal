// import react from "react";
import "../styling/main.css";
import facebook from "../styling/images/facebook.png";
import x from "../styling/images/X.png";
import linkedin from "../styling/images/linked.png";
// import insta from "../styling/images/instagram.png";
import gmail from "../styling/images/gmail.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <div>
      {/* // header start */}
      <div id="top" className="header-bg">
        <div className="header">
          <div className="container py-5">
            {/* <div className="absolute-center"> */}
            <div className="row align-items-end py-5">
              <div className="col-lg-8 col-12 my-5 py-5">
                <h1
                  className="info animated fadeInDown"
                >
                  <a href="" className="logo">
                    Hi
                    <br />I am <u>Nikhil Kumar Singh</u>
                  </a>
                  <br />
                  <strong>
                    I <span>create</span> Websites
                    <br />
                    Frontend <span>Development</span>
                  </strong>
                </h1>
                <a href="#skills" className="btn scroll animated bounceInUp">
                  Skills
                </a>
                <a href="#contact" className="btn scroll animated bounceInDown">
                  Contact
                </a>
                <a href="#resume" className="btn scroll animated bounceInDown">
                  Resume
                </a>
              </div>

              <div className="col-lg-4 col-12 icon-box">
                <div className="connect-icon animated wobble ">
                  {/* <div> */}
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/nikhil-singh-704336346"
                    target="_blank"
                  >
                    <img alt="linkedIn" src={linkedin} height="48" loading="lazy" />
                  </a>
                  {/* </div> */}
                  {/* Facebook */}
                  {/* <div className="prof-links "> */}
                  <a href="#">
                    <img alt="facebook" src={facebook} width="48" loading="lazy" />
                  </a>
                  {/* Twitter */}
                  <a href="#">
                    <img alt="X" src={x} width="48"  loading="lazy"/>
                  </a>
                  {/* Instagram */}
                  {/* <a href="https://www.instagram.com/" target="_blank">
                        <img
                          alt="instagram"
                          src={insta}
                          width="48"
                          loading="lazy"
                        />
                      </a> */}
                  {/* Gmail */}
                  <a href="https://www.gmail.com/" target="_blank">
                    <img alt="gmail" src={gmail} width="58" loading="lazy" />
                  </a>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* // header end */}
    </div>
  );
};

export default Header;
