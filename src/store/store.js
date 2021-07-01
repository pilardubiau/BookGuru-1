import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Reducers
import booksReducer from "./books";
import bookIdReducer from "./bookId";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookId: bookIdReducer,
  },
});

export default store;
