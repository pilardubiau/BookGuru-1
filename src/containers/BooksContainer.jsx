import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../store/books';
import Books from '../components/Books';
import { addOrderAxios, getRandomBooks } from "../methods/axiosRequests";
import "../styles/Books.css";

const BooksContainer = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { books, user } = useSelector(state => state);
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        if (!books.length) {
            getRandomBooks()
            .then(({ data }) => dispatch(setBooks(data)));
        }
    }, []);

    const addOrder = (bookId) =>
    user.id ? addOrderAxios(user, bookId, token) : history.push("/register");
    
    return(
        <Books books={books} addOrder={addOrder} />
    )
};

export default BooksContainer;