import axios from 'axios';

export function getSingleBook(bookId) {
    return axios.get(`/api/books/id/${bookId}`);
}

export function getBookByTitle(input) {
    return axios.get(`/api/books/title/${input}`)
}

export function addOrderAxios(bookId, userId) {
    
    const token = JSON.parse(localStorage.getItem('token'));

    axios({
        method: 'post',
        url: '/api/orders',
        data: { userId, bookId },
        headers: { authorization: `Bearer ${token}` },
    }).then(()=> alert("Producto agregado al carrito"));
}

export function getRandomBooks() {
    return axios.get(`/api/books/home`)
}

export function getUserCart() {

    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        return axios
        .get(`/api/users/${user.id}/cart`, {
            headers: { authorization: `Bearer ${token}` },
        }) 
    }
    else return new Promise(() => []);

}

export function getUserPrevious() {

    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        return axios
        .get(`/api/users/${user.id}/checked`, {
            headers: { authorization: `Bearer ${token}` },
        })
    }
    else return new Promise(() => []);
}

export function checkoutOrder(cart) {

    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem("user"));

    return axios({
        method: "put",
        url: "/api/orders/checkout",
        data: {
          orders: cart,
          userId: user.id,
        },
        headers: { authorization: `Bearer ${token}` },
    })
}

export function categories(category) {
    return axios.get(`/api/books/category/${category}`)
}