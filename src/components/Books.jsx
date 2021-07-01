import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import "../styles/Books.css"
import axios from 'axios';

const Books= () => {
    const history = useHistory()
    const books = useSelector((state) => state.books)
    const user = useSelector((state) => state.user)
//userid viene del store y el bookid viene como parametro del map de abajo
/*     const addOrder = (bookId) => {
        const token = localStorage.getItem('token')
        if(!token) {
            history.push("/books")
        }
        else {
            axios.post('/api/orders', {header:'token'}, {userId:user.id, bookId})
        }
    } */
    console.log(user)
    return(
        <div className="books">
            {books && books.map((book) => {
                return(
                    <div key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            <img src={book.img} alt="" />
                        </Link>
                        <div className="tamaño">{book.title.slice(0, 21)}</div>
                        <div>Price: {book.price} $$$</div>               
                        <div><button /* onClick={addOrder(book.id)} */>Add to cart</button></div>
                        <br />
                    </div>
                )}
            )}
        </div>
    )
};

export default Books;