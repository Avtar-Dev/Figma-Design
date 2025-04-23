import React from "react";
import "./App.css";

const MainHeading = ({ heading, title }) => {
  return (
    <div className="main-head">
      <h4 className="head">
        <b>{heading}</b>
      </h4>
      <div className="title">{title}</div>
    </div>
  );
};

export default MainHeading;
