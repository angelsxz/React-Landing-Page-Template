import React, { useState, useEffect } from "react";
import { Header } from "../components/home/header";
import { About } from "../components/home/about";
import { Contact } from "../components/home/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./Home.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  console.log(landingPageData)
  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
