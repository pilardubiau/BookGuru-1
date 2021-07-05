import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import SingleBook from '../components/SingleBook';
import { getSingleBook, addOrderAxios } from "../methods/axiosRequests";

const SingleBookContainer = ({ bookId }) => {

    const [singleBook, setSingleBook] = React.useState({});
    
    const { user } = useSelector(state => state);
    const token = JSON.parse(localStorage.getItem('token')); 
    const history = useHistory();

    useEffect(() => {
        getSingleBook(bookId)
        .then(({ data }) => setSingleBook(data));
    },[]);

    const addOrder = (bookId) =>
    user.id ? addOrderAxios(user, bookId, token) : history.push("/register");

    return(
        <SingleBook singleBook={singleBook} addOrder={addOrder} />
    )
};

export default SingleBookContainer; 