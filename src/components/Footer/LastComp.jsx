import React from "react";
import Logos from "./Logos";
import FooterName from "./FooterName";
import RightSide from "./RightSide";

const LastComp = () => {
  const data = [
    {
      headingName: "Topic 1",
      name1: "Page 1",
      name2: "Page 2",
      name3: "Page 3",
      name4: "Page 4",
    },
    {
      headingName: "Topic 2",
      name1: "Page 1",
      name2: "Page 2",
      name3: "Page 3",
      name4: "Page 4",
    },
    {
      headingName: "Topic 2",
      name1: "Page 1",
      name2: "Page 2",
      name3: "Page 3",
      name4: "Page 4",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 sm:flex sm:flex-row sm:justify-between sm:p-8">
      <div className="w-full sm:w-fit flex sm:flex-col justify-between sm:justify-between items-center">
        <FooterName />
        <Logos />
      </div>
      <div className="w-full sm:w-fit justify-between flex gap-4 sm:gap-8">
        <RightSide
          headingName={data[0].headingName}
          name1={data[0].name1}
          name2={data[0].name2}
          name3={data[0].name3}
          name4={data[0].name4}
        />
        <RightSide
          headingName={data[1].headingName}
          name1={data[1].name1}
          name2={data[1].name2}
          name3={data[1].name3}
          name4={data[1].name4}
        />
        <RightSide
          headingName={data[2].headingName}
          name1={data[2].name1}
          name2={data[2].name2}
          name3={data[2].name3}
          name4={data[2].name4}
        />
      </div>
    </div>
  );
};

export default LastComp;
