import React from "react";
import "./App.css";
import Buttons from "../Buttons/Buttons";

const Navigation = () => {
  return (
    <div className="navigation-main">
      <div className="sitename">
        <p>Anything</p>
      </div>
      <div className="page">
        <span>Home</span>
        <span>About</span>
        <span>Service</span>
        <Buttons cName={"smallBtn1"} title={"Button"} />
      </div>
    </div>
  );
};

export default Navigation;
