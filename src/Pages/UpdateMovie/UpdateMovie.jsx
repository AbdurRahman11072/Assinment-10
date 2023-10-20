import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovie = () => {
    const loderData = useLoaderData();
    const id = useParams()
    const [data,setdata] = useState([])
    useEffect(()=>{
        const FindData = loderData.find((data) =>data._id.toLowerCase()===id.id.toLowerCase())
        setdata(FindData)
    },[])
    
    console.log(loderData);
    console.log(data);

    

    const UpdateHandler = (e,) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const rate = form.rate.value;  
        const videourl = form.videourl.value;
        const imgurl  = form.imgurl.value;
        const relasedate = form.relasedate.value;
        const catagory  = form.catagory.value;
        const Data = {name,catagory,imgurl,videourl,relasedate,rate};
        console.log(Data);
    
       fetch(`http://localhost:5000/data/${data._id}`,{
        method:"PUT",
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
           <div>
            <section className="my-20  h-[70vh] w flex items-center justify-center">
    
    <div className="w-[98vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] bg-white/10 backdrop-sepia-0 border-2 border-indigo-600 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    
      <div className="w-full">
        <h2 className="font-bold text-2xl text-[#fff] text-center">Update: </h2>
        <form onSubmit={UpdateHandler} className="flex flex-col gap-4">
         
            <div className='flex flex-col md:flex-row gap-3 mt-4'>
            <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-transparent focus:text-white" type="text" name="name" defaultValue={data.name} placeholder="Enter Movie Name"/>
            <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-transparent focus:text-white" type="text" name="catagory" defaultValue={data.catagory} placeholder="Enter Brand Name"/>
            </div>
            
            <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-transparent focus:text-white" type="text" name="imgurl" defaultValue={data.imgurl} placeholder="Enter Cover Photo Url"/>
            <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-transparent focus:text-white" type="text" name="videourl" defaultValue={data.videourl} placeholder="Enter Video Url"/>
            
            <div className='flex flex-col md:flex-row  gap-3'>
            <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-transparent focus:text-white" type="text" name="relasedate" defaultValue={data.relasedate} placeholder="Enter Relase Date"/>
            <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-transparent focus:text-white" type="text" name="rate" defaultValue={data.rate} placeholder="Enter Rating"/>
            
            </div>
       
          <button type='submit' className="bg-indigo-600 rounded-lg text-[#fff] font-bold py-2 hover:scale-105 duration-300">Update</button>
        </form>
    
        
      </div> 
    </div>
    </section>
           </div>
            
        )
    }
export default UpdateMovie