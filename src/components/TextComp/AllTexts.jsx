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
    <div className="main-container">
      {texts.map((item, index) => (
        <Text key={index} subHeading={item.subHeading} text={item.text} />
      ))}
    </div>
  );
};

export default AllTexts;
