import { createAction, createReducer } from "@reduxjs/toolkit";

//----------todos los libros----------//
export const setTypeCategory = createAction("SET_TYPE_CATEGORY");

const typeCategoryReducer = createReducer('', {
  [setTypeCategory]: (state, action) => action.payload,
});

export default typeCategoryReducer;
