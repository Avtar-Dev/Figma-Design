import React from "react";
import Buttons from "./Buttons/Buttons";

const Navigation = () => {
  return (
    <div className="flex w-full  justify-between sm:flex sm:justify-between h-20">
      <div className="flex justify-center items-center font-bold">
        <p className="">Anything</p>
      </div>
      <div className="w-full flex justify-end items-center sm:flex sm:justify-between sm:items-center gap-2 sm:w-80">
        <span className="font-bold">Home</span>
        <span className="font-bold">About</span>
        <span className="font-bold">Service</span>
        <Buttons cName={"smallBtn1"} title={"Button"} />
      </div>
    </div>
  );
};

export default Navigation;
