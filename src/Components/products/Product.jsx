import React, { useState, useEffect } from 'react'
import { MdDeleteOutline } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
import Tablerow from './Tablerow'
import Modelproduct from './Modelproduct'

// const data = [
//     {
//         sno: 1,
//         name: "nepal",
//         description: "this is description",
//         price: "25",
//         actions: "delete",
//         category: "category1",
//         icon1: <MdDeleteOutline />,
//         icon2: <AiFillEdit />
//     },
//     {
//         sno: 2,
//         name: "nepal",
//         description: "this is description",
//         price: "25",
//         actions: "delete",
//         category: "category1",
//         icon1: <MdDeleteOutline />,
//         icon2: <AiFillEdit />
//     },
//     {
//         sno: 1,
//         name: "nepal",
//         description: "this is description",
//         price: "25",
//         actions: "delete",
//         category: "category1",
//         icon1: <MdDeleteOutline />,
//         icon2: <AiFillEdit />
//     },
// ]


const Product = (props) => {
    const [product, setProduct] = useState([])
    const [inside, setInside] = useState(false)
    const btnonclickhandler = () => {
        setInside(true)
    }

    const getdata = async () => {
        try {
            const isertdata = await fetch('http://localhost:8000/api/product/all',

                {
                    method: "GET",
                    headers: {
                        "auth_token": localStorage.getItem("token"),

                    }

                })

            const data = await isertdata.json();
            setProduct(data.products)
            console.log(data)

        }
        catch {

        }



    }
    useEffect(() => {
        getdata()
    }, [])

    //get data fetch data and set to products
    //setinside vaneko popup open close
    return (
        <div>
            {
                inside &&
                <Modelproduct getdata={getdata} setInside={setInside} setproduct={setProduct} product={product} />
            }
            <div className='flex justify-between max-w-[900px]  w-full mx-auto'>
                <div className='font-bold my-2 '>
                    Product
                </div>
                <div className='font-bold my-2 bg-green-400  rounded-2xl '>
                    <button className='rounded-md h-6 w-14 text-white font-semibold' onClick={btnonclickhandler}>+ Add</button>
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
                        product.map((item, index) => {
                            return (
                                <Tablerow product={product} setProduct={setProduct} getdata={getdata} index={index} item={item} />
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Product
