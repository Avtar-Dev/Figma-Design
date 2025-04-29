import React from "react";

const RightSide = ({ headingName, name1, name2, name3, name4 }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-col items-center justify-center">
        <b>{headingName}</b>
      </div>
      <p>{name1}</p>
      <p>{name2}</p>
      <p>{name3}</p>
      <p>{name4}</p>
    </div>
  );
};

export default RightSide;
