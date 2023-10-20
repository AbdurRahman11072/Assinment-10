import React from 'react'
import { Link } from 'react-router-dom'

// Catagory Home cards 

const CatagoryCards = ({data}) => {

    
 
    return (
           
    <div className='flex flex-wrap mt-10 p-4 backdrop-sepia-0 bg-white/10 rounded-lg '>
                    {
                        data?.map((data) => (
                            <Link to={`/${data._id}/detail`} key={data._id} >
                            <div className='flex flex-row  mx-auto'>
                    <div className='w-72 p-4  hover:backdrop-sepia-0 hover:bg-white/10 rounded-lg'>
                         <div className=' w-64 '>
                             <img className='rounded-lg w-full h-[350px]' src={data.imgurl} alt="" />
                         </div>
                         <div className='py-3 px-3'>
                         <h1 className='text-white font-bold text-xl mt-1'>{data.name}</h1> 
                         <p className='text-[#e6e5e5] text-sm mt-2'>Release Date : {data.relasedate}</p>
                         <p className='text-[#e6e5e5] text-sm mt-2'>Catagory : {data.catagory}</p>
                       
                         </div>
                     </div>  
                         <div className='h-[90%] my-4 xl:mx-2 lg:mx-[15px] md:mx-[25] w-[4px] bg-[#570096]'></div> 
                     
                     </div> 
                            </Link>  
                        ))
                    } 
                      
             
    </div>
            
   
    )
}

export default CatagoryCards