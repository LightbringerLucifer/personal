import React from "react";
import react_logo from "../Styling/images/testimonials/react.png";
import html_logo from "../Styling/images/testimonials/html.png";
import css_logo from "../Styling/images/testimonials/css.png";
import js_logo from "../Styling/images/testimonials/js.png";
import jquery_logo from "../Styling/images/testimonials/jquery.png";
import boot_logo from "../Styling/images/testimonials/bootstrap.png";
import redux_logo from "../Styling/images/testimonials/redux.png";
import rb_logo from "../Styling/images/testimonials/react_bootstrap.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Skills = () => {
  return (
    <div id="skills" className="testimonials-bg">
      <div className="testimonials center">
        <div className="container">
          <h2>Skills</h2>

          <div
            id="carousel-testimonials"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/*React  */}
              <div className="carousel-item active animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="react"
                    src={react_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>React JS</p>
                <span>
                  A Javascript library developed and maintained by
                  META(Facebook)
                </span>
              </div>

              {/* HTML */}
              <div className="carousel-item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="hmtl"
                    src={html_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>HTML</p>
                <span>
                  Hyper Text Markup Language to let browser understand the basic
                  structure of your site
                </span>
              </div>

              {/* CSS */}
              <div className="carousel-item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="css"
                    src={css_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>CSS</p>
                <span>Cascading Style Sheet for the makeover of your site</span>
              </div>

              {/* Javascript */}
              <div className="carousel-item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="JS"
                    src={js_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>Javascript</p>
                <span>Used to add Interactivity to your website</span>
              </div>

              {/* JQuery */}
              <div className="carousel-item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="jquery"
                    src={jquery_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>JQuery</p>
                <span>Used Short-hand javascript</span>
              </div>
              {/* Bootstrap */}
              <div className="carousel-item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="bootstrap"
                    src={boot_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>Bootstrap</p>
                <span>
                  Open-source framework for responsive and mobile-first websites
                </span>
              </div>

              {/* Redux */}
              <div className="carousel-item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="redux"
                    src={redux_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>Redux</p>
                <span>State-management library</span>
              </div>

              {/* react-bootstrap */}
              <div className="carousel-item animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="react-bootstrap"
                    src={rb_logo}
                    width="100"
                    className="img-circle"
                    loading="lazy"
                  />
                </span>
                <p>React-Bootstrap</p>
                <span>Similar to Bootstrap but modified for React JS</span>
              </div>
            </div>

            {/* <!-- Controls --> */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-testimonials"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel-testimonials"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
