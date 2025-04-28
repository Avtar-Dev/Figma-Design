import React from "react";
import Image from "../Image";

const BoxComp = ({ heading, name, image, description }) => {
  return (
    <div className="w-full flex flex:col border-[0.1px] border-[#828282] p-4">
      <div className="flex flex-col gap-6">
        <h4 className="text-xl font-bold">{heading}</h4>
        <div className="flex gap-3">
          <Image src={image} />
          <div>
            <p>
              <b>{name}</b>
            </p>
            <p className="text-[#828282]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxComp;
