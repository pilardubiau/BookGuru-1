import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setDeletedBookBoolean = createAction("DELETEDBOOKBOOLEAN");
  
  const deletedBookBooleanReducer = createReducer(
    false,
    {
      [setDeletedBookBoolean]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default deletedBookBooleanReducer;