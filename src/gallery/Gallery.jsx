import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./Gallery.css";
import { GalleryComponent } from "../components/gallery/gallery";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Gallery = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  console.log(landingPageData)
  return (
    <div>
      {<GalleryComponent data={landingPageData.Gallery} />}
    </div>
  );
};

export default Gallery;
