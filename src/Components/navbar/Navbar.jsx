import React from 'react'
import Image from "../../assets/books.jpg"
import { GiHamburgerMenu } from "react-icons/gi"
import { useContext } from 'react'
import { Context } from '../../App'

const Navbar = () => {
    const data = useContext(Context)
    console.log(data, "data")
    const btnclickhandler = () => {
        data.setOpenSidebar(!data.openSidebar)
    }
    return (
        <div className=' h-13 py-3 px-2 bg-gray-300  flex justify-between items-center '>
            <button onClick={btnclickhandler} className='text-2xl block sm:hidden p-2'>
                <GiHamburgerMenu />
            </button>
            <div className='m-5 my-2 text-black-400  font-bold hover:text-blue-400 text-2xl '>Billing System!</div>
            <div className='   overflow-hidden  rounded-full  '>
                <img className=' rounded-full w-12 h-12' src={Image} alt="" />
            </div>
        </div>
    )
}

export default Navbar
