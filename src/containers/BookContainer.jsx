
import React from 'react';
import Books from '../components/Books'
import {useDispatch} from 'react-redux';
import {sendBooks} from '../store/books';

import "../styles/Books.css"

const BookContainer = () => {
    const dispatch = useDispatch()
    dispatch(sendBooks())
    
    return(
        <div>
            <Books/>
        </div>
    )
};

export default BookContainer;