import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="container banner__content">
        <div className="banner__content--text">
          <h1>Lorem, ipsum dolor sit amet </h1>
          <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            illum, in eos eaque a voluptate ratione consequuntur harum molestiae
            officiis voluptatem aliquid minus, non quis autem possimus
            consectetur laborum. Adipisci.
          </p>
        </div>
        <div className="banner__content--action">
          <p>
            lorem ipsum{" "}
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
