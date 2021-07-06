import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BooksEdit = ({ moviePropsArray, changeHandler, submitHandler }) => {
  const { singleBook } = useSelector((store) => store);

  return (
    <div className="divEditBookGral">
      {/* <h3>{singleBook.title}</h3> */}
      <hr />
      <div className="dataimg">
        <div>
          <form onSubmit={(e) => submitHandler(e, singleBook.id)}>
            <div className="editMainDiv">
              <div style={{ padding: "1vh 0em" }}>
                <input
                  style={{
                    width: "55vw",
                    textAlign: "center",
                    // padding: "1vh 0em",
                  }}
                  type="text"
                  defaultValue={singleBook.title}
                  name="title"
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="inputImgDiv">
                <div className="editBookDiv">
                  {moviePropsArray.map((item, index) => {
                    return item === "price" || item === "rating" ? (
                      <div className="labelAndInputDiv" key={item}>
                        <label htmlFor={singleBook[item]}>{item}:</label>
                        <input
                          style={{ width: "20vw" }}
                          type="number"
                          defaultValue={singleBook[item]}
                          name={item}
                          onChange={changeHandler}
                        ></input>
                      </div>
                    ) : (
                      <div className="labelAndInputDiv" key={item}>
                        <label htmlFor={singleBook[item]}>{item}:</label>
                        <input
                          style={{ width: "20vw" }}
                          type="text"
                          defaultValue={singleBook[item]}
                          name={item}
                          onChange={changeHandler}
                        ></input>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <img
                    className="singleMovieImageDiv"
                    src={singleBook.img}
                    alt="singleBookImg"
                  />
                </div>
              </div>
              <div className="descriptionAndSaveButtonDiv">
                <label htmlFor="Description">Description:</label>
                <textarea
                  className="descriptionDiv"
                  type="text"
                  defaultValue={singleBook.description}
                  name="description"
                  onChange={changeHandler}
                ></textarea>
                <div className="addToCartEditButton">
                  <div className="editSingleButtonDiv">
                    {/* <Link to={`/books/${singleBook.id}`}> */}
                    <button className="onlyButton">Save</button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooksEdit;

{
  /* <label for="Author">Author:</label>
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
                    ></input> */
}
