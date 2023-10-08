import React from 'react'
import { MdDeleteOutline } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
const data = [
    {
        Sno: 1,
        CategoryName: "category1",
        Description: "category",
        Status: "Active",
        icon1: <MdDeleteOutline />,
        icon2: <AiFillEdit />


    },
    {
        Sno: 2,
        CategoryName: "category2",
        Description: "category2",
        Status: "Active",
        icon1: <MdDeleteOutline />,
        icon2: <AiFillEdit />


    }

]


const Productcategory = () => {
    return (
        <div>
            <div className='flex justify-between max-w-[900px] w-full mx-auto '>
                <div className='font-bold text-lg text-black'>Category</div>
                <div >
                    <button className='bg-green-500 w-14 h-6 m-2  rounded-md text-white '> + ADD</button>
                </div>
            </div>
            <table className='border max-w-[900px] w-full mx-auto shadow-lg'>
                <thead>
                    <tr className='h-8'>
                        <td>S.no </td>
                        <td>Category Name</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item) => {
                            return (
                                <tr className='border'>
                                    <td className='py-2 px-2 '>{item.Sno}</td>
                                    <td>{item.CategoryName}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Status}</td>
                                    <div className='flex gap-4 w-fit mx-auto py-2 '>
                                        <td className='flex justify-center items-center bg-red-500 rounded-full h-6 w-6'>{item.icon1}</td>
                                        <td className='flex justify-center items-center bg-yellow-300 rounded-full h-6 w-6'>{item.icon2}</td>

                                    </div>


                                </tr>


                            )


                        })


                    }

                </tbody>
            </table>

        </div>
    )
}

export default Productcategory
