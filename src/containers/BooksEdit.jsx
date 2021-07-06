import React from "react";
import "../styles/SingleBook.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BooksEdit = ({}) => {
  const { singleBook } = useSelector((store) => store);

  return (
    <div className="divEditBookGral">
      <h3>{singleBook.title}</h3>
      <hr />
      <div className="dataimg">
        {/* <div className="formAndImgDiv"> */}
          <div>
            <form>
              <div className="inputImgDiv">
                  <div className="editBookDiv">
                    <label for="Author">Author:</label>
                    <input
                      type="text"
                      value={singleBook.author}
                      name="author"
                    ></input>
                    <label for="Genre">Genre:</label>
                    <input
                      type="text"
                      value={singleBook.category}
                      name="genre"
                    ></input>
                    <label for="Publisher">Publisher:</label>
                    <input
                      type="text"
                      value={singleBook.publisher}
                      name="publisher"
                    ></input>
                    <label for="Rating">Rating:</label>
                    <input
                      type="text"
                      value={singleBook.rating}
                      name="rating"
                    ></input>
                    <label for="Price">Price:</label>
                    <input
                      type="text"
                      value={singleBook.price}
                      name="price"
                    ></input>
                  </div>

                  <img src={singleBook.img} alt="" />
              </div>
              <div className="descriptionAndSaveButtonDiv">
                <label for="Description">Description:</label>
                <input
                  className="descriptionDiv"
                  type="text"
                  value={singleBook.description}
                  name="description"
                ></input>
                <div className="addToCartEditButton">
                  <div className="boton">
                    <Link to="/edit">
                      <button>Save</button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default BooksEdit;
