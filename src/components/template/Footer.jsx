import React from "react";
import social01 from "../../images/-e-sns_icon_1.png";
import social02 from "../../images/-e-sns_icon_2.png";
import social03 from "../../images/-e-sns_icon_3.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container footer">
        <div className="footer-content">
          <ul className="footer-content__links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            suscipit magni explicabo ea autem quisquam in ullam et quam sapiente
            sint, dolorem excepturi sunt esse? Praesentium voluptatem dolorum
            rem asperiores!
          </p>
          <small>Copyright &copy; GUARDSIGNATURE All rights reserved</small>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="/">
                <img src={social01} alt="Social 1" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={social02} alt="Social 2" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={social03} alt="Social 3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
