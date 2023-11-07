import React, { useEffect, useState } from 'react'

import Modelproductcategory from './Modelproductcategory'
import Tablerow from '../user/Tablerow'
import Categorytable from './Categorytable'




const Productcategory = (props) => {
    const [productcat, setProductcat] = useState([])
    const [inside, setInside] = useState(false)
    const btnhandler = () => {
        setInside(true)
    }

    const getdata = async () => {
        try {
            const isertdata = await fetch('http://localhost:8000/api/category/all',

                {
                    method: "GET",
                    headers: {
                        "auth_token": localStorage.getItem("token"),

                    }

                })

            const data = await isertdata.json();
            setProductcat(data.categories)
            console.log(data)

        }
        catch {

        }



    }
    useEffect(() => {
        console.log("this is cdata")
        getdata()
    }, [])
    return (
        <div>
            {
                inside &&
                <Modelproductcategory data={setInside} send={getdata} getcategory={setProductcat} />
            }
            <div className='flex justify-between max-w-[900px] w-full mx-auto '>
                <div className='font-bold text-lg text-black'>Category</div>
                <div >
                    <button className='bg-green-500 w-14 h-6 m-2  rounded-md text-white '
                        onClick={btnhandler}> + ADD</button>
                </div>
            </div>
            <table className='border max-w-[900px] w-full mx-auto shadow-lg'>
                <thead>
                    <tr className='h-8'>
                        <td>S.no </td>
                        <td>Category Name</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        productcat.map((item, index) => {
                            return (

                                <Categorytable getdata={getdata} index={index} item={item} />



                            )


                        })


                    }

                </tbody>
            </table>

        </div>
    )
}

export default Productcategory
