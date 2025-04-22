import React from "react";
import "./App.css";
const Text = ({ subHeading, text }) => {
  return (
    <div className="main">
      <div className="heading">{subHeading}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Text;
