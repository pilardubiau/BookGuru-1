import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import SingleBook from '../components/SingleBook';
import { getSingleBook, addOrderAxios } from "../methods/axiosRequests";

const SingleBookContainer = ({ bookId }) => {

    const [singleBook, setSingleBook] = useState({});
    
    const userId = useSelector(state => state.user.id);
    const history = useHistory();

    useEffect(() => {
        getSingleBook(bookId)
        .then(({ data }) => setSingleBook(data));
    },[]);

    const addOrder = (bookId) =>
    userId ? addOrderAxios(bookId, userId) : history.push("/register");

    return(
        <SingleBook singleBook={singleBook} addOrder={addOrder} />
    )
};

export default SingleBookContainer; 