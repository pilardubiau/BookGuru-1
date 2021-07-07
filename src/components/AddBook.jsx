import React from "react";

const AddBook = ({ bookPropsArray, changeHandler, submitHandler }) => {

  const categorias = [
    "Biography",
    "Business & Money ",
    "Kids",
    "Classic Literature & Fiction",
    "Comics & Graphic Novels",
    "Cooking",
    "Crime, Thriller, Mystery",
    "Science Fiction & Fantasy",
    "Science",
    "Self-Help",
  ];

  return (
    <div className="divEditBookGral">
      {/* <h3>{singleBook.title}</h3> */}
      {/* <hr /> */}
      <div className="dataimg">
        <div>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="editMainDiv">
              <div className="inputImgDiv">
                <div className="editBookDiv">
                  {bookPropsArray.map((item, index) => {
                    return (
                      <div className="labelAndInputDiv" key={item}>
                        <label>{item}:</label>
                        <input
                          required
                          style={{ width: "20vw" }}
                          name={item}
                          onChange={changeHandler}
                        ></input>
                      </div>
                    );
                  })}
                  <div className="labelAndInputDiv">
                    <label htmlFor="Category">Category:</label>
                    <select
                      required
                      name="category"
                      onChange={(e) => changeHandler(e)}
                      style={{ width: "20vw" }}
                    >
                      <option disabled selected></option>
                      {categorias.map((category, index) => {
                        return (
                          <option value={category} key={index}>
                            {category}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="descriptionAndSaveButtonDiv">
                <label htmlFor="Description">Description:</label>
                <textarea
                  required
                  className="descriptionDiv"
                  type="text"
                  name="description"
                  onChange={changeHandler}
                ></textarea>
                <div className="addToCartEditButton">
                  <div className="editSingleButtonDiv">
                    <button className="onlyButton">Add Book</button>
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

export default AddBook;
