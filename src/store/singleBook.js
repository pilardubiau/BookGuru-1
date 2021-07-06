import { createAction, createReducer } from "@reduxjs/toolkit";

//----------todos los libros----------//
export const setSingleBook = createAction("SET_SINGLEBOOK");

const singleBookReducer = createReducer({}, {
  [setSingleBook]: (state, action) => action.payload,
});

export default singleBookReducer;
