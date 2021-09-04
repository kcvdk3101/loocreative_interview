import React from "react";

const Service = ({ isLeft, image, alt, paragraphs }) => {
  return (
    <div className="container-fluid">
      <div
        className={
          isLeft
            ? "container service service-left"
            : "container service service-right"
        }
      >
        <div className="service__content">
          <h1 className="service__content--heading">Heading</h1>
          {paragraphs.map((para, index) => (
            <div key={index} className="service__content--paragraph">
              <h5>{para.heading}</h5>
              <p>{para.content}</p>
            </div>
          ))}
        </div>
        <div className="service__img">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Service;
