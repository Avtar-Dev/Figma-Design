import React from "react";

const Image = ({ src, alt, cName }) => {
  const myCss = {
    heroImage: "h-120 w-full",
  };

  return <img src={src} alt={alt} className={myCss[cName]} />;
};

export default Image;
