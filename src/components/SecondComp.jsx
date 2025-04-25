import React from "react";
import MainHeading from "./MainHeading";
import Buttons from "./Buttons/Buttons";

const SecondComp = () => {
  const headingData = [
    {
      heading: "Landing Page Title ",
      title:
        "Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.",
    },
  ];
  return (
    <div className="heading-div">
      <MainHeading
        heading={headingData[0].heading}
        title={headingData[0].title}
      />
      <Buttons cName={"btn1"} title={"Click"} />
    </div>
  );
};

export default SecondComp;
