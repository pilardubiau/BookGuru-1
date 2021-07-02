import React from "react";
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import '../styles/SingleBook.css'

const SingleBook = ({singleBook}) => {
  const history = useHistory()
  // const books = useSelector((state) => state.books)
  const user = useSelector((state) => state.user)
//userid viene del store y el bookid viene como parametro del map de abajo
      const addOrder = (bookId) => {
      const token = JSON.parse(localStorage.getItem('token'))
      if(!user.id) {
          history.push("/register")
      }
      else {
          axios({
              method: 'post',
              url: '/api/orders',
              data: {
                userId: user.id,
                bookId: bookId
              },
              headers: { authorization: `Bearer ${token}` },
          }).then(()=> alert("Producto agregado al carrito"))
      }
  }

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
        <div><p>{singleBook.description}</p></div>            
        <div className="boton"><button onClick={()=>addOrder(singleBook.id)}>Add to cart</button></div>
    </div>
  );
};

export default SingleBook;
