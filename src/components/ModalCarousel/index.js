import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

function ModalCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {images.map((image) => {
        return (
          <Carousel.Item className="carousel-item" key={image}>
            <img
              className="carousel-image d-block w-100"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ModalCarousel;
