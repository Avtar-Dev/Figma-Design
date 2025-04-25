import React, { useEffect, useRef, useState } from "react";
import AllTexts from "./TextComp/AllTexts";
import SectionHeading from "./SectionHeading";
import Buttons from "./Buttons/Buttons";

const FifthComp = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="flex justify-between items-start">
      <div ref={contentRef} className="flex flex-col gap-8">
        <SectionHeading heading="Section Heading" />
        <AllTexts />
        <div className="flex gap-3">
          <Buttons cName="smallBtn1" title="Button" />
          <Buttons cName="smallBtn2" title="Secondary Button" />
        </div>
      </div>

      <img
        src="src/assets/LandingPageImages/Image4.png"
        alt="Image"
        className="object-contain"
        style={{ height: `${contentHeight}px` }}
      />
    </div>
  );
};

export default FifthComp;
