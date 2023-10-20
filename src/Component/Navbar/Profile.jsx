// connected to the Navbar
import React from 'react'

const Profile = () => {
    return (
        <div className="z-50 " >
            
        <div className="dropdown dropdown-end flex flex-row  shadow-lg  rounded-lg h-12" tabIndex={0}>
                <label  className=" w-[45px] h-[20px] btn btn-ghost btn-circle avatar ring ring-white">
                    <div className=" rounded-full">
                    <img src="" />                    
                    </div>
                    
                </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-20 z-[1] p-2 border-2 shadow-xl bg-base-200 rounded-box w-56">
                    <div className='p-4 mx-auto '>
                        <div className="avatar ">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="" />
                        </div>
                        </div>
                    </div>
                   <div className='bg-white border-2 shadow-xl rounded-lg'>
                     <p className='text-center font-semibold'>Name</p>
                    <div className='w-16 h-1 bg-red-500 mx-auto'></div>
                    <p className='text-center font-semibold my-2'></p>
                   </div>

                   <div className='bg-white border-2 shadow-xl rounded-lg px-1 my-4'>
                     <p className=' text-center font-semibold'>Email</p>
                    <div className='w-16 h-1 bg-red-500 mx-auto'></div>
                    <p className='text-center font-semibold my-2 mx-1'></p>
                   </div>

                   <button  className='w-24 h-12 bg-red-500 text-white font-semibold border-2 shadow-2xl rounded-lg mb-3 text-center mx-auto'>Logout</button>
                    
             </ul>
             <p className='hidden md:block w-24 my-auto ml-1 font-bold text-center cursor-pointer'>MD Abdur Rahman</p>
        </div>
        
    </div>
    )
}

export default Profile