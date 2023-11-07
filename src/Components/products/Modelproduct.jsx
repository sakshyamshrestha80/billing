import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { fetching } from './Fetch'

const Modelproduct = (props) => {
    const pressbth = () => {
        props.setInside(false)

    }
    const [productdata, setProductdata] = useState(
        {
            category: "",
            name: "",
            price: "",
            status: "",
            description: "",
        }

    )
    useEffect(() => {
        console.log(props?.send, "hello")
        if (props?.send) {
            setProductdata({
                name: props.send.name,
                price: props.send.price,
                status: props.send.status,
                description: props.send.description,
            })
        }
    }, [props?.send])




    const bthonsubmitt = async (e) => {
        e.preventDefault();
        try {
            const userdata = await fetch('http://localhost:8000/api/product/create',
                {
                    headers: {
                        "auth_token": localStorage.getItem("token"),
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(productdata)
                })
            const response = await userdata.json();
            console.log(response)
            if (response.success) {
                toast.success(response.msg)
                props.getdata()





            } else {
                toast.error(response.msg)
            }
        } catch (error) {

        }
    }

    const [storecategory, setStorecategory] = useState([])
    useEffect(() => {

        const fetchcat = async () => {
            const response = await fetching()
            setStorecategory(response.categories)
        }
        fetchcat()
    }, [])

    console.log(productdata)

    useEffect(() => {
        if (storecategory.length > 0) {
            setProductdata({
                ...productdata, category: storecategory[0]._id
            })
        }
    }, [storecategory])


    return (
        <div onClick={pressbth} className='h-screen w-screen border border-red-600 flex items-center backdrop-blur-[2px] justify-center fixed top-0 left-0'>
            <form onClick={(e) => {
                e.stopPropagation()
            }} className='flex-col flex border  h-fit w-[300px] px-4 py-4 rounded-lg bg-white'>
                <div className='text-black font-bold text-xl mx-2'>
                    Add user
                </div>
                <div>
                    <div className=''>
                        <select className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' value={productdata.category} onChange={(e) => {
                            setProductdata({ ...productdata, category: e.target.value })
                        }} name="" id="">
                            {
                                storecategory.map((item) => {
                                    return <option value={item._id}>{item.name}</option>

                                })
                            }
                        </select>
                    </div>
                    {/* <input onChange={(e) => {
                        setProductdata({ ...productdata, category: e.target.value })
                    }} type='text' placeholder='category' value={productdata.category} className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' /> */}
                </div>

                <div>
                    <input onChange={(e) => {
                        setProductdata({ ...productdata, name: e.target.value })
                    }} type='text' placeholder='name' value={productdata.name} className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>
                <div>
                    <input onChange={(e) => {
                        setProductdata({ ...productdata, price: e.target.value })
                    }} type='number' value={productdata.price} placeholder='price' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>
                <div>
                    <input onChange={(e) => {
                        setProductdata({ ...productdata, status: e.target.value })
                    }} type='text' placeholder='status' value={productdata.status} className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>

                <div>
                    <input onChange={(e) => {
                        setProductdata({ ...productdata, description: e.target.value })
                    }} type='text' value={productdata.description} placeholder='Description' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4' />
                </div>




                <div className='flex flex-col items-center gap-2'>
                    <button onClick={pressbth} className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md' >close</button>
                    <button onClick={bthonsubmitt} className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md' >submitt</button>
                </div>



            </form>

        </div >

    )
}

export default Modelproduct
