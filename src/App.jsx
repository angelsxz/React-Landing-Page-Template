import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/home/navigation";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Items from "./items/Items";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // Check if 'data' is available
  if (!landingPageData.Gallery) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  console.log(landingPageData)
  const bolsosItem = landingPageData.Gallery.items.find(item => item.link === "bolsos").elements;
  const mordedoresItem = landingPageData.Gallery.items.find(item => item.link === "mordedores").elements;
  const panuelosItem = landingPageData.Gallery.items.find(item => item.link === "panuelos").elements;
  const estuchesItem = landingPageData.Gallery.items.find(item => item.link === "estuches").elements;
  const bolsasAseoItem = landingPageData.Gallery.items.find(item => item.link === "bolsas_aseo").elements;


  return (
    <div id="container-app">
      <Navigation />
      <div id="container-router-div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/bolsos" element={<Items data={bolsosItem} />} />
          <Route path="/gallery/mordedores" element={<Items data={mordedoresItem} />} />
          <Route path="/gallery/pañuelos" element={<Items data={panuelosItem} />} />
          <Route path="/gallery/estuches" element={<Items data={estuchesItem} />} />
          <Route path="/gallery/bolsas_aseo" element={<Items data={bolsasAseoItem} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
