import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState("");

    const handlelogin = () => {
        if (username !== '' && password !== '') {
            setLoggedIn("true");
        } else {
            alert('please enter username and password')
        }



    }
    const handleLogout = () => {
        setLoggedIn(false);
    }
    return (
        <div className='min-h-screen max-w-screen flex items-center  border border-red-500 justify-center bg-gray-50 '>

            <div className='max-w-md flex items-center w-full h-72 space-y-8 p-8 bg-white shadow-md rounded-lg' >
                {loggedIn ? (
                    <div>
                        <h1 className='text-3xl font-semibold'>welcome{username}</h1>
                        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg' onClick={handleLogout}>
                            Logout
                        </button>

                    </div>
                ) : (


                    <div className=' w-full'>
                        <div className='mb-4 p-2  border rounded-lg w-full'>
                            <input type='text'
                                className='w-full outline-none'
                                placeholder='Enter Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='mb-4 p-2 border rounded-lg w-full'>
                            <input
                                className='w-full outline-none'

                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div >
                            <button className='text-xl py-2 text-blue-700 border rounded-lg w-32 mt-2 ' onClick={handlelogin}>Login</button>
                        </div>
                    </div>
                )}
            </div>


        </div >
    )
}

export default Login
