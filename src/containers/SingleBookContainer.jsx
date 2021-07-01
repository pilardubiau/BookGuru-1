import React, { useEffect } from 'react';
import SingleBook from '../components/SingleBook'
import {useDispatch} from 'react-redux';
import {setBookId} from '../store/bookId';


const SingleBookContainer = ({bookId}) => {
    const dispatch = useDispatch()
    console.log("-------------->",bookId)
    
    useEffect(()=>{
        dispatch(setBookId(bookId))
    },[bookId])
    
    return(
        <div>
            <SingleBook/>
        </div>
    )
};

export default SingleBookContainer; 