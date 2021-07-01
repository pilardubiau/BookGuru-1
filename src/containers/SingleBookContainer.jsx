import React, { useEffect } from 'react';
import SingleBook from '../components/SingleBook'
import {useDispatch, useSelector} from 'react-redux';
import {setBookId} from '../store/bookId';
import axios from 'axios'


const SingleBookContainer = ({bookId}) => {
    const [singleBook, setSingleBook] = React.useState({})

    useEffect(()=>{
        axios.get(`/api/books/id/${bookId}`)
        .then(({data}) => setSingleBook(data));
    },[])
    
    return(
        <div>
            <SingleBook singleBook={singleBook}/>
        </div>
    )
};

export default SingleBookContainer; 