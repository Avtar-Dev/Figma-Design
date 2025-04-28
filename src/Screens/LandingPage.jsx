import "../App.css";
import Navigation from "../components/Navigation";
import Image from "../components/Image";
import ThreeImg from "../components/ThreeImg";
import TwoImg from "../components/TwoImg";
import SecondComp from "../components/SecondComp";
import FifthComp from "../components/FifthComp";
import SixthComp from "../components/Sixth/SixthComp";
import SeventhComp from "../components/SeventhComp";

const LandingPage = () => {
  return (
    <div className="max-w-auto px-2 pb-2 flex flex-col text-sm gap-8 sm:px-12 sm:min-w-fit sm:flex sm:flex-col sm:gap-16">
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
      <SixthComp />
      <SeventhComp />
    </div>
  );
};

export default LandingPage;
