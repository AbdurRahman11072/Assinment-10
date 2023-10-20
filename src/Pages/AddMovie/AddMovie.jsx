import React from 'react';

const AddMovie = () => {

 const uploadhandler = (e) =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const rate = form.rate.value;  
    const videourl = form.videourl.value;
    const imgurl  = form.imgurl.value;
    const relasedate = form.relasedate.value;
    const catagory  = form.catagory.value;
    const discription = form.discription.value;
    const Data = {name,catagory,imgurl,videourl,relasedate,rate,discription};
    console.log(catagory);

//    fetch("http://localhost:5000/data",{
//     method:"post",
//     headers:{
//         'content-type': 'application/json'
//     },
//     body : JSON.stringify(Data)
//    })
//     .then(res => res.json())

//         .then (data => {
//           Swal.fire(
//             'successfull',
//             'Movide has been ADDED',
//             'success'
//           )
//         })
        

 }

    return (
       <div>
        <section className="my-20  h-[70vh] w flex items-center justify-center">

<div className="w-[98vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] bg-white/10 backdrop-sepia-0 border-2 border-indigo-600 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

  <div className="w-full">
    <h2 className="font-bold text-2xl text-[#fff] text-center">Add Movie</h2>
    <form onSubmit={uploadhandler} className="flex flex-col gap-4">
     
        <div className='flex flex-col md:flex-row gap-3 mt-4'>
        <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold focus:bg-white " required type="text" name="name" placeholder="Enter Movie Name"/>        

        <select className="select p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold  "  name="catagory" required>
          <option disabled selected>Pick Catagory</option>
          <option >Disney</option>
          <option >Netflix</option>
          <option >Sony Picture</option>
          <option >Warner Bros</option>
          <option >Spotify</option>
          <option >Time Warner</option>
        </select>

        </div>
        
        <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold " required type="text" name="imgurl" placeholder="Enter Cover Photo Url"/>
        <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold " required type="text" name="videourl" placeholder="Enter Video Url"/>
        
        <div className='flex flex-col md:flex-row  gap-3'>
        <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold " required type="text" name="relasedate" placeholder="Enter Relase Date"/>
        <input className="p-2 mt-2 rounded-lg border w-full bg-[#ffff] text-black font-semibold " required type="text" name="rate" placeholder="Enter Rating"/>       
        </div>
        <input className="p-2 mt-2 rounded-lg border w-full h-20 bg-[#ffff] text-black font-semibold " type="text" name="discription" id="" placeholder='Type About The Movie' />
   
      <button type='submit' className="bg-indigo-600 rounded-lg text-[#fff] font-bold py-2 hover:scale-105 duration-300">Submit</button>
    </form>

    
  </div> 
</div>
</section>
       </div>
        
    )
}

export default AddMovie