import React from "react";
import "./App.css";
const Buttons = ({ cName, title }) => {
  return <button className={cName}>{title}</button>;
};

export default Buttons;
