import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState("");

    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const responseRaw = await fetch('http://localhost:8000/api/user/login', {
                method: "POST",
                headers: {
                    // "auth_token":localStorage.getItem("token"),
                    "Content-Type": "application/json",

                },

                body: JSON.stringify({ username: username, password: password })
            });
            const response = await responseRaw.json();
            console.log(response)

            if (response.success) {
                localStorage.setItem("token", response.auth_token);
                window.location.href = "/shop/dashboard";
            }
            else {
                toast.error(response.msg)

            }
        }
        catch (error) {

        }


        // if (username !== '' && password !== '') {
        //     setLoggedIn("true");
        // } else {
        //     alert('please enter username and password')
        // }


    }




    const handleLogout = () => {
        setLoggedIn(false);
    }
    return (
        <div className='md:flex md:flex-row h-screen w-screen flex justify-center items-center flex-col gap-10 bg-blue-400  '>
            <img src="https://safekaro.com/images/login.png?fbclid=IwAR1AW5dY6tfAE5MgC_rymG9Bnwk9wNtUfmWyu6i0VMmPqo4U6UXXN4qABIQ" alt="" className='h-[300px]' />

            <form className='max-w-[400px] w-full  flex justify-center flex-col p-4 rounded-sm  bg-white  shadow-sm' >
                {/* {loggedIn ? (
                    <div>
                        <h1 className='text-3xl font-semibold'>welcome{username}</h1>
                        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg' onClick={handleLogout}>
                            Logout
                        </button>

                    </div>
                ) : ( */}
                <label className='label text-2xl'>Login </label>

                <div className='flex justify-start flex-col '>

                    <label className='label'>Username </label>


                    <input type='text'

                        className='input'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className='flex justify-start flex-col'>
                    <label className='label'>Password </label>
                    <input
                        className='input'
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div >
                    <button className='text-xl py-2 bg-blue-700 border rounded-lg w-full my-4 text-white font-semibold ' onClick={handlelogin}>Login</button>
                </div>

                {/* )} */}
            </form>


        </div >
    )

}
export default Login
