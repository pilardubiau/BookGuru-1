import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Reducers
import booksReducer from "./books";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});

export default store;
