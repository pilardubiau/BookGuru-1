import axios from "axios";

export function getSingleBook(bookId) {
  return axios.get(`/api/books/id/${bookId}`);
}

export function getSingleUser(userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.get(`/api/users/user/${userId}`, {
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
  console.log(user.id, token);
  if (user && user.isAdmin) {
    return axios({
      method: "get",
      url: `/api/users/all/${user.id}`,
      headers: { authorization: `Bearer ${token}` },
    });
  } else return new Promise(() => []);
}

export function deleteUserAxios(userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "delete",
    url: "/api/users",
    data: { userId: userId },
    headers: { authorization: `Bearer ${token}` },
  });
}

export function setToAdminAxios(userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "put",
    url: `/api/users/toggleAdmin`,
    data: { userId },
    headers: { authorization: `Bearer ${token}` },
  });
}

export function categories(category) {
  return axios.get(`/api/books/category/${category}`);
}

export function getAllOrders() {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.get(`/api/orders/admin/checked`, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function updateSingleBook(bookId, movieUpdatedProps) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "put",
    url: `/api/books/id/${bookId}`,
    data: movieUpdatedProps,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function getBookRatingAxios(bookId) {
  return axios.get(`/api/books/ratings/${bookId}`);
}

export function deleteBookAxios(bookId) {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "delete",
    url: `/api/books/id/${bookId}`,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function addRatingAxios(value, userId, bookId) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "post",
    url: "/api/ratings",
    data: { value, userId, bookId },
    headers: { authorization: `Bearer ${token}` },
  })
}

