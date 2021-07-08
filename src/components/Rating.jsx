import React from "react";

const Rating = ({submitHandler, changeHandler, data}) => {
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e, data.userId, data.bookId)}>
        <input
          min="1"
          max="5"
          type="number"
          name="rating"
          style={{ height: "3vh", width: "4vw", outline: "none" }}
          onChange={(e) => changeHandler(e)}
        ></input>
        <button className="ratingButton">
          rate
        </button>
      </form>
    </div>
  );
};

export default Rating;
