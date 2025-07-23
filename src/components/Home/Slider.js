import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../images/slider1.png";
import slide2 from "../../images/slider4.png";
import slide3 from "../../images/prod3.png";
import slide4 from "../../images/prod4.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
        <div className="d-flex align-items-center justify-content-center p-4 gap-4 slider-background" style={{ minHeight: '300px' }}>
          <img
            src={slide1}
            alt="First slide"
            className="img-fluid"
            style={{ maxWidth: '250px', maxHeight: '250px', objectFit: 'contain' }}
          />
          <div className="text-start">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex align-items-center justify-content-center p-4 gap-4 slider-background2" style={{ minHeight: '300px' }}>
          <img
            src={slide2}
            alt="Second slide"
            className="img-fluid"
            style={{ maxWidth: '250px', maxHeight: '250px', objectFit: 'contain' }}
          />
          <div className="text-start">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex align-items-center justify-content-center p-4 gap-4 slider-background3" style={{ minHeight: '300px' }}>
          <img
            src={slide3}
            alt="Third slide"
            className="img-fluid"
            style={{ maxWidth: '250px', maxHeight: '250px', objectFit: 'contain' }}
          />
          <div className="text-start">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex align-items-center justify-content-center p-4 gap-4 slider-background4" style={{ minHeight: '300px' }}>
          <img
            src={slide4}
            alt="Fourth slide"
            className="img-fluid"
            style={{ maxWidth: '250px', maxHeight: '250px', objectFit: 'contain' }}
          />
          <div className="text-start">
            <h3>Fourth slide label</h3>
            <p>Another compelling description goes here.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
