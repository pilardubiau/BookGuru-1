import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";


const img1 = require("../assets/lastrealeses1.jpeg");
const img2 = require("../assets/lastrealeses2.jpeg");
const img3 = require("../assets/CoomingSoon2.jpg");
const img4 = require("../assets/CoomingSoon2.jpg");

const Carousel2 = () => {
  return (
    <Carousel className="carousel2">
      <Carousel.Item>
      <h8>Best Sellers</h8> <br />
      Discover our bestselling books and see what's trending worldwide.
        <div className="slideImagediv">
          {" "}
          <img src={img1.default} class="d-block w-50" alt="..." />
          <img src={img2.default} class="d-block w-50" alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slideImagediv">
          {" "}
          <img src={img3.default} class="d-block w-50" alt="..." />
          <img src={img4.default} class="d-block w-50" alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slideImagediv">
          {" "}
          <img src={img1.default} class="d-block w-50" alt="..." />
          <img src={img2.default} class="d-block w-50" alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;
