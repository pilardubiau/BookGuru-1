import React from "react";
import "../styles/Cart.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Previous = () => {
  const [cart, SetCart] = React.useState([]);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("Estoy en el previous y este es el token: ", token);

  React.useEffect(() => {
    axios
      .get(`/api/users/${user.id}/checked`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        return SetCart(data);
      });
  });

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
              <td>data.title</td>
              <td>data.author</td>
              <td>data.quantity</td>
              {/* chequear como hacer la formula para multiplicar precio * cantidad */}
              <td>data.price</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Previous;
