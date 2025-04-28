import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "./Image";
import Text from "./TextComp/Text";

const TwoImg = () => {
  const texts = [
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to add more to the subheading.",
    },
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to expand on the main point.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading heading={"Section Heading"} />
      <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:justify-between">
        <div className="inline-flex flex-col justify-start items-start gap-6">
          <Image src="src/assets/LandingPageImages/Image5.png" cName="" />
          <div className="flex flex-col justify-center items-start gap-1">
            <Text subHeading={texts[0].subHeading} text={texts[0].text} />
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-6">
          <Image src="src/assets/LandingPageImages/Image6.png" cName="" />
          <div className="flex flex-col justify-center items-start gap-1">
            <Text subHeading={texts[1].subHeading} text={texts[1].text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoImg;
