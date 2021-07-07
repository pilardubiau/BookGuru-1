import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../store/books';
import BooksSearch from '../components/BooksSearch';
import { getRandomBooks } from "../axiosRequests/booksRequests";
import { addOrderAxios } from '../axiosRequests/ordersRequests';
import "../styles/Books.css";

const SearchContainer = () => {

    const history = useHistory();
   /*  const dispatch = useDispatch(); */
    const { books, user } = useSelector(state => state);

 /*    useEffect(() => {
        getRandomBooks()
        .then(({ data }) => dispatch(setBooks(data)));
    }, []); */

    const addOrder = (bookId) =>
    user.id ? addOrderAxios(bookId, user.id) : history.push("/register");
    
    return(
        <BooksSearch books={books} addOrder={addOrder} />
    )
};

export default SearchContainer;