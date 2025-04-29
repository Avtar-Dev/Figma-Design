import React from "react";
import Image from "../Image";
import logos from "../../assets/LandingPageImages/logos.jpg";

const Logos = () => {
  return (
    <div>
      <Image src={logos} cName={"logo"} />
    </div>
  );
};

export default Logos;
