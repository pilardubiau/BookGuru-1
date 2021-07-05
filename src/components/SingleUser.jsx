import React from "react";
import "../styles/SingleUser.css";

const SingleUser = ({ singleUser }) => {
  return (
    <div className="singleuser">
      <h3>{singleUser.username}</h3>
      <hr />
      <div>
        <div className="data">
          <h5>Name: {singleUser.name}</h5>
          <h5>LastName: {singleUser.lastname}</h5>
          <h5>Address: {singleUser.address}</h5>
          <h5>Username: {singleUser.username}</h5>
          <h5>E-mail: {singleUser.email}</h5>
        </div>
      </div>
      <div className="boton">
        <button>Admin?</button>
      </div>
    </div>
  );
};

export default SingleUser;
