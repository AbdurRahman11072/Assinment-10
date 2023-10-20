import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Detailcard from '../Component/DetailsCard/Detailcard'
import MainLayout from '../MainLayout/MainLayout'
import AddMovie from '../Pages/AddMovie/AddMovie'
import Bookmark from '../Pages/Bookmark/Bookmark'
import CatagoryItem from '../Pages/Catagory/CatagoryItem'
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUpPage/SignUp'
import UpdateMovie from '../Pages/UpdateMovie/UpdateMovie'
import Login from '../Pages/loginpage/login'

const CoustomRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch("/catagory.json")
            },
            {
                path:"/addmovie",
                element:<AddMovie></AddMovie>
            },
            {
                path:"/:id/detail",
                element:<Detailcard></Detailcard>,
                loader:() =>fetch(`http://localhost:5000/data`)
            },
            {
                path:"/update-movie-detail/:id",
                element:<UpdateMovie></UpdateMovie>,
                loader: () => fetch(`http://localhost:5000/data`)

            },
            {
                path:"/bookmark",
                element:<Bookmark></Bookmark>,
                loader: () => fetch('http://localhost:5000/bookmark')
            },
           
            {
                path:"/catagory-cards/:id",
                element:<CatagoryItem></CatagoryItem>,
                loader: () => fetch('http://localhost:5000/data')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default CoustomRoutes