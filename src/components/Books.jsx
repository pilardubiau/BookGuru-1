
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import "../styles/Books.css"

const Books= () => {
    const books = useSelector((state) => state.books)
    const bookId = useSelector((state) => state.bookId)
    console.log("bookId--------> ", bookId)
    console.log("books--------> ", books)

    return(
        <div className="books">
            {books.items && books.items.map((book) => {
                return(
                    <div key={book.id} >
                        <Link to={`/books/id/${bookId}`}><img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" /></Link>
                        <div className="tamaño">{book.volumeInfo.title.slice(0, 21)}</div>
                        <div>Price: {book.retailPrice} $$$</div>               
                        <div><button>Add to cart</button></div>
                        <br />
                    </div>
                )}
            )}
        </div>
    )
};

export default Books;