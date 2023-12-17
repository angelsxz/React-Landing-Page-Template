import { ItemImage } from "./itemImage";
import React from "react";

export const GalleryComponent = (props) => {
  console.log(props);

  // Check if 'data' is available
  if (!props.data) {
    return <div>Loading...</div>; // or any other loading indicator
  }
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.components.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <ItemImage 
                      title={`${d.title}`} 
                      link={`${d.link}`} 
                      largeImage={`${d.largeImage}`} 
                      smallImage={`${d.smallImage}`}
                      data={`${d.elements}`}
                    ></ItemImage>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
