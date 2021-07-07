import { createAction, createReducer } from "@reduxjs/toolkit";

//----------Agarra la entrada del search----------//
export const setInput = createAction("SET_INPUT");

const inputReducer = createReducer("", {
  [setInput]: (state, action) => action.payload,
});

export default inputReducer;