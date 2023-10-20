import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookmarkcards from './Bookmarkcard';

const Bookmark = () => {
    const bookMarkData = useLoaderData()
   
    return (
        <div className='container mx-auto my-20'>         
           <Bookmarkcards data={bookMarkData}></Bookmarkcards>
       
    </div>

    )
}

export default Bookmark