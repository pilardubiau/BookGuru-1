import React from "react";
import "../styles/Cart.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, SetCart] = React.useState([]);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("Estoy en el cart y este es el token: ", token);

  React.useEffect(() => {
    axios
      .get(`/api/users/${user.id}/cart`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        return SetCart(data);
      });
  });

  const deleteBook = (BookId) => {
    axios.delete("/api/orders", { BookId });
  };

  const quantityChange = (quantity, orderId) => {
    axios.update("/api/orders/quantity", { quantity, orderId });
  };

  const Bought = (cart) => {
    axios
      .put("/api/orders/checkout", { cart })
      .then(() => alert("Thank you for shopping with us"));
  };

  return (
    <div className="cart">
      <button className="checkout" onClick={() => history.push("/previous")}>
        Previous Orders
      </button>
      {/* Cart table */}
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
        {cart.map((data) => {
          return (
            <tr>
              <td>data.title</td>
              <td>data.author</td>
              <td>
                <input onChange={quantityChange(data.quantity, data.orderId)}>
                  data.quantity
                </input>
              </td>
              <td>data.price</td>
              <td>
                <button onClick={deleteBook(data.id)}></button>
              </td>
            </tr>
          );
        })}
        <td>Total</td>
        <td></td>
      </table>
      <button className="checkout" onClick={Bought(cart)}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
