import React, { useEffect } from 'react'



const Modeldelete = (props) => {




    const btndelete = async () => {
        try {
            const isertdata = await fetch(`http://localhost:8000/api/user/${props.id}`,

                {
                    method: "DELETE",
                    headers: {
                        "auth_token": localStorage.getItem("token"),

                    }

                })

            const data = await isertdata.json();

            if (data.success) {
                props.send();

            }



        }
        catch {

        }



    }






    return (
        <div onClick={() => { props.setDelete1(false) }} className='h-screen w-screen border border-red-600 flex items-center backdrop-blur-[2px] justify-center fixed top-0 left-0'>
            <div className='w-[400px] text-black font-semibold h-fit bg-slate-500 rounded-none shadow-md justify-center'>
                <div>
                    <h1>Are you sure want to delete it</h1>
                </div>
                <div className='flex flex-row gap-6 '>
                    <div>
                        <button onClick={btndelete} >YES</button>
                    </div>
                    <div>
                        <button onClick={() => { props.setDelete1(false) }} >NO</button>
                    </div>
                </div>

            </div>


        </div>

    )
}


export default Modeldelete
