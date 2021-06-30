import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Gallery({ items, direction }) {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  };
  return (
    <AliceCarousel
      autoPlay={true}
      autoPlayDirection={direction}
      disableDotsControls={true}
      buttonsDisabled={true}
      keysControlDisabled={true}
      autoPlayInterval="2500"
      infinite={true}
      responsive={responsive}
      items={items}
      paddingLeft={10}
    />
  );
}

export default Gallery;
