import React from "react";
import SectionHeading from "../SectionHeading";
import BoxComp from "./BoxComp";
import Avatar from "../../assets/LandingPageImages/Avatar.png";
import Avatar1 from "../../assets/LandingPageImages/Avatar1.png";
import Avatar3 from "../../assets/LandingPageImages/Avatar3.png";

const SixthComp = () => {
  const boxData = [
    {
      heading: "“A terrific piece of praise”",
      image: Avatar, // Use the imported image directly
      name: "Cavin",
      description: "Description",
    },
    {
      heading: "“A fantastic bit of feedback”",
      image: Avatar1, // Use the imported image directly
      name: "Shane",
      description: "Description",
    },
    {
      heading: "“A genuinely glowing review”",
      image: Avatar3, // Use the imported image directly
      name: "Lucas",
      description: "Description",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading heading={"Section Heading"} />
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-5 sm:justify-between">
        {boxData.map((box, index) => (
          <BoxComp
            key={index}
            heading={box.heading}
            image={box.image}
            name={box.name}
            description={box.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SixthComp;
