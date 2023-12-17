import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InstagramCarousel = ({ title, images }) => {

  return (
    <div style={{display: 'block'}}>
      <Slider>  
        {images && images.map((image) => (
          <div>
            <div key={image.source} style={{width:'100vw', height: '100vw'}}>
              <img 
              src={`/${image.source}`} style={{margin:'25vw 25vw 6.25vw 20vw', width: '50vw', height: '50vw'}} alt={`Instagram ${image.source}`} />
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramCarousel;