import React from "react";
import { Link } from "react-router-dom";
import {
  getUserCart,
  checkoutOrder,
  deleteOrderAxios,
  updateQuantity,
} from "../methods/axiosRequests";
import CartTotalPrice from "../hooks/CartTotalPrice";
import "../styles/Cart.css";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    getUserCart().then((res) => setCart(res.data.sort((a, b) => a.id - b.id)));
  }, []);

  const deleteOrder = (orderId) => {
    deleteOrderAxios(orderId)
      .then(() => getUserCart())
      .then((res) => setCart(res.data));
  };

  const quantityHandler = (quantity, orderId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    updateQuantity(quantity, orderId)
      .then(() => getUserCart())
      .then((res) => setCart(res.data));
  };

  const checkout = () => {
    checkoutOrder(cart).then(() => {
      alert("Thank you for shopping with us");
      setCart([]);
    });
  };

  return (
    <div className="cart">
      {/* onClick={() => history.push("/previous")} */}
      <Link className="sub-link" to="/previous">
        <button className="checkout" style={{ textDecoration: "none" }}>
          Previous Orders
        </button>
      </Link>
      {/* Cart table */}
      <table className="table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {cart &&
            cart.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.book.title}</td>
                  <td>{data.book.author}</td>
                  <td>
                    {/* onChange={quantityChange(data.quantity, data.orderId)} */}
                    {/* <input>data.quantity</input> */}
                    <button
                      className="button-cart"
                      name="decrease"
                      onClick={() =>
                        quantityHandler(data.quantity - 1, data.id)
                      }
                    >
                      -
                    </button>
                    {data.quantity}
                    <button
                      className="button-cart"
                      name="increase"
                      onClick={() =>
                        quantityHandler(data.quantity + 1, data.id)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td>{data.book.price}</td>
                  <td>{data.book.price * data.quantity}</td>
                  <td>
                    {/* onClick={deleteBook(data.id)} */}
                    <button
                      className="button-cart"
                      onClick={() => deleteOrder(data.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: {CartTotalPrice(cart)}</td>
          </tr>
        </tfoot>
      </table>

      <button className="checkout" onClick={() => checkout()}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
