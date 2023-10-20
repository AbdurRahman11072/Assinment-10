// connected to the Routes
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCatagory from '../../Component/AllCatagory/AllCatagory';


const Home = () => {
    const lodata = useLoaderData();
    console.log(lodata)
    return (

        <div>
              <AllCatagory></AllCatagory>         

        </div>



    )
}

export default Home