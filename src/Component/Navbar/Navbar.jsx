// connected to the profile 

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

// connected to the MainLayout
const Navbar  = () => {
    return (
  
        <div className="p-4 flex bg-gradient-to-r from-[#1c2231] to-[#0e0b1a]">
            <div className="navbar-start flex flex-1 gap-10">
                <div className="dropdown dropdown-start">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
                    }
                    >
                <li className='py-2 px-4 text-lg rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Home</li>
                </NavLink>
                
                <NavLink
                    to="/add-event"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
                    }
                    >
                <li className='py-2 px-4 text-lg rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Add Event</li>
                </NavLink>
            
                <NavLink
                    to="/gallary"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white  bg-red-500 rounded-md  " : ""
                    }
                    >
                <li className='py-2 px-4 text-lg rounded-md items-center hover:bg-red-500 hover:text-gray-50'>Gallary</li>
                </NavLink>
        
            </ul>
            

                </div>
                
                <img className="-ml-10 " src="/logo.svg" alt="" />
                <ul className=" hidden flex-1 lg:flex items-center gap-4 text-[#e6e6e6]">
                    
                    <NavLink to={"/"} className="text-lg font-semibold">
                        Home
                    </NavLink>
                    <NavLink to={"/addmovie"} className="text-lg font-semibold w-24">
                        Add Movie
                    </NavLink>
                    <NavLink to={"/Catagory"} className="text-lg font-semibold">
                        Catagory
                    </NavLink>
                  
                   
                    <NavLink to={"/bookmark"} className="text-lg font-semibold">
                        Bookmark
                    </NavLink>
                </ul>
            </div>
            
            <div className="navbar-end flex gap-6 text-white">
           
                <form className="w-72 h-12 relative  ">
                    <input className="hidden xl:block w-full h-full px-4 rounded-lg bg-transparent font-semibold border-[1px]  outline-none focus:border-[2px] border-indigo-600 " placeholder="Search Movies" type="text" name="" id="input" />
                    <button className="absolute right-0 top-2 px-2 text-xl lg:text-lg "><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </form>
                   <NavLink to="/login">
                   <button className="btn btn-primary">Login/Signup</button>
                   </NavLink>
               
            </div>
        </div>
    )
}

export default Navbar 