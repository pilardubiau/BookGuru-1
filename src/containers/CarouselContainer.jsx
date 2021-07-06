import React, { useEffect } from "react";
import GetRandomBooks from "../hooks/GetRandomBooks";
import CarouselComp from "../components/CarouselComp";

const CarouselContainer = () => {
  const [rndBooks, setRndBooks] = React.useState([]);

  useEffect(() => {
    GetRandomBooks().then(({ data }) => setRndBooks(data));
  }, []);

  return <CarouselComp books={rndBooks.slice(0, rndBooks.length / 2)} />;
};

export default CarouselContainer;
