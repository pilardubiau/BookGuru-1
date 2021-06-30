import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setBooks = createAction("BOOKS");
  
  const booksReducer = createReducer(
    [],
    {
      [setBooks]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default booksReducer;