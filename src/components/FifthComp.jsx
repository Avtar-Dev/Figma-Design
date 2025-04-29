import React, { useEffect, useRef, useState } from "react";
import AllTexts from "./TextComp/AllTexts";
import SectionHeading from "./SectionHeading";
import Buttons from "./Buttons/Buttons";
import Image4 from "../assets/LandingPageImages/Image4.webp";
const FifthComp = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="min-w-full flex flex-col gap-3 overflow-hidden sm:max-w-full sm:flex sm:flex-row sm:justify-between sm:items-start">
      <div
        ref={contentRef}
        className="flex flex-col justify-center  gap-8 sm:flex sm:flex-col sm:gap-8">
        <SectionHeading heading="Section Heading" />
        <AllTexts />
        <div className="flex gap-3">
          <Buttons cName="smallBtn1" title="Button" />
          <Buttons cName="smallBtn2" title="Secondary Button" />
        </div>
      </div>

      <img
        src={Image4}
        alt="Image"
        // className="max-w-auto"
        style={{ height: `${contentHeight}px` }}
      />
    </div>
  );
};

export default FifthComp;
