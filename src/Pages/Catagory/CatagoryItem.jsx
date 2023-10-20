import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import CatagoryCards from './catagoryCards'

const CatagoryItem = () => {
    const loderData = useLoaderData()
   
    const id = useParams()
    const [data,setdata] = useState([])

    useEffect(()=>{
        const filterdata = loderData.filter((Data) => Data.catagory.toLowerCase() == id.id.toLowerCase())
        setdata(filterdata)
    },[])
    console.log(loderData)
    console.log(data)
    console.log(id.id.toLowerCase())

    return (
        <div className='container mx-auto my-10'>
            <CatagoryCards data={data}></CatagoryCards>
        </div>
    )
}

export default CatagoryItem