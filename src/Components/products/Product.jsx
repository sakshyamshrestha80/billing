import React from 'react'
import { MdDeleteOutline } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
import Tablerow from './Tablerow'

const data = [
    {
        sno: 1,
        name: "nepal",
        description: "this is description",
        price: "25",
        actions: "delete",
        category: "category1",
        icon1: <MdDeleteOutline />,
        icon2: <AiFillEdit />
    },
    {
        sno: 2,
        name: "nepal",
        description: "this is description",
        price: "25",
        actions: "delete",
        category: "category1",
        icon1: <MdDeleteOutline />,
        icon2: <AiFillEdit />
    },
    {
        sno: 1,
        name: "nepal",
        description: "this is description",
        price: "25",
        actions: "delete",
        category: "category1",
        icon1: <MdDeleteOutline />,
        icon2: <AiFillEdit />
    },
]

const Product = () => {
    return (
        <div>
            <div className='flex justify-between max-w-[900px]  w-full mx-auto'>
                <div className='font-bold my-2 '>
                    Product
                </div>
                <div className='font-bold my-2 bg-green-400  rounded-2xl '>
                    <button>Add</button>
                </div>

            </div>

            <table className='border  max-w-[900px] w-full mx-auto shadow-md '>

                <thead>
                    <tr className='font-bold  border-slate-50'>
                        <td className=' p-4'>
                            S.No.
                        </td>
                        <td>
                            Product
                        </td>
                        <td>
                            category
                        </td>
                        <td>
                            Description
                        </td>
                        <td>
                            Price
                        </td>
                        <td>
                            Actions
                        </td>
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((item) => {
                            return (
                                <Tablerow item={item} />
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Product
