import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
const data = [
    {
        sno: 1,
        Username: "admin",
        Firstname: "admin",
        Lastname: "admin",
        Email: "admin@gmail.com",
        Role: "admin",
        icon1: <MdDeleteOutline />,
        icon2: <AiFillEdit />


    }
]


const User = () => {
    return (
        <div>
            <div className='flex justify-between max-w-[900px] m-auto'>
                <div className='text-lg font-semibold my-3'>
                    Users
                </div>
                <div>
                    <button className='bg-green-500 w-14 h-6 rounded-md text-white my-3'>+ADD</button>
                </div>

            </div>

            <table className='border max-w-[900px] w-full shadow-md m-auto'>
                <thead>
                    <tr >
                        <td>S.no</td>

                        <td>Firstname</td>
                        <td>Secondname</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr className='h-8 border'>
                                    <td>{item.sno}</td>

                                    <td>{item.Firstname}</td>
                                    <td>{item.Lastname}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Role}</td>
                                    <div className='flex w-fit gap-4 m-auto'>
                                        <td className='bg-red-600 h-6 w-6 rounded-full flex justify-center items-center my-2'>{item.icon1}</td>
                                        <td className='bg-yellow-400 h-6 w-6 rounded-full flex justify-center items-center my-2'>{item.icon2}</td>
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

export default User
