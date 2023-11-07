import React from 'react'

const Modelorder = (props) => {
    const btnnclose = () => {
        props.data(false)
    }
    return (
        <div onClick={btnnclose} className='h-screen fixed top-0 left-0 w-screen border border-red-600 flex items-center justify-center  backdrop-blur-[2px]'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className='border border-green-500 rounded-lg flex flex-col w-[300px] px-2'>
                <div>
                    <input type='text' placeholder='Customer Name' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4 px-2' />
                </div>
                <div>
                    <input type='text' placeholder='Issued' className='w-full h-12 rounded-md border text-black font-semibold bg-slate-50 my-4 px-2' />
                </div>
                <div>
                    <button className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md mb-2'>SUBMIT</button>
                </div>
                <div>
                    <button onClick={btnnclose} className='bg-slate-400 h-8 w-24 text-white font-semibold text-lg rounded-md mb-2'>close</button>
                </div>

            </div>

        </div>
    )
}

export default Modelorder
