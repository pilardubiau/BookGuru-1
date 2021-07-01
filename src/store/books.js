import {createAction, createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';


//----------todos los libros----------//
export const setBooks = createAction('SET_BOOKS')


const booksReducer = createReducer([], {
    [setBooks]: (state, action) => action.payload
})

export default booksReducer;

