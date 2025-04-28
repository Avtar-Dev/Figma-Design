import React from "react";
import SectionHeading from "./SectionHeading";
import Buttons from "./Buttons/Buttons";

const SeventhComp = () => {
  return (
    <div className="flex flex-col gap-3 items-center sm:flex sm:flex-row sm:justify-between sm:p-10 bg-[#F7F7F7]">
      <SectionHeading heading={"Section Heading"} />
      <div className="flex gap-2">
        <Buttons cName={"btn1"} title={"Button"} />
        <Buttons cName={"btn2"} title={"Secondary Button"} />
      </div>
    </div>
  );
};

export default SeventhComp;
