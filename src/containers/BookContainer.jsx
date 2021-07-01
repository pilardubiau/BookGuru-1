
import React from 'react';
import Books from '../components/Books'
import {useDispatch} from 'react-redux';
import {sendBooks} from '../store/books';

import "../styles/Books.css"

const BookContainer = () => {
    
    return(
        <div>
            <Books/>
        </div>
    )
};

export default BookContainer;