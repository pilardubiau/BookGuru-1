import React from "react";
import axios from "axios";
import "../styles/Cart.css";

const Previous = () => {
  const [cart, setCart] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"))
  const token = JSON.parse(localStorage.getItem("token"));

  React.useEffect(() => {
    axios
      .get(`/api/users/${user.id}/checked`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setCart(res.data));
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
        {cart.map((data) => {
          return (
            <tr>
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
