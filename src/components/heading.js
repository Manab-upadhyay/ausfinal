import React from "react";
import { Carousel } from "react-bootstrap";

function Heading() {
  return (
    <Carousel style={{ height: "600px" }}>
      {" "}
      {/* Adjust the height here */}
      <Carousel.Item>
        <div style={{ position: "relative", textAlign: "center" }}>
          <img
            className="d-block w-100"
            src="/assets/homeCarouselImages/ausPic3.jpg"
            alt="Second slide"
            style={{ height: "600px", objectFit: "cover" }} // Optional: Adjust the image opacity and height
          />
          <div
            className="w-96"
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              transform: "translateY(-50%)",
              color: "white",
              textAlign: "right",
            }}
          >
            <h3 className="font-serif font-bold text-5xl text-white">
              Welcome to Assam University Alumni Website
            </h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: "relative", textAlign: "center" }}>
          <img
            className="d-block w-100"
            src="/assets/homeCarouselImages/ausPic2.jpg"
            alt="Third slide"
            style={{ height: "600px", objectFit: "cover" }} // Optional: Adjust the image opacity and height
          />
          <div
            className="w-96"
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              transform: "translateY(-50%)",
              color: "white",
              textAlign: "right",
            }}
          >
            <h3 className="font-serif font-bold text-5xl text-white shadow">
              Welcome to Assam University Alumni Website
            </h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Heading;
