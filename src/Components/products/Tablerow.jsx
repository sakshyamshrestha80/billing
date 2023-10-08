import React from 'react'

const Tablerow = (props) => {
    return (
        <tr >
            <td className=' py-2 px-4' >
                {props.item.sno}
            </td>
            <td>
                {props.item.name}
            </td>
            <td>
                {props.item.category}
            </td>
            <td>
                {props.item.description}
            </td>
            <td>
                {props.item.price}
            </td>
            <td className=' text-center  '>
                <div className=' flex gap-4    w-fit mx-auto'>
                    <div className='bg-yellow-300 flex justify-center items-center w-10 h-10 p-2 rounded-full'>
                        {props.item.icon1}
                    </div>
                    <div className='bg-red-500  flex justify-center items-center   p-2 rounded-full w-10 h-10'>
                        {props.item.icon2}
                    </div>
                </div>
            </td>

        </tr>
    )
}

export default Tablerow
