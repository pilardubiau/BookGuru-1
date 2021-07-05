import axios from "axios";

export function getSingleBook(bookId) {
  return axios.get(`/api/books/id/${bookId}`);
}

// export function getUserCart() {
//     const token = JSON.parse(localStorage.getItem("token"));
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user) {
//       return axios.get(`/api/users/${user.id}/cart`, {
//         headers: { authorization: `Bearer ${token}` },
//       });
//     } else return new Promise(() => []);
//   }

export function getSingleUser(UserId) {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.get(`/api/users/user/${UserId}`, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function getBookByTitle(input) {
  return axios.get(`/api/books/title/${input}`);
}

export function addOrderAxios(bookId, userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  axios({
    method: "post",
    url: "/api/orders",
    data: { userId, bookId },
    headers: { authorization: `Bearer ${token}` },
  }).then(() => alert("Item has been successfully added to cart!"));
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

export function getRandomBooks() {
  return axios.get(`/api/books/home`);
}

export function getUserCart() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return axios.get(`/api/users/${user.id}/cart`, {
      headers: { authorization: `Bearer ${token}` },
    });
  } else return new Promise(() => []);
}

export function getUserPrevious() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return axios.get(`/api/users/${user.id}/checked`, {
      headers: { authorization: `Bearer ${token}` },
    });
  } else return new Promise(() => []);
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

export function getAllUsers() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.isAdmin) {
    return axios({
      method: "get",
      url: "/api/users",
      headers: { authorization: `Bearer ${token}` },
      data: { userId: user.id },
    });
  } else return new Promise(() => []);
}

export function deleteUserAxios() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  return axios({
    method: "delete",
    url: "/api/users",
    headers: { authorization: `Bearer ${token}` },
  });
}
