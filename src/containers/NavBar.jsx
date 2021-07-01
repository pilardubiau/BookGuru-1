import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../styles/NavBar.css";
const imagen = require("../assets/Logo.png");

const NavBar = () => {
  return (
    <div>
      {/* Search Bar */}
      <br />
      <div className="row">
        <div className="col-sm-2">
          <Link to={`/`}>
            <img className="logo" src={imagen.default} alt="BookGuru logo" />
          </Link>
        </div>
        <div className="col-sm-8">
          <input
            placeholder="Search books..."
            inputProps={{ "aria-label": "search" }}
            className="search-bar"
            //   onChange={handleChange}
          />
        </div>
        <div className="col-sm-1">
          {/* Shopping cart */}
          <div class="icon-cart">
            <div className="cart-line-1"></div>
            <div className="cart-line-2"></div>
            <div className="cart-line-3"></div>
            <div className="cart-wheel"></div>
          </div>
        </div>
        <div className="col-sm-1">
          {/* User icon/menu */}
          <div class="dropdown">
            <Link to={`/register`}>
              <div className="user">
                {/* <button class="dropbtn">Dropdown</button> */}
                <div className="dropdown-content">
                  <a href="#">Sign Up</a>
                  <br />
                  <a href="#">Login</a>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="sub-row">
        <div className="col-sm-2">Books</div>
        <div className="col-sm-2">Contact</div>
        <div className="col-sm-2">About</div>
        <hr />
      </div>
    </div>
  );
};

export default NavBar;
