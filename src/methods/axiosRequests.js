import axios from 'axios';

export function getSingleBook(bookId) {
    return axios.get(`/api/books/id/${bookId}`);
}

export function getBookByTitle(input) {
    return axios.get(`/api/books/title/${input}`)
}

export function addOrderAxios(user, bookId, token) {
    
    axios({
        method: 'post',
        url: '/api/orders',
        data: {
          userId: user.id,
          bookId: bookId
        },
        headers: { authorization: `Bearer ${token}` },
    }).then(()=> alert("Producto agregado al carrito"))
}

export function getRandomBooks() {
    return axios.get(`/api/books/home`)
}

export function getUserCart(userId, token) {
    return axios
    .get(`/api/users/${userId}/cart`, {
        headers: { authorization: `Bearer ${token}` },
     })
}

export function checkoutOrder(cart, userId, token) {
    return axios({
        method: "put",
        url: "/api/orders/checkout",
        data: {
          orders: cart,
          userId: userId,
        },
        headers: { authorization: `Bearer ${token}` },
      })
}