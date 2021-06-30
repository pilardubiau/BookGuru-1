import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

const img1 = require("../assets/lastrealeses1.jpeg");
const img2 = require("../assets/lastrealeses2.jpeg");
const img3 = require("../assets/CoomingSoon2.jpg");
const img4 = require("../assets/CoomingSoon2.jpg");

const Carousel1 = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
      <h8>Latest Releases</h8> <br />
      Discover the very latest titles from the worlds of fiction, non-fiction and children’s. These great volumes are all out now.
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

export default Carousel1;
