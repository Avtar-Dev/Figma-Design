import React from "react";
const Text = ({ subHeading, text, cName }) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="text-[16px] font-medium">{subHeading}</div>
      <div
        className={`text w-70 wrap-break-word text-[15px] text-[#828282] xl:w-full ${cName}`}>
        {text}
      </div>
    </div>
  );
};

export default Text;
