import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./Items.css";
import { ItemComponent } from "../components/gallery/item";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Items = (data) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  console.log(data)
  return (
    <div>
      {<ItemComponent data={data} />}
    </div>
  );
};

export default Items;
