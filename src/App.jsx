import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import Gallery from "./gallery/Gallery";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./home/Home";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="container-app">
      <Navigation />
      <div id="container-router-div">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
