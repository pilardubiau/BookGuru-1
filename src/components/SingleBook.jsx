import React from "react";
import "../styles/SingleBook.css";
import { useSelector, useDispatch} from "react-redux";
import { isConstructorDeclaration } from "typescript";
import {Link} from "react-router-dom"
import { setSingleBook } from '../store/singleBook';

const SingleBook = ({ singleBook, addOrder }) => {

  const { isAdmin } = useSelector((store) => store.user);

  const dispatch= useDispatch()
  dispatch(setSingleBook(singleBook))

  return (
    <div className="singlebook">
      <h3>{singleBook.title}</h3>
      <hr />
      <div className="dataimg">
        <div className="data">
          <h5>Author: {singleBook.author}</h5>
          <h5>Genre: {singleBook.category}</h5>
          <h5>Publisher: {singleBook.publisher}</h5>
          <h5>Rating: {singleBook.rating}</h5>
          <h5>Price: U$D {singleBook.price}</h5>
        </div>
        <img src={singleBook.img} alt="" />
      </div>
      <br />
      <div>
        <p>{singleBook.description}</p>
      </div>
      <div className="addToCartEditButton">
        <div className="boton">
          <button onClick={() => addOrder(singleBook.id)}>Add to cart</button>
        </div>
        {isAdmin ? (
          <div className="boton">
         <Link to="/edit"> <button>Edit</button></Link>  
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleBook;



