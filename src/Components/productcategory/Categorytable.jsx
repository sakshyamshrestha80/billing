import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
import Delete from './Delete'
import Modelproductcategory from './Modelproductcategory'

const Categorytable = (props) => {

    const [deletecat, setDeletecat] = useState(false)
    const btndelete = () => {
        setDeletecat(true)
    }
    const [editcatagory, setEditcategory] = useState(false)
    const btnedit = () => {
        setEditcategory(true)
    }
    return (
        <tr className='border'>
            <td className='py-2 px-2 '>{props.index + 1}</td>
            <td>{props.item.name}</td>
            <td>{props.item.description}</td>
            <td>{props.item.Status}</td>
            <div className='flex w-fit gap-4 m-auto'>
                <td className='bg-red-600 h-6 w-6 rounded-full flex justify-center items-center my-2'>
                    <button className='' onClick={btnedit}  ><AiFillEdit /></button>
                </td>
                <td className='bg-yellow-400 h-6 w-6 rounded-full flex justify-center items-center my-2'>
                    <button className='' onClick={btndelete} ><MdDeleteOutline /></button>
                </td>
                {deletecat && <Delete send={props.getdata} setDeletecat={setDeletecat} id={props.item._id} />}
                {editcatagory && <Modelproductcategory send={props.getdata} data={setEditcategory} productcategory={props.item} />}
            </div>


        </tr>
    )
}

export default Categorytable
