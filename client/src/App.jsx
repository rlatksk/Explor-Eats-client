import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
      
  )
}

export default App