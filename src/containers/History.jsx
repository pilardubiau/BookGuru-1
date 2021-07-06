import React from "react";
import { getAllOrders } from "../methods/axiosRequests";
import "../styles/Cart.css";

const Previous = () => {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("esto es user: ", user);
    if (user.isAdmin === true) getAllOrders().then((res) => setCart(res.data));
  }, []);

  return (
    <div className="cart">
      {/* Cart table */}
      <table className="table">
        <tr>
          <th>User Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {console.log("esto es cart: ", cart)}
        {cart.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.userId}</td>
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
