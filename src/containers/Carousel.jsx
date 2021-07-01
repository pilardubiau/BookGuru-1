import React, {useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";
import axios from 'axios';

const img1 = require("../assets/lastrealeses1.jpeg");
const img2 = require("../assets/lastrealeses2.jpeg");
const img3 = require("../assets/CoomingSoon2.jpg");
const img4 = require("../assets/CoomingSoon2.jpg");

const Carousel1 = () => {
  const [rndBooks, setRndBooks] = React.useState([])

  useEffect(()=>{
    axios.get('/api/books/home')
    .then(res => res.data)
    .then(randBooks => setRndBooks(randBooks))
  },[])

  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <h8>Latest Releases</h8> <br />
        Discover the very latest titles from the worlds of fiction, non-fiction and children’s. These great volumes are all out now.
          <div className="slideImagediv">
            {" "}
            <img src={rndBooks[0]? rndBooks[0].img : null} class="d-block w-50" alt="..." />
            <img src={rndBooks[1]? rndBooks[1].img : null} class="d-block w-50" alt="..." />
          </div>
          <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slideImagediv">
          {" "}
          <img src={rndBooks[2]? rndBooks[2].img : null} class="d-block w-50" alt="..." />
          <img src={rndBooks[3]? rndBooks[3].img : null} class="d-block w-50" alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="slideImagediv">
          {" "}
          <img src={rndBooks[4]? rndBooks[4].img : null} class="d-block w-50" alt="..." />
          <img src={rndBooks[5]? rndBooks[5].img : null} class="d-block w-50" alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default Carousel1;
