import React from "react";
import "../styles/Cart.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("esto es el user: ", user);

  React.useEffect(() => {
    axios
      .get(`/api/users/${user.id}/cart`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setCart(res.data));
    // .then(({ data }) => setCart((cart) => [...cart, data]));
  }, []);

  // const deleteBook = (BookId) => {
  //   axios.delete("/api/orders", { BookId });
  // };

  // const quantityChange = (quantity, orderId) => {
  //   axios.update("/api/orders/quantity", { quantity, orderId });
  // };

  const Bought = () => {
    axios({
      method: "put",
      url: "/api/orders/checkout",
      data: {
        orders: cart,
        userId: user.id,
      },
      headers: { authorization: `Bearer ${token}` },
    }).then(() => {
      alert("Thank you for shopping with us");
      setCart([]);
    });
  };

  return (
    <div className="cart">
      {/* onClick={() => history.push("/previous")} */}
      <Link to="/previous">
        <button className="checkout sub-link">Previous Orders</button>
      </Link>
      {/* Cart table */}
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
        {cart &&
          cart.map((data) => {
            return (
              <div>
                <tr>
                  <td>{data.book.title}</td>
                  <td>{data.book.author}</td>
                  <td>
                    {/* onChange={quantityChange(data.quantity, data.orderId)} */}
                    {/* <input>data.quantity</input> */}
                    {data.quantity}
                  </td>
                  <td>{data.book.price}</td>
                  <td>
                    {/* onClick={deleteBook(data.id)} */}
                    <button>Delete</button>
                  </td>
                </tr>
              </div>
            );
          })}
        <td>Total</td>
        <td></td>
      </table>

      <button className="checkout" onClick={() => Bought()}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
