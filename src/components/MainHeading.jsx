import React from "react";

const MainHeading = ({ heading, title }) => {
  return (
    <div className="w-[26vw]">
      <h4 className="text-[xx-large]">
        <b>{heading}</b>
      </h4>
      <div className="text-[15px]">{title}</div>
    </div>
  );
};

export default MainHeading;
