import React from "react";
import Image from "./Image";
import Text from "./TextComp/Text";
import SectionHeading from "./SectionHeading";
import Image1 from "../assets/LandingPageImages/Image1.webp";
import Image2 from "../assets/LandingPageImages/Image2.webp";
import Image3 from "../assets/LandingPageImages/Image3.webp";
const ThreeImg = () => {
  const texts = [
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to add more to the subheading.",
    },
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to expand on the main point.",
    },
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to share more .",
    },
  ];

  return (
    <div className="flex flex-col gap-8 sm:flex sm:flex-col sm:gap-10">
      <SectionHeading heading={"Section Heading"} />
      <div className="flex flex-col gap-4 items-center sm:w-full sm:flex sm:flex-row sm:justify-between sm:items-start sm:gap-20">
        <div className="xl:w-100 inline-flex flex-col justify-start items-start gap-6">
          <Image src={Image1} cName="threeImg" />
          <div className="flex flex-col justify-start items-start gap-1">
            <Text subHeading={texts[0].subHeading} text={texts[0].text} />
          </div>
        </div>

        <div className="xl:w-100 inline-flex flex-col justify-start items-start gap-6">
          <Image src={Image2} cName="threeImg" />
          <div className="flex flex-col justify-center items-start gap-1">
            <Text subHeading={texts[1].subHeading} text={texts[1].text} />
          </div>
        </div>

        <div className="xl:w-100 h- inline-flex flex-col justify-start items-start gap-6">
          <Image src={Image3} cName="threeImg" />
          <div className="flex flex-col justify-center items-start gap-1">
            <Text subHeading={texts[2].subHeading} text={texts[2].text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeImg;
