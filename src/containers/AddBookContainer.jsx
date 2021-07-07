import React from "react";
import "../styles/SingleBook.css";
import { useState } from "react";
import PostBook from "../components/PostBook";
import { useHistory } from "react-router-dom";
import { postBookAxios } from "../axiosRequests/booksRequests";
import { useDispatch } from "react-redux";
import SuccessToast from "../hooks/toastNotifications/SuccessToast";
import WarningToast from "../hooks/toastNotifications/WarningToast"

const AddBookContainer = () => {
  const [newBookProps, setNewBookProps] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setNewBookProps({ ...newBookProps, [key]: value });
  };

  function submitHandler(e) {
    e.preventDefault();
    postBookAxios(newBookProps)
      .then(() => {
        SuccessToast("✨ Book created📚 ✨");
        history.push(`/books`);
      })
      .catch((err) => WarningToast("🦥Book already exists🦥"));
  }

  const bookPropsArray = [
    "title",
    "author",
    "img",
    "price",
    "publisher",
    "maturityRating",
  ];

  return (
    <PostBook
      bookPropsArray={bookPropsArray}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default AddBookContainer;
