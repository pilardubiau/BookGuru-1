import axios from "axios";

export function getSingleBook(bookId) {
    return axios.get(`/api/books/id/${bookId}`);
}

export function getBookByTitle(input) {
    return axios.get(`/api/books/title/${input}`);
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

export function getBookRatingAxios(bookId) {
    return axios.get(`/api/books/ratings/${bookId}`)
}