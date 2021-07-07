import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../store/books";
import { setUser } from "../store/user";
import isUserValidated from "../hooks/isUserValidated";
import { getBookByTitle } from "../methods/axiosRequests";
import Dropdown from './DropdownContainer'
import "../styles/NavBar.css";
const imagen = require("../assets/Logo.png");

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
    const userfb = JSON.parse(localStorage.getItem("user"))
  const [input, setInput] = React.useState("");
    React.useEffect(() => {
       console.log(userfb) 
    }, [userfb])
  const handleChange = (e) => setInput(e.target.value);

  const searchBooks = (e) => {
    e.preventDefault();
    getBookByTitle(input)
      .then((res) => dispatch(setBooks(res.data)))
      .then(() => history.push("/books"));
  };

  const logout = () => {
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    localStorage.clear();
    dispatch(setUser({}));
  };

  return (
    <div className="navBarAndSubRowDiv">
      {/* Search Bar */}
      <div className="row">
        <div className="navbarMainDiv">
          <div className="col-sm-2">
            <Link to="/">
              <img className="logo" src={imagen.default} alt="BookGuru logo" />
            </Link>
          </div>
          <div className="col-sm-6">
            <form style={{ width: "auto" }} onSubmit={searchBooks}>
              {/*  <Link to={'/books'}> */}
              <input
                style={{ width: "40vw" }}
                placeholder="Search books..."
                // inputProps={{ "aria-label": "search" }}
                className="search-bar"
                onChange={handleChange}
              />
              {/* </Link> */}
            </form>
          </div>
          <div className="userCartRegisterDiv">
            {isUserValidated(user) ? (
              <h4
                className="sub-link"
                style={{ textDecoration: "none" }}
              >{`${user.username}`}</h4>
            ) : null}
            <div className="col-sm-4">
              {/* Shopping cart */}
              {isUserValidated(user) ? (
                <Link to="/cart">
                  <div className="icon-cart">
                    <div className="cart-line-1"></div>
                    <div className="cart-line-2"></div>
                    <div className="cart-line-3"></div>
                    <div className="cart-wheel"></div>
                  </div>
                </Link>
              ) : null}
            </div>
            <div className="col-sm-1">
              {/* User icon/menu */}
              <div className="userAndLogInDiv">
                {isUserValidated(user) ? (
                  <Link to={`/users/${user.id}`}>
                    <div className="user"></div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <div className="user"></div>
                  </Link>
                )}
                {/* <div className="dropdown"> */}
                {/* <button class="dropbtn">Dropdown</button> */}
                <div>
                  {!isUserValidated(user) ? (
                    <div>
                      <Link to="/register" className="sub-link">
                        Sign Up
                      </Link>
                      <br />
                      <Link to="/login" className="sub-link">
                        Login
                      </Link>
                    </div>
                  ) : (
                      <>
                    <Link to="/login" className="sub-link" onClick={() => logout()}>
                      Logout
                    </Link>
                    </>
                  )}
                </div>
                {/* </div> */}
                                  </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="sub-row">
        <div className="col-sm-2">
          <Dropdown/>
        </div>
        <div className="col-sm-2">
          <Link to="/books" className="sub-link">
            Books
          </Link>
        </div>
        <div className="col-sm-2">
          <Link to="/contact" className="sub-link">
            Contact
          </Link>
        </div>
        <div className="col-sm-2">
          <Link to="/about" className="sub-link">
            About
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default NavBar;
