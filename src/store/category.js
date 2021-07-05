import { createAction, createReducer } from "@reduxjs/toolkit";

//----------todos los libros----------//
export const setCategory = createAction("SET_CATEGORY");

const categoryReducer = createReducer([], {
  [setCategory]: (state, action) => action.payload,
});

export default categoryReducer;