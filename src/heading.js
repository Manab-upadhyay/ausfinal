import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import pic2 from "./auspic1.jpg";
import pic3 from "./Convoca-1-1-1.jpg";

function Heading() {
  return (
    <Carousel style={{ height: '400px' }}> {/* Adjust the height here */}
      <Carousel.Item>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
            style={{  height: '400px' }} // Optional: Adjust the image opacity and height
          />
          <div className="w-96" style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)', color: 'white', textAlign: 'right' }}>
            <h3 className="font-serif text-5xl text-white">Welcome to Assam University Alumni Website</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
            style={{ height: '400px' }} // Optional: Adjust the image opacity and height
          />
          <div className="w-96" style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)', color: 'white', textAlign: 'right' }}>
            <h3 className="font-serif text-5xl text-white">Welcome to Assam University Alumni Website</h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Heading;

