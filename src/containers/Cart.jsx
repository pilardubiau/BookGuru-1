import React from "react";
import "../styles/Cart.css";

const Cart = () => {
  return (
    <div>
      {/* Cart table */}
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;