import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import "../styles/Category.css";
import { setConstantValue } from "typescript";

const Category = () => {
  const history = useHistory();
  const books = useSelector((state) => state.books);
  const user = useSelector((state) => state.user);
  const [cat, SetCat] = React.useState([]);
  const [value, SetValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`/api/books/category/${value}`)
      .then((data) => {
        SetCat(data);
      })
      .then(() => console.log(cat));
  }, [value]);

  //userid viene del store y el bookid viene como parametro del map de abajo
  /*     const addOrder = (bookId) => {
        const token = localStorage.getItem('token')
        if(!token) {
            history.push("/books")
        }
        else {
            axios.post('/api/orders', {header:'token'}, {userId:user.id, bookId})
        }
    } */
  //   console.log(user);
  return (
    <div className="cat">
      <div class="dropdown-cat">
        {/* <button class="dropbtn">Dropdown</button> */}
        <div className="dropdown-content-cat">
          <ol>
            <Link onClick={() => SetValue("Fiction")}>Fiction</Link>
          </ol>
          <ol>
            <Link onClick={() => SetValue("Fantasy")}>Fantasy</Link>
          </ol>
          <ol>
            <Link onClick={() => SetValue("Childish")}>Childish</Link>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Category;
