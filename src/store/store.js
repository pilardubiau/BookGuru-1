import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Reducers
import booksReducer from "./books";
import bookIdReducer from "./bookId";
import userReducer from "./user";
import categoryReducer from "./category";
import typeCategoryReducer from "./stateCategory";
import singleBookReducer from "./singleBook";
import inputReducer from "./input";


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookId: bookIdReducer,
    category: categoryReducer,
    typeCategory: typeCategoryReducer,
    singleBook: singleBookReducer,
    input: inputReducer,
  },
});

export default store;
