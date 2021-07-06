import React from "react";
import { getUserPrevious, getAllUsers } from "../methods/axiosRequests";
import "../styles/Cart.css";

const Previous = () => {
  const [cart, setCart] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getAllUsers().then((res) => setUsers(res.data));
  }, []);

  React.useEffect(() => {
    getUserPrevious().then((res) => setCart(res.data));
  }, []);

  return (
    <div className="cart">
      {/* Cart table */}
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map((data, index) => {
          console.log("esto es users: ", users);
          return (
            <tr key={index}>
              <td>{data.book.title}</td>
              <td>{data.book.author}</td>
              <td>{data.quantity}</td>
              {/* chequear como hacer la formula para multiplicar precio * cantidad */}
              <td>{data.book.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Previous;