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

export const Context = createContext();

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <Context.Provider value={{ openSidebar: openSidebar, setOpenSidebar: setOpenSidebar }}>
      <div className="App">
        {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
        {/* <Login /> */}
        <div className=' flex '>
          <div className=' '>
            <Sidebar />
          </div>
          <div className='border  flex-1'>
            <div>
              <Navbar />
              <Dashboard />
            </div>
            <Routes>
              <Route path='/shop/dashboard' element={<Dashboard />} />
              <Route path='/shop/user' element={<User />} />
              <Route path='/shop/productcategory' element={<Productcategory />} />
              <Route path='/shop/products' element={<Product />} />
              <Route path='/shop/sales' element={<Sales />} />
              <Route path='/shop/activeorder' element={<Activeorder />} />

            </Routes>
          </div>
        </div>
      </div>
    </Context.Provider>

  );
}

export default App;
