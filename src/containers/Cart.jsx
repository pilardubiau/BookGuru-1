import React from "react";
import { Link } from "react-router-dom";
import { getUserCart, checkoutOrder } from '../methods/axiosRequests';
import CartTotalPrice from "../hooks/CartTotalPrice";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  React.useEffect(() => {
    getUserCart(user.id, token)
    .then((res) => setCart(res.data));
  }, []);

  // const deleteBook = (BookId) => {
  //   axios.delete("/api/orders", { BookId });
  // };

  // const quantityChange = (quantity, orderId) => {
  //   axios.update("/api/orders/quantity", { quantity, orderId });
  // };

  const Bought = () => {
    checkoutOrder(cart, user.id, token)
    .then(() => {
      alert("Thank you for shopping with us");
      setCart([]);
    });
  };

  return (
    <div className="cart">
      {/* onClick={() => history.push("/previous")} */}
      <Link className="sub-link" to="/previous">
        <button
          className="checkout"
          style={{ textDecoration: "none" }}
        >
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
                    {data.quantity}
                  </td>
                  <td>{data.book.price}</td>
                  <td>{data.book.price * data.quantity}</td>
                  {/* <td> */}
                  {/* onClick={deleteBook(data.id)} */}
                  {/* <button>Delete</button> */}
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

      <button className="checkout" onClick={() => Bought()}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
