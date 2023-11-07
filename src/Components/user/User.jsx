import React, { useEffect, useState } from 'react'

import Modeluser from './Modeluser'
import Modeldelete from './Modeldelete'
import Tablerow from './Tablerow'

// const data = [
//     {
//         sno: 1,
//         Username: "admin",
//         Firstname: "admin",
//         Lastname: "admin",
//         Email: "admin@gmail.com",
//         Role: "admin",
//         icon1: <MdDeleteOutline />,
//         icon2: <AiFillEdit />


//     }
// ]


const User = () => {
    const [getin, setGetin] = useState(false)


    const [userdata, setUserdata] = useState([])



    const btnclickit = () => {



        setGetin(true)
    }

    const getdata = async () => {
        try {
            const isertdata = await fetch('http://localhost:8000/api/user/all',

                {
                    method: "GET",
                    headers: {
                        "auth_token": localStorage.getItem("token"),

                    }

                })

            const data = await isertdata.json();
            setUserdata(data.users)
            console.log(data)

        }
        catch {

        }



    }
    useEffect(() => {
        getdata()
    }, [])
    return (

        <div className='overflow-y-auto h-[calc(100vh-100px)] '>
            {
                getin &&
                <Modeluser send={getdata} data={setGetin} />
            }
            <div className='flex justify-between max-w-[900px] m-auto'>
                <div className='text-lg font-semibold my-3'>
                    Users
                </div>
                <div>
                    <button className='bg-green-500 w-14 h-6 rounded-md text-white my-3 ' onClick={btnclickit}>+ADD</button>
                </div>

            </div>

            <table className='border max-w-[900px] w-full shadow-md m-auto'>
                <thead>
                    <tr >
                        <td>username</td>

                        <td>Firstname</td>
                        <td>password</td>
                        <td>lastname</td>


                        <td>Email</td>

                        <td>Role</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((item, index) => {
                            return (
                                <Tablerow item={item} send={getdata} />
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default User
