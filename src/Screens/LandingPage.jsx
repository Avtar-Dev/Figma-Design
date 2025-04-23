import React from "react";
import "../App.css";
import AllTexts from "../components/TextComp/AllTexts";
import SectionHeading from "../components/SectionHeading";
import MainHeading from "../components/LandingHeading/MainHeading";
import Buttons from "../components/Buttons/Buttons";
import Navigation from "../components/Navigation/Navigation";

const LandingPage = () => {
  const headingData = [
    {
      heading: "Landing Page Title ",
      title:
        "Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.",
    },
  ];
  return (
    <div className="landing-div">
      <Navigation />
      <div className="heading-div">
        <MainHeading
          heading={headingData[0].heading}
          title={headingData[0].title}
        />
        <Buttons cName={"btn1"} title={"Click"} />
        <SectionHeading heading={"Section Heading"} />
        <AllTexts />
      </div>
    </div>
  );
};

export default LandingPage;
