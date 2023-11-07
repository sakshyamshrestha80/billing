import React, { useState } from 'react'
import Activeordrtable from './Activeordrtable'
import Modelorder from './Modelorder'

const Activeorder = () => {
    const [getin, setGetin] = useState(false)

    const btnclickit = () => {
        setGetin(true)
    }
    return (
        <div>
            {
                getin &&
                <Modelorder data={setGetin} />

            }

            <div className='flex justify-between max-w-[900px]  w-full mx-auto'>
                <div className='font-bold my-2 '>
                    Active Orders
                </div>
                <div className='font-bold my-2 bg-green-400  rounded-2xl '>
                    <button className='rounded-md h-6 w-14 text-white font-semibold' onClick={btnclickit}>+ Add</button>
                </div>

            </div>

            <table className='border  max-w-[900px] w-full mx-auto shadow-md '>

                <thead>
                    <tr className='font-bold  border-slate-50'>
                        <td className=' p-4'>
                            Customer Name
                        </td>
                        <td>
                            Order Details
                        </td>
                        <td>
                            Gross Amount
                        </td>
                        <td>
                            Description
                        </td>

                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Activeorder
