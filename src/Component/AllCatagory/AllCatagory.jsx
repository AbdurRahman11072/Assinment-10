import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllCatagory = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
     fetch("/catagory.json")
     .then(res => res.json())
     .then(data =>setdata(data))
    },[])
 console.log(data)

    

    return (
        <div className='container mx-auto my-20 '>  
        <h1 className='text-white text-2xl font-extrabold my-5'>All Catagory</h1>
        <div className='w-[100%] h-[2px] bg-white/40 backdrop-sepia-0  mb-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 bg-white/10 backdrop-sepia-0 '>  
            {
                data.map((data) =>(
                    <Link to={`/catagory-cards/${data.catagoty}`} key={data.id}>
                   <div>
                   <div  className='bg-white/10 backdrop-sepia-0 p-4 rounded-md  gap-2'>
                    <div className='w-[100%] h-[90%] border-[5px] rounded-md border-transparent hover:border-white '>
                    <img className='w-full h-[230px] rounded-md'   src={data.img} alt="" />
                    </div>
                    <p className='px-2 text-white text-2xl font-bold drop-shadow-2xl '>{data.catagoty}</p>
                </div>
                   </div>
                </Link>
                ))
            }
            </div>     
        </div>
    )
}

export default AllCatagory