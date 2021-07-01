import React from "react";
import "../styles/Cart.css";
import axios from "axios";
// import userId from 'localStorage'

const Cart = () => {
  const [cart, SetCart] = React.useState([]);

  // React.useEffect(() => {
  //   axios.get(`/api/users/${userId}/cart`).then(({ data }) => {
  //     return SetCart(data);
  //   });
  // });

  const deleteBook = (BookId) => {
    axios.delete("/api/orders", { BookId });
  };

  const quantityChange = (quantity, orderId) => {
    axios.update("/api/orders/quantity", { quantity, orderId });
  };

  return (
    <div className="cart">
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
      </table>
    </div>
  );
};

export default Cart;
