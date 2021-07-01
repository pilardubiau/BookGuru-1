import {createAction, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect } from 'react';


//----------todos los libros----------//
export const setBooks = createAction('SET_BOOKS')

const booksReducer = createReducer([], {
    [setBooks]: (state, action) => action.payload
});

export const sendBooks = (nameBook="harry potter") => (dispatch) => {
    return(
        useEffect(()=>{
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=id=${nameBook}`)
            .then(({data}) => {dispatch(setBooks(data));
                return data
                })
        },[])
    )
}

export default booksReducer;