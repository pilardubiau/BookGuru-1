import axios from "axios";

export function getSingleBook(bookId) {
  return axios.get(`/api/books/id/${bookId}`);
}

export function getBookByTitle(input) {
  return axios.get(`/api/books/title/${input}`);
}

export function getBookByAuthorOrTitle(input) {
  return axios.get(`/api/books/authorTitle/${input}`);
}

export function getRandomBooks() {
  return axios.get(`/api/books/home`);
}

export function getBooksByCategory(category) {
  return axios.get(`/api/books/category/${category}`);
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

export function deleteBookAxios(bookId) {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "delete",
    url: `/api/books/id/${bookId}`,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function getBookRatingAxios(bookId) {
  return axios.get(`/api/books/ratings/${bookId}`);
}

export function postBookAxios(bookProps) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "post",
    url: `/api/books`,
    data: bookProps,
    headers: { authorization: `Bearer ${token}` },
  });
}
