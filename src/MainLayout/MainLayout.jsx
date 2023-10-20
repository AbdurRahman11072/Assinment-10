import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'

const MainLayout  = () => {
    return (
        <div className=' bg-[#161934]'>
            
           <Navbar></Navbar>
            <div className='mx-2'>
            <Outlet></Outlet>
        
            </div>
            
            <Footer></Footer>
          
        </div>
    )
}

export default MainLayout 