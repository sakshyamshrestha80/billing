import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Modelproductcategory = (props) => {

    const btnclose = () => {
        props.data(false)

    }
    const [add, setAdd] = useState({
        name: "",
        description: "",
        status: "",

    })

    useEffect(() => {
        if (props.productcategory) {
            setAdd({
                name: props.productcategory.name,
                description: props.productcategory.description,
                status: props.productcategory.status,
            })
        }
    }, [])
    const onclicksubmitt = async (e) => {
        e.preventDefault();
        if (props.productcategory) {
            try {
                const userdata = await fetch(`http://localhost:8000/api/category/${props.productcategory._id}`,
                    {
                        headers: {
                            "auth_token": localStorage.getItem("token"),
                            "Content-Type": "application/json",
                        },
                        method: "PATCH",
                        body: JSON.stringify(add)
                    })
                const response = await userdata.json();
                if (response.success) {
                    toast.success(response.msg)
                    props.send()
                    props.data(false)

                } else {
                    toast.error(response.msg)
                }
            }
            catch (error) {

            }


        }


        else {
            try {
                const userdata = await fetch('http://localhost:8000/api/category/create',
                    {
                        headers: {
                            "auth_token": localStorage.getItem("token"),
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify(add)
                    })
                const response = await userdata.json();
                console.log(response)
                if (response.success) {
                    toast.success(response.msg)
                    props.send()




                } else {
                    toast.error(response.msg)
                }
            } catch (error) {

            }


        }
    }





    return (
        <div onClick={btnclose} className='h-screen w-screen border border-red-600 flex items-center backdrop-blur-[2px] justify-center fixed top-0 left-0'>
            <form onSubmit={onclicksubmitt} onClick={(e) => {
                e.stopPropagation()
            }} className='flex bg-white flex-col border rounded-md w-[300px] px-2 '>
                <input onChange={(e) => {
                    setAdd({
                        ...add, name: e.target.value
                    })

                }} type="text" value={add.name} placeholder='Enter Category Name' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                <input onChange={(e) => {
                    setAdd({ ...add, description: e.target.value })
                }} type='text' value={add.description} placeholder='Enter Category Description ' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                <input onChange={(e) => {
                    setAdd({ ...add, status: e.target.value })
                }} type="text" value={add.status} placeholder='Category Status' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                <div className='flex flex-col items-center'>
                    <button onClick={btnclose} className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md mb-2'>close</button>
                    <button type='submit' className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md mb-2'>submitt</button>

                </div>


            </form>
        </div>
    )
}

export default Modelproductcategory
