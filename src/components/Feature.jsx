import React from "react";
import feature01 from "../images/-e-upload_icon_1.png";
import feature02 from "../images/-e-upload_icon_2.png";
import feature03 from "../images/-e-upload_icon_3.png";
import feature04 from "../images/-e-upload_icon_4.png";

const Feature = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="feature">
          <div className="feature__content">
            <h1 className="feature__content--heading">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="feature__content--subheading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br />
              Nemo quibusdam ducimus omnis adipisci natus ipsum reiciendis.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <ul className="feature__list">
            <li className="feature__list-item">
              <img src={feature01} alt="Feature 1" />
              <h5 className="feature__list-item--title">
                Lorem ipsum dolor sit
              </h5>
              <p className="feature__list-item--subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li className="feature__list-item">
              <img src={feature02} alt="Feature 2" />
              <h5 className="feature__list-item--title">
                Lorem ipsum dolor sit
              </h5>
              <p className="feature__list-item--subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li className="feature__list-item">
              <img src={feature03} alt="Feature 3" />
              <h5 className="feature__list-item--title">
                Lorem ipsum dolor sit
              </h5>
              <p className="feature__list-item--subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li className="feature__list-item">
              <img src={feature04} alt="Feature 4" />
              <h5 className="feature__list-item--title">
                Lorem ipsum dolor sit
              </h5>
              <p className="feature__list-item--subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
