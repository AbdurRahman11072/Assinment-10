
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Detailcard = () => {
    const loderData = useLoaderData()
   
    const id = useParams()
    const [data,setdata] = useState([])
    useEffect(()=>{
        const filterdata = loderData.find((data) =>data._id.toLowerCase()===id.id.toLowerCase())
        setdata(filterdata)
    },[])
    // console.log(loderData)
    // console.log(data)

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
        
            fetch(`http://localhost:5000/data/${_id}`,{
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

     const BookmarkHandler = () =>{
    
        const name =data.name
        const rate = data.rate
        const videourl = data.videourl
        const imgurl  = data.imgurl
        const relasedate = data.relasedate
        const catagory  = data.catagory
        const Data = {name,catagory,imgurl,videourl,relasedate,rate};
        console.log(Data);
    
       fetch(`http://localhost:5000/bookmark`,{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body : JSON.stringify(Data)
       })
        .then(res => res.json())
    
            .then (data => {
                Swal.fire(
                    'successfull',
                    'Movide has been UPDATED',
                    'success'
                  )
            })
            
    
     }

    return (
        <div className='container mx-auto my-5'>
            <div>
                
                <video  src={data.videourl}></video>
            </div>
            <div className='flex flex-col md:flex-row gap-10 '>
                <div className='w-[350px] h-[630px] md:w-[250px] md:h-[530px] lg:w-[300px] lg:h-[630px] xl:w-[340px] xl:h-[630px] mx-auto '><img className='w-[350px] h-[500px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[500px] xl:w-[340px] xl:h-[500px] ' src={data.imgurl} alt="" />
                <button onClick={BookmarkHandler} className='bg-indigo-600 w-full h-12 mt-4 p-3 text-white font-bold '>Add To Bookmark</button>
                <div className='flex gap-4 mx-auto mt-4'>
                <Link to={`/update-movie-detail/${data._id}`}>
                   <button className="bg-indigo-600 text-white font-bold w-[166px] md:w-[120px] lg:w-[155px]   xl:w-[162px]  h-12  p-3">Update</button>
                   </Link>
                    <button onClick={() =>DeleteHandler(data._id)}  className='bg-indigo-600 text-white font-bold w-[166px] md:w-[120px] lg:w-[155px]   xl:w-[162px]  h-12  p-3'>DELETE</button>
                </div>
                </div>
                <div className='flex-1 mx-6 md:mx-0'>
                <h1 className='text-white font-extrabold text-7xl '>{data.name}</h1> 
                <p className='text-[#e6e5e5] text-xl mt-8 font-bold'>Rating : {data.rate}</p>
                <p className='text-[#e6e5e5] text-lg mt-8'> <span className='text-xl font-bold'>Relase Date :</span> {data.relasedate}</p>
                <p className='text-[#e6e5e5] text-lg mt-2'> <span className='text-xl font-bold'>Catagory : </span>{data.catagory}</p>
                <p className='text-[#e6e5e5] text-lg mt-2'> <span className='text-xl font-bold'>Description :</span> Suspendisse eu porta quam, sit amet tristique sem. Maecenas tincidunt finibus ipsum, eget aliquet elit scelerisque non. In aliquet dapibus odio, ut gravida mauris elementum sit amet. Nulla viverra magna eget rutrum ultrices. Vestibulum suscipit neque sed sem dignissim, tincidunt efficitur urna faucibus.</p>
               
                </div>
            </div>
        </div>
    )
}

export default Detailcard