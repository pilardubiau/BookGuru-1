import React, {useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";
import axios from 'axios'


const img1 = require("../assets/lastrealeses1.jpeg");
const img2 = require("../assets/lastrealeses2.jpeg");
const img3 = require("../assets/CoomingSoon2.jpg");
const img4 = require("../assets/CoomingSoon2.jpg");

const Carousel2 = () => {
  const [rndBooks, setRndBooks] = React.useState([])

  useEffect(()=>{
    axios.get('/api/books/home')
    .then(res => res.data)
    .then(randBooks => setRndBooks(randBooks))
  },[])
  return (
    <Carousel className="carousel2">
      <Carousel.Item>
      <h8>Best Sellers</h8> <br />
      Discover our bestselling books and see what's trending worldwide.
        <div className="slideImagediv">
          {" "}
            <img src={rndBooks[0]? rndBooks[27].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[1]? rndBooks[28].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[2]? rndBooks[29].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[3]? rndBooks[30].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[4]? rndBooks[31].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[5]? rndBooks[32].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[6]? rndBooks[33].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[7]? rndBooks[34].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[8]? rndBooks[35].img : null} /* class="d-block w-50" */ alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slideImagediv">
          {" "}
            <img src={rndBooks[0]? rndBooks[36].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[1]? rndBooks[37].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[2]? rndBooks[38].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[3]? rndBooks[39].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[4]? rndBooks[40].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[5]? rndBooks[41].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[6]? rndBooks[42].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[7]? rndBooks[43].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[8]? rndBooks[44].img : null} /* class="d-block w-50" */ alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slideImagediv">
          {" "}
            <img src={rndBooks[0]? rndBooks[45].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[1]? rndBooks[46].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[2]? rndBooks[47].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[3]? rndBooks[48].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[4]? rndBooks[49].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[5]? rndBooks[50].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[6]? rndBooks[51].img : null} /* class="d-block w-50" */ alt="..." />
            <img src={rndBooks[7]? rndBooks[52].img : null} /* class="d-block w-50"  */alt="..." />
            <img src={rndBooks[8]? rndBooks[53].img : null} /* class="d-block w-50" */ alt="..." />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;
