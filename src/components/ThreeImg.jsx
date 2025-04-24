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
      text: "Body text for whatever you’d like to expand on the main pointbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.",
    },
    {
      subHeading: "Subheading",
      text: "Body text for whatever you’d like to share more.",
    },
  ];

  return (
    // <div className="flex justify-between w-full">
    //   <div className="h-5xl w-5xl">
    //     <Image
    //       src={"src/assets/LandingPageImages/Image1.png"}
    //       cName={"threeImg"}
    //     />
    //     <Text subHeading={texts[0].subHeading} text={texts[0].text} />
    //   </div>

    //   <div className="h-5xl flex flex-col justify-center items-center w-5xl">
    //     <Image
    //       src={"src/assets/LandingPageImages/Image2.png"}
    //       cName={"threeImg"}
    //     />
    //     <Text subHeading={texts[1].subHeading} text={texts[1].text} />
    //   </div>

    //   <div className="w-5xl h-5xl flex flex-col items-end">
    //     <Image
    //       src={"src/assets/LandingPageImages/Image3.png"}
    //       cName={"threeImg"}
    //     />
    //     <Text subHeading={texts[2].subHeading} text={texts[2].text} />
    //   </div>
    // </div>

    <div className="grid grid-cols-3 gap-x-8 w-full">
      {/* Left block */}
      <div className="flex flex-col items-start">
        <Image
          src={"src/assets/LandingPageImages/Image1.png"}
          cName="max-w-full h-auto"
        />
        <Text subHeading={texts[0].subHeading} text={texts[0].text} />
      </div>

      {/* Center block */}
      <div className="flex flex-col items-center ">
        <Image
          src={"src/assets/LandingPageImages/Image2.png"}
          cName="max-w-full h-auto"
        />
        <div className="max-w-min break-words flex flex-col items-start">
          <Text
            subHeading={texts[1].subHeading}
            text={texts[1].text}
            cName={"flex flex-col items-start"}
          />
        </div>
      </div>

      {/* Right block */}
      <div className="flex flex-col items-end">
        <Image
          src={"src/assets/LandingPageImages/Image3.png"}
          cName="max-w-full h-auto"
        />
        <Text subHeading={texts[2].subHeading} text={texts[2].text} />
      </div>
    </div>
  );
};

export default ThreeImg;
