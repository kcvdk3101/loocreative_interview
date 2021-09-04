import React from "react";
import main from "../images/-e-reason_img_1.png";
import icon01 from "../images/-e-reason_icon_1.png";
import icon02 from "../images/-e-reason_icon_2.png";
import icon03 from "../images/-e-reason_icon_3.png";
import icon04 from "../images/-e-reason_icon_4.png";
import icon05 from "../images/-e-reason_icon_5.png";
import icon06 from "../images/-e-reason_icon_6.png";

const Product = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f4f5f8" }}>
      <div className="container product">
        <h1>Heading</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className="product__feature">
          <div className="product__feature-left">
            <div>
              <img src={icon01} alt="Icon 01" />
              <h5>Title</h5>
              <p>Content</p>
            </div>
            <div>
              <img src={icon03} alt="Icon 03" />
              <h5>Title</h5>
              <p>Content</p>
            </div>
            <div>
              <img src={icon05} alt="Icon 05" />
              <h5>Title</h5>
              <p>Content</p>
            </div>
          </div>
          <div className="product__feature-center">
            <img src={main} alt="Main" />
          </div>
          <div className="product__feature-right">
            <div>
              <img src={icon02} alt="Icon 02" />
              <h5>Title</h5>
              <p>Content</p>
            </div>
            <div>
              <img src={icon04} alt="Icon 04" />
              <h5>Title</h5>
              <p>Content</p>
            </div>
            <div>
              <img src={icon06} alt="Icon 06" />
              <h5>Title</h5>
              <p>Content</p>
            </div>
          </div>
        </div>
        <div className="product__active">
          <p>Lorem ipsum</p>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
