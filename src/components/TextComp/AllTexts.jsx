import React from "react";
import Text from "./Text";

const AllTexts = () => {
  const texts = [
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to expand on the main point.",
    },
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes.",
    },
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to add more to the main point. It provides details, explanations, and context.",
    },
  ];

  return (
    <div className="flex flex-col h-auto gap-[18px] xl:w-[315px]">
      {texts.map((item, index) => (
        <Text key={index} subHeading={item.subHeading} text={item.text} />
      ))}
    </div>
  );
};

export default AllTexts;
