import axios from "axios";

export function getAllOrders() {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.get(`/api/orders/admin/checked`, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function addOrderAxios(bookId, userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  axios({
    method: "post",
    url: "/api/orders",
    data: { userId, bookId },
    headers: { authorization: `Bearer ${token}` },
  })
    .then(() => alert("Item has been successfully added to cart!"))
    .catch(() => alert("Book already added to cart"));
}

export function checkoutOrder(cart) {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  return axios({
    method: "put",
    url: "/api/orders/checkout",
    data: {
      orders: cart,
      userId: user.id,
    },
    headers: { authorization: `Bearer ${token}` },
  });
}

export function deleteOrderAxios(orderId) {
  return axios.delete("/api/orders", { data: { orderId } });
}

export function updateQuantity(quantity, orderId) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "put",
    url: "/api/orders/quantity",
    data: { quantity, orderId },
    headers: { authorization: `Bearer ${token}` },
  });
}
