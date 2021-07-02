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
        const addOrder = (bookId) => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(!user.id) {
            history.push("/register")
        }
        else {
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
    }

    return(
        <div className="books">

            {books && books.map((book) => {
                return(
                    <div key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            <img src={book.img} alt="" />
                        </Link>
                        <div className="tamaño">{book.title.slice(0, 21)}</div>
                        <div>Price: {book.price} U$D</div>               
                        <div><button onClick={()=>addOrder(book.id)}>Add to cart</button></div>
                        <br />
                    </div>
                )}
            )}
        </div>
    )
};

export default Books;