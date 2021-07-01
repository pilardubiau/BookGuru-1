import {createAction, createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect } from 'react';

export const setBookId = createAction('SET_BOOKID')

const booksIdReducer = createReducer([], {
    [setBookId]: (state, action) => action.payload
});

export const sendBookId = (bookId) => (dispatch) => {
    return(
        useEffect(()=>{
            axios.get(`/books/id/${bookId}`)
            .then(({data}) => {dispatch(setBookId(data));
                return data
                })
        },[bookId])
    )
}
export default booksIdReducer;