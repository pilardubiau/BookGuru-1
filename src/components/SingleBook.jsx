import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const SingleBook = ({singleBook}) => {


  return (
    <div className="">
      <div><img src={singleBook.img} alt="" /></div>
            <h4>Title: {singleBook.title}</h4>
            <br />
            <br />
            <h6>Actors: {singleBook.author}</h6>
            <h6>Genre: {singleBook.category}</h6>
            <div><p>Description: {singleBook.description}</p></div>
            <div>Price: {singleBook.price} $$$</div>            
        <div><button>Add to cart</button></div>
    </div>
  );
};

export default SingleBook;
