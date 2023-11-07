import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Modeluser = (props) => {
    const pressbth = () => {
        props.data(false)

    }
    const [put, setPut] = useState(
        {
            username: "",
            firstName: "",
            password: "",
            lastName: "",
            email: "",
            role: "",
        }
    )

    useEffect(() => {
        if (props.userdata) {
            setPut({
                username: props.userdata.username,
                firstName: props.userdata.firstName,
                password: props.userdata.password,
                lastName: props.userdata.lastName,
                email: props.userdata.email,
                role: props.userdata.role,

            })
        }
    }, [])

    const onclicksubmit = async (e) => {
        e.preventDefault();

        if (put.firstName.length < 8 || put.lastName.length < 8) {
            toast.error("first or last must be at least 8 characters")
            return
        }


        if (put.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        } else {
            return toast.error("enter valid email")

        }
        if (put.password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/)) {

        } else {
            return toast.error("enter valid password")
        }

        if (props.userdata) {
            try {
                const userdata = await fetch(`http://localhost:8000/api/user/${props.userdata._id}`,
                    {
                        headers: {
                            "auth_token": localStorage.getItem("token"),
                            "Content-Type": "application/json",
                        },
                        method: "PATCH",
                        body: JSON.stringify(put)
                    })
                const response = await userdata.json();
                if (response.success) {
                    toast.success(response.msg)
                    props.send()
                    props.userdata(false)

                } else {
                    toast.error(response.msg)
                }
            } catch (error) {

            }

        } else {
            try {
                const userdata = await fetch('http://localhost:8000/api/user/register',
                    {
                        headers: {
                            "auth_token": localStorage.getItem("token"),
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify(put)
                    })
                const response = await userdata.json();
                if (response.success) {
                    toast.success(response.msg)
                    props.send()
                    props.userdata(false)

                } else {
                    toast.error(response.msg)
                }
            } catch (error) {

            }
        }


    }

    console.log('put')

    return (

        <div onClick={pressbth} className='h-screen w-screen border border-red-600 flex items-center backdrop-blur-[2px] justify-center fixed top-0 left-0'>
            <form onSubmit={onclicksubmit} onClick={(e) => {
                e.stopPropagation()
            }} className='flex-col flex border  h-fit w-[300px] px-4 py-4 rounded-lg bg-white'>
                <div className='text-black font-bold text-xl mx-2'>
                    Add user
                </div>
                <div>
                    <input onChange={
                        (event) => {
                            setPut({
                                ...put, username: event.target.value
                            })
                        }
                    } type='text' value={put.username} placeholder='user name' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>

                <div>
                    <input onChange={
                        (event) => {
                            setPut({
                                ...put, firstName: event.target.value
                            })
                        }
                    } type='text' value={put.firstName} placeholder='First name' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>
                <div>
                    <input onChange={
                        (e) => {
                            setPut({ ...put, password: e.target.value })
                        }
                    } type='text' value={put.password} placeholder='password' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>
                <div>
                    <input onChange={(e) => {
                        setPut({
                            ...put, lastName: e.target.value
                        })
                    }} type='text' value={put.lastName} placeholder='lastname' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>

                <div>
                    <input onChange={(e) => {
                        setPut({
                            ...put, email: e.target.value
                        })
                    }} type='text' value={put.email} placeholder='email ' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>
                <div>
                    <input onChange={(e) => {
                        setPut({
                            ...put, role: e.target.value
                        })
                    }} type='text' value={put.role} placeholder='role ' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>



                <div>
                    <div>
                        <button onClick={pressbth} className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md mb-2' >close</button>
                    </div>
                    <div>
                        <button type='submit' className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md' >Submitt</button>
                    </div>
                </div>



            </form>

        </div>
    )
}

export default Modeluser
