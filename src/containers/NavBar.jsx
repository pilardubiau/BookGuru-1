import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../store/books";
import { setUser } from "../store/user";
import { useHistory } from "react-router-dom";
import isUserValidated from "../hooks/isUserValidated";

const imagen = require("../assets/Logo.png");

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const [input, setInput] = React.useState("");
  const [hovered, setHovered] = React.useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/books/title/${input}`)
      .then((res) => dispatch(setBooks(res.data)))
      .then(() => history.push("/books"));
  };

  const clickHandler = () => {
    localStorage.clear();
    dispatch(setUser({}));
  };

  const handleMouseOver = () => {
    setHovered(!hovered);
  };
  const handleMouseLeave = () => {
    setHovered(!hovered);
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
            <form style={{ width: "auto" }} onSubmit={handleSubmit}>
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
              <Link to="/cart">
                <div className="icon-cart">
                  <div className="cart-line-1"></div>
                  <div className="cart-line-2"></div>
                  <div className="cart-line-3"></div>
                  <div className="cart-wheel"></div>
                </div>
              </Link>
            </div>
            <div className="col-sm-1">
              {/* User icon/menu */}
              <div className="userAndLogInDiv">
                <div className="user"></div>
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
                    <Link
                      to="/"
                      className="sub-link"
                      onClick={() => clickHandler()}
                    >
                      Logout
                    </Link>
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
          <Link to="/books" className="sub-link">
            Books
          </Link>
          {/* <div className="dropdown">
            <div className="dropdown-content">
              <Link to="/categories" className="sub-link">
                Categories
              </Link>
              <br />
              <Link to="/author" className="sub-link">
                Author
              </Link>
            </div>
          </div> */}
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

// import React from "react";
// import { Link } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";
// import "../styles/NavBar.css";
// const imagen = require("../assets/Logo.png");

// const NavBar = () => {
//   return (
//     <div>
//       {/* Search Bar */}
//       <br />
//       <div className="row">
//         <div className="col-sm-2">
//           <Link to={`/`}>
//             <img className="logo" src={imagen.default} alt="BookGuru logo" />
//           </Link>
//         </div>
//         <div className="col-sm-8">
//           <input
//             placeholder="Search books..."
//             inputProps={{ "aria-label": "search" }}
//             className="search-bar"
//             //   onChange={handleChange}
//           />
//         </div>
//         <div className="col-sm-1">
//           {/* Shopping cart */}
//           <div class="icon-cart">
//             <div className="cart-line-1"></div>
//             <div className="cart-line-2"></div>
//             <div className="cart-line-3"></div>
//             <div className="cart-wheel"></div>
//           </div>
//         </div>
//         <div className="col-sm-1">
//           {/* User icon/menu */}
//           <div class="dropdown">
//             <Link to={`/register`}>
//               <div className="user">
//                 {/* <button class="dropbtn">Dropdown</button> */}
//                 <div className="dropdown-content">
//                   <a href="#">Sign Up</a>
//                   <br />
//                   <a href="#">Login</a>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <hr />
//       </div>
//       <div className="sub-row">
//         <div className="col-sm-2">Books</div>
//         <div className="col-sm-2">Contact</div>
//         <div className="col-sm-2">About</div>
//         <hr />
//       </div>
//     </div>
//   );
// };

// export default NavBar;
