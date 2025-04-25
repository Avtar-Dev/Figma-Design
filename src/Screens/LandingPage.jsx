import React from "react";
import "../App.css";
import Navigation from "../components/Navigation";
import Image from "../components/Image";
import ThreeImg from "../components/ThreeImg";
import TwoImg from "../components/TwoImg";
import SecondComp from "../components/SecondComp";
import FifthComp from "../components/FifthComp";

const LandingPage = () => {
  return (
    <div className="landing-div flex flex-col gap-16">
      <Navigation />
      <SecondComp />
      <Image
        src={"src/assets/LandingPageImages/HeroImage.png"}
        alt={"HeroImage"}
        cName={"heroImage"}
      />
      <ThreeImg />
      <FifthComp />
      <TwoImg />
    </div>
  );
};

export default LandingPage;
