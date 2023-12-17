import React from "react";
import InstagramCarousel from "./IgCarousel";

export const ItemComponent = (data) => {
  console.log(data)
  return (
    <div id="bolsos" className="text-center">
      <div className="container">
        {/* <div className="section-title">
          <h2>Galería</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div> */}
        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.data.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <InstagramCarousel title={d.title} images={d.images} style={{ height: "80vw" }} />
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.description}</p>
                  </div>

                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

