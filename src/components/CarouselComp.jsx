import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

const CarouselComp = ({ books }) => {

  return (
    <div className="car">
        <h6>Latest Releases</h6>
        Discover the very latest titles from the worlds of fiction, non-fiction
        and children’s. These great volumes are all out now.
        <Carousel>
            <Carousel.Item>
                <div className="slideImagediv">
                <img
              src={books[0] ? books[0].img : null}
               alt="..."
            />
            <img
              src={books[1] ? books[1].img : null}
               alt="..."
            />
            <img
              src={books[2] ? books[2].img : null}
               alt="..."
            />
            <img
              src={books[3] ? books[3].img : null}
               alt="..."
            />
            <img
              src={books[4] ? books[4].img : null}
               alt="..."
            />
            <img
              src={books[5] ? books[5].img : null}
               alt="..."
            />
            <img
              src={books[6] ? books[6].img : null}
               alt="..."
            />
            <img
              src={books[7] ? books[7].img : null}
               alt="..."
            />
            <img
              src={books[8] ? books[8].img : null}
               alt="..."
            />
                </div>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselComp;