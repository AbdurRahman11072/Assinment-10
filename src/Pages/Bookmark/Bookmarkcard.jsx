import React from 'react';
import Swal from 'sweetalert2';

const Bookmarkcards = ({data}) => {
  
 
    const DeleteHandler = (_id) =>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
        
            fetch(`http://localhost:5000/bookmark/${_id}`,{
                method:"DELETE",
               
            })
            .then(res =>res.json())
            .then(data => {
                if(data.deletedCount > 0)
            {
                Swal.fire(
                    'successfull',
                    'Movide has been delete',
                    'success'
                  )
                 
            }
            })
            
            }
          })
     }

    
  
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 ' >
        {
            data?.map((data) =>(
               

            <div className="flex flex-col md:flex-row card card-body rounded-lg gap-5 p-3 bg-base-100 shadow-xl"  key={data._id}>
               <div className='w-[80%] h-[400px] md:w-[40%] md:h-[400px] lg:h-[290px] xl:h-[350px] mx-auto' ><img className='w-full h-full rounded-lg'  src={data.imgurl} alt="Movie"/></div>
               <div className="flex-1">
               <div className='h-[80%]'>
               <h2 className="text-gray-200 text-2xl font-extrabold">{data.name}</h2>
                   <p className='text-gray-200 text-base mt-2 font-semibold'>Rating:{data.rate}</p>
                   <p className='text-gray-200 text-base mt-2 font-semibold'>Date:{data.relasedate}</p>
                   <p className='text-gray-200 text-base mt-2 font-semibold  overflow-hidden' >Catagory: {data.catagory} </p> 
                   <p className='text-gray-200 text-base mt-2 font-semibold h-20  overflow-hidden' >Discription: {data.catagory} </p> 
               </div>
                   <div className="card-actions justify-center ">
           
                   <div className='flex gap-5'>
                   <button onClick={() =>DeleteHandler(data._id)} className="btn btn-primary">Delete</button>
                   
                  
               
                   </div>
                           
                 
            
                   </div>
               </div>
               </div>
      
   
           
            ))
        }
    </div>
    )
}

export default Bookmarkcards;