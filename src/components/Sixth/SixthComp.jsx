import React from "react";
import SectionHeading from "../SectionHeading";
import BoxComp from "./BoxComp";

const SixthComp = () => {
  const boxData = [
    {
      heading: "“A terrific piece of praise”",
      image: "src/assets/LandingPageImages/Avatar.png",
      name: "Cavin",
      description: "Description",
    },
    {
      heading: "“A fantastic bit of feedback”",
      image: "src/assets/LandingPageImages/Avatar1.png",
      name: "Shane",
      description: "Description",
    },
    {
      heading: "“A genuinely glowing review”",
      image: "src/assets/LandingPageImages/Avatar3.png",
      name: "Lucas",
      description: "Description",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading heading={"Section Heading"} />
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-5 sm:justify-between">
        <BoxComp
          heading={boxData[0].heading}
          image={boxData[0].image}
          name={boxData[0].name}
          description={boxData[0].description}
        />
        <BoxComp
          heading={boxData[1].heading}
          image={boxData[1].image}
          name={boxData[1].name}
          description={boxData[1].description}
        />
        <BoxComp
          heading={boxData[2].heading}
          image={boxData[2].image}
          name={boxData[2].name}
          description={boxData[2].description}
        />
      </div>
    </div>
  );
};

export default SixthComp;
