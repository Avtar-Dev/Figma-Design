import React from "react";

const Image = ({ src, alt, cName }) => {
  const myCss = {
    heroImage: "h-60 sm:h-120 sm:w-full",
    threeImg: "sm:relative sm:rounded-lg",
    logo: "h-20 w-30",
  };
  <div className="h-"></div>;
  return <img src={src} alt={alt} className={myCss[cName]} />;
};

export default Image;
