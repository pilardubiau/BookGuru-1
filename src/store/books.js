import { createAction, createReducer } from "@reduxjs/toolkit";

//----------todos los libros----------//
export const setBooks = createAction("SET_BOOKS");

const booksReducer = createReducer([], {
  [setBooks]: (state, action) => action.payload,
});

export default booksReducer;
