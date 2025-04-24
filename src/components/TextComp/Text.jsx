import React from "react";
import "./App.css";
const Text = ({ subHeading, text, cName }) => {
  return (
    <div className="main">
      <div className="heading">{subHeading}</div>
      <div className={`text ${cName}`}>{text}</div>
    </div>
  );
};

export default Text;
