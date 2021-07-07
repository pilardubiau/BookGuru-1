import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SingleBook from "../components/SingleBook";
import {
  getSingleBook,
  getBookRatingAxios,
} from "../axiosRequests/booksRequests";
import { addOrderAxios } from "../axiosRequests/ordersRequests";

const SingleBookContainer = ({ bookId }) => {
  const [singleBook, setSingleBook] = useState({});
  const [rating, setRating] = useState(0);

  const userId = useSelector((state) => state.user.id);
  const history = useHistory();

  useEffect(() => {
    getSingleBook(bookId).then(({ data }) => setSingleBook(data));

    getBookRatingAxios(bookId).then(({ data }) => setRating(data));
  }, [bookId]);

  const addOrder = (bookId) =>
    userId ? addOrderAxios(bookId, userId) : history.push("/register");

  return (
    <SingleBook singleBook={singleBook} addOrder={addOrder} rating={rating} />
  );
};

export default SingleBookContainer;
