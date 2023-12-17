import React from "react";

export const ItemImage = ({ title, link, largeImage, smallImage, elements }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={`/gallery/${link}`} title={title} elements={elements} data-lightbox-gallery="gallery1">
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
        <h4>{title}</h4>
      </div>
    </div>
  );
};
