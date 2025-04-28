import React from "react";

const MainHeading = ({ heading, title }) => {
  return (
    <div className="w-full flex flex-col sm:w-xl sm:flex sm:flex-col sm:items-start">
      <h4 className="text-[xx-large]">
        <b>{heading}</b>
      </h4>
      <div className="text-[15px]">{title}</div>
    </div>
  );
};

export default MainHeading;
