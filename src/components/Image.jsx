import React from "react";

const Image = ({ src, alt, cName }) => {
  const myCss = {
    heroImage: "h-110 w-full mt-12",
    // threeImg: "w-fit",
  };

  return <img src={src} alt={alt} className={myCss[cName]} />;
};

export default Image;

//   <div className="flex justify-between gap-20">

//   const threeImages = "w-100 h-100";
