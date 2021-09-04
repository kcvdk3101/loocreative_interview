import React from "react";

const Serial = ({
  isLightMode,
  isAlignLeft,
  image,
  alt,
  subheading,
  heading,
  content,
}) => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: isLightMode ? "#fff" : "#f4f5f8" }}
    >
      <div
        className={
          isAlignLeft
            ? "container serial serial-left"
            : "container serial serial-right"
        }
      >
        <img src={image} alt={alt} />
        <div className="serial__content">
          <small className="serial__content--subheading">{subheading}</small>
          <h1 className="serial__content--heading">{heading}</h1>
          <p className="serial__content--paragraph">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Serial;
