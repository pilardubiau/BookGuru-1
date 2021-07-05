import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Books.css"

const Users = ({users, deleteUser}) => {

    return(
        <div className="books">
            {users && users.map(user=> {
                return(
                    <div key={user.id}>
                        {/* <Link to={`/books/${book.id}`}>
                            <img src={book.img} alt="" />
                        </Link> */}
                        <div className="tamaño">{user.name} {user.lastname}</div>
                        <div> {user.username} </div>               
                        <div><button onClick={()=>deleteUser()} >Delete</button></div>
                        <br />
                    </div>
                )}
            )}
        </div>
    )
};

export default Users;