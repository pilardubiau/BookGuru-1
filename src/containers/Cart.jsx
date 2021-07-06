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


  const quantityHandler = (quantity, orderId, stock) => {
      if (stock >= quantity) {
        updateQuantity(quantity, orderId)
          .then(() => getUserCart())
          .then((res) => setCart(res.data));
      }
      else {
          alert("no hay suficiente stock")
      }
  }

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
                      disabled={data.quantity <= 1 ? true : false}
                      onClick={() => 
                        quantityHandler(data.quantity - 1, data.id, data.book.stock)
                      }
                    >
                      -
                    </button>
                    {data.quantity <= 1 ? 1 : data.quantity}
                    <button
                      className="button-cart"
                      name="increase"
                      onClick={() =>
                        quantityHandler(data.quantity + 1, data.id, data.book.stock)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td>{data.book.price}</td>
                  <td>{data.quantity > 1 ? data.book.price * data.quantity : data.book.price}</td>
                  <td>
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

      <button className="checkout" disabled={!cart.length > 0 ? true : false} onClick={() => checkout()}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
