import React from "react";
import { Link } from "react-router-dom";
import "../styles/Books.css";

const Users = ({ users, deleteUser, setToAdmin }) => {
  return (
    <div className="books">
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/users/${user.id}`}>
                <div className="tamaño">
                  {user.name} {user.lastname}
                </div>
              </Link>
              <div> {user.username} </div>
              <div> {user.address} </div>
              <div> {user.isAdmin ? "This user is admin" : null} </div>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => setToAdmin(user.id)}>
                Toggle admin status
              </button>
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default Users;
