import React from 'react'

const Deleteproduct = (props) => {
    const btndelete = async () => {
        try {
            const isertdata = await fetch(`http://localhost:8000/api/product/${props.productdata}`,

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
        <div onClick={() => { props.setDeleteproduct(false) }} className='h-screen w-screen border border-red-600 flex items-center backdrop-blur-[2px] justify-center fixed top-0 left-0'>
            <div className='w-50 px-3 py-8 bg-gray-300 relative flex flex-col justify-start gap-3 rounded-none shadow-md '>
                <div className=''>
                    <h1>Are you sure want to delete it</h1>



                    <button onClick={btndelete} className='gap-4'>YES</button>


                    <button onClick={() => { props.setDeleteproduct(false) }} >NO</button>



                </div>

            </div>


        </div>
    )
}

export default Deleteproduct
