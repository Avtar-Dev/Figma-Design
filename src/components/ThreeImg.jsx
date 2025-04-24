import React from "react";
import Image from "./Image";
import Text from "./TextComp/Text";

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
      text: "Body text for whatever you’d like to share more.",
    },
  ];

  return (
    <div
      data-layer="Frame 1321317456"
      className="Frame1321317456 w-full inline-flex justify-start items-stretch gap-8"
    >
      <div
        data-layer="Card"
        className="Card flex-1 inline-flex flex-col justify-start items-start gap-6 min-h-[500px]"
      >
        <Image
          data-layer="Image"
          src="src/assets/LandingPageImages/Image1.png"
          cName="Image self-stretch h-96 relative rounded-lg"
        />
        <div
          data-layer="Copy"
          className="Copy w-96 flex flex-col justify-center items-start gap-1"
        >
          <Text subHeading={texts[0].subHeading} text={texts[0].text} />
        </div>
      </div>

      <div
        data-layer="Card"
        className="Card flex-1 inline-flex flex-col justify-start items-start gap-6 min-h-[500px]"
      >
        <Image
          src="src/assets/LandingPageImages/Image2.png"
          cName="Image self-stretch h-96 relative rounded-lg"
        />
        <div
          data-layer="Copy"
          className="Copy w-96 flex flex-col justify-center items-start gap-1"
        >
          <Text subHeading={texts[1].subHeading} text={texts[1].text} />
        </div>
      </div>

      <div
        data-layer="Card"
        className="Card flex-1 inline-flex flex-col justify-start items-start gap-6 min-h-[500px]"
      >
        <Image
          src="src/assets/LandingPageImages/Image3.png"
          cName="Image self-stretch h-96 relative rounded-lg"
        />
        <div
          data-layer="Copy"
          className="Copy w-96 flex flex-col justify-center items-start gap-1"
        >
          <Text subHeading={texts[2].subHeading} text={texts[2].text} />
        </div>
      </div>
    </div>
  );
};

export default ThreeImg;
