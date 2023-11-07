import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import Modeldelete from './Modeldelete'
import Modeluser from './Modeluser'

const Tablerow = (props, index) => {

    const [delete1, setDelete1] = useState(false)

    const btndelete = () => {
        setDelete1(true)

    }

    const [edit, setEdit] = useState(false)
    const btnedit = () => {
        setEdit(true)
    }

    return (
        <>

            <tr className='h-8 border'>
                {/* <td>{index + 1}</td> */}
                <td>{props.item.username}</td>
                <td>{props.item.firstName}</td>
                <td>{props.item.lastName}</td>
                <td>{props.item.password}</td>
                <td>{props.item.email}</td>
                <td>{props.item.role}</td>
                <div className='flex w-fit gap-4 m-auto'>
                    <td className='bg-red-600 h-6 w-6 rounded-full flex justify-center items-center my-2'>
                        <button className='' onClick={btnedit} ><AiFillEdit /></button>
                    </td>
                    <td className='bg-yellow-400 h-6 w-6 rounded-full flex justify-center items-center my-2'>
                        <button className='' onClick={btndelete} ><MdDeleteOutline /></button>
                    </td>
                </div>

            </tr>
            {delete1 && <Modeldelete id={props.item._id} setDelete1={setDelete1} />}
            {
                edit && <Modeluser userdata={props.item} send={props.send} data={setEdit} />
            }
        </>
    )
}

export default Tablerow
