import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
import Modelproduct from './Modelproduct'
import Deleteproduct from './Deleteproduct'


const Tablerow = (props, index) => {
    const [deleteproduct, setDeleteproduct] = useState(false)

    const btnndelete = () => {
        setDeleteproduct(true)

    }

    const [editproduct, setEditproduct] = useState(false)
    const btnedit = () => {
        setEditproduct(true)
    }
    return (
        <>
            <tr >
                <td className=' py-2 px-4' >
                    {props.index + 1}
                </td>
                <td>
                    {props.item.name}
                </td>
                <td>
                    {props.item.price}
                </td>
                <td>
                    {props.item.status}
                </td>
                <td>
                    {props.item.description}
                </td>
                <td className=' text-center  '>
                    <div className='flex w-fit gap-4 m-auto'>
                        <td className='bg-red-600 h-6 w-6 rounded-full flex justify-center items-center my-2'>
                            <button className='' onClick={btnedit}  ><AiFillEdit /></button>
                        </td>
                        <td className='bg-yellow-400 h-6 w-6 rounded-full flex justify-center items-center my-2'>
                            <button className='' onClick={btnndelete} ><MdDeleteOutline /></button>
                        </td>
                    </div>
                </td>

            </tr>
            {deleteproduct && <Deleteproduct send={props.getdata} productdata={props.item._id} setDeleteproduct={setDeleteproduct} />}
            {editproduct && <Modelproduct send={props.item} getdata={props.getdata} setproduct={props.setProduct} setInside={setEditproduct} product={props.product} />}
            {/* <Modelproduct getdata={getdata} setInside={setInside} setproduct={setProduct} product={product} /> */}

        </>

    )
}

export default Tablerow
