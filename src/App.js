import logo from './logo.svg';
import './App.css';
import Login from './Components/login/Login';
import Sidebar from './Components/sidebar/Sidebar';
import Navbar from './Components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Components/dashboard/Dashboard"
import User from "./Components/user/User"
import Productcategory from "./Components/productcategory/Productcategory"
import Product from "./Components/products/Product"
import Sales from "./Components/sales/Sales"
import Activeorder from "./Components/activeorder/Activeorder"
import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Context = createContext();

function App() {

  const [opensidebar, setOpensidebar] = useState(false)

  const location = useLocation()

  return (
    <Context.Provider value={{ opensidebar: opensidebar, setopensidebar: setOpensidebar }}>

      <div className="App">
        <Toaster />
        {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}

        <div className=' flex overflow-hidden '>
          <div className=' '>
            {location.pathname !== "/login" && <Sidebar />}
            {/* <Sidebar /> */}
          </div>
          <div className='border  flex-1'>
            <div>
              {location.pathname !== "/login" && <Navbar />}
              {/* <Navbar /> */}
              {/* <Dashboard /> */}
            </div>
            <Routes>
              <Route path='/shop/dashboard' element={<Dashboard />} />
              <Route path='/shop/user' element={<User />} />
              <Route path='/shop/productcategory' element={<Productcategory />} />
              <Route path='/shop/products' element={<Product />} />
              <Route path='/shop/sales' element={<Sales />} />
              <Route path='/shop/activeorder' element={<Activeorder />} />
              <Route path='/login' element={<Login />} />

            </Routes>
          </div>
        </div>
      </div>
    </Context.Provider>


  );
}

export default App;
