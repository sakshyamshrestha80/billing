import React, { useState } from 'react'
import { BiSolidDashboard } from "react-icons/bi"
import { BiUserPin } from "react-icons/bi"
import { MdProductionQuantityLimits } from "react-icons/md"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { BsBorderStyle } from "react-icons/bs"
import { FcSalesPerformance } from "react-icons/fc"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { Context } from '../../App'
import { useContext } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"


const route = [
    {
        name: "Dashboard",
        path: "/shop/dashboard",
        icon: <BiSolidDashboard />
    },
    {
        name: "Users",
        path: "/shop/user",
        icon: <BiUserPin />

    },
    {
        name: "Product category",
        path: "/shop/productcategory",
        icon: <MdProductionQuantityLimits />

    },
    {
        name: "Products",
        path: "/shop/products",
        icon: <MdOutlineProductionQuantityLimits />

    },
    {
        name: "Active orders",
        path: "/shop/activeorder",
        icon: <BsBorderStyle />

    },
    {
        name: "Sales",
        path: "/shop/sales",
        icon: <FcSalesPerformance />
    }

]


const Sidebar = () => {
    const location = useLocation();

    const data = useContext(Context)

    const btnhandler = () => {
        data.setopensidebar(!data.opensidebar)
    }




    return (

        <div className={`${data.opensidebar ? "fixed left-0 top-0 " : "hidden"} pt-20 w-96  h-screen  bg-slate-800 sm:flex flex-col justify-center items-center`}>
            <div>
                <button className='  md:hidden absolute top-0 right-0  text-white text-2xl mt-2 pr-2' onClick={btnhandler}>
                    <AiOutlineCloseCircle />

                </button>

            </div>


            {
                route.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={`${location.pathname === item.path ? "bg-[#055C9D]" : ""}  flex gap-2 items-center  p-4 mx-2 py-8  rounded-md font-semibold hover:bg-[#055C9D] text-white w-80 text-3xl  `}>
                            <div className=' '>{item.icon}</div>
                            <div className=' '> {item.name}</div>


                        </Link>
                    )
                })

            }




        </div>
    )
}

export default Sidebar
