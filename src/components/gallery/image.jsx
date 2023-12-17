import React from "react";
import InstagramCarousel from "./IgCarousel";

const Image = ({ title, images }) => {
  return (
         <InstagramCarousel title={title} images={images}/>
  );
};

export default Image;
