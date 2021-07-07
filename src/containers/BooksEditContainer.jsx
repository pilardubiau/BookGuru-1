import React from "react";
import "../styles/SingleBook.css";
import { useState } from "react";
import BooksEdit from "../components/BooksEdit";
import { useHistory } from "react-router-dom";
import { updateSingleBook, deleteBookAxios } from "../axiosRequests/booksRequests";
import { useDispatch } from "react-redux";
import { setDeletedBookBoolean } from "../store/deletedBookBoolean";
import SuccessToast from "../hooks/toastNotifications/SuccessToast";
import store from "../store/store"

const BooksEditContainer = () => {
  const [bookUpdatedProps, setBookUpdatedProps] = useState({});
  const dispatch = useDispatch()
  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    setBookUpdatedProps({ ...bookUpdatedProps, [key]: value });
  };

  function submitHandler(e, bookId) {
    e.preventDefault();
    updateSingleBook(bookId, bookUpdatedProps)
      .then((res) => {
        SuccessToast("✨ 📚 Book updated!✨ 📚")
        if (res.data) history.push(`/books/${bookId}`);
      })
      .catch((err) => console.log(err));
  }

  const bookPropsArray = [
    "author",
    "category",
    "publisher",
    "rating",
    "price",
  ];

  const deleteBook = (e, bookId) => {
    e.preventDefault();
    deleteBookAxios(bookId).then(() => {
      dispatch(setDeletedBookBoolean(!store.getState().deletedBookBoolean))
      SuccessToast("🦥Book deleted!🦥")
      history.push(`/books`);
    });
  };

  return (
    <BooksEdit
      bookPropsArray={bookPropsArray}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      deleteBook={deleteBook}
    />
  );
};

export default BooksEditContainer;
