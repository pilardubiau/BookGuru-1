import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Books.css";

const Books = ({ books, addOrder }) => {
  const { isAdmin } = useSelector((store) => store.user);

  return (
    <div className="booksMainDiv">
      <div>
        {" "}
        {isAdmin ? (
          <Link to={`/postnewbook`}>
            <button className="addToOrderbutton"> Post New Book </button>
          </Link>
        ) : null}
      </div>
      <div className="books">
        {books &&
          books.map((book) => {
            return (
              <div key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.img} alt="" />
                </Link>
                <div className="tamaño">{book.title.slice(0, 21)}</div>
                <div>Price: {book.price} U$D</div>
                <div>
                  <button
                    onClick={() => addOrder(book.id)}
                    className="addToOrderbutton"
                  >
                    Add to cart
                  </button>
                </div>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Books;
