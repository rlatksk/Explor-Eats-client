import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  return (
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <Link
              to="/"
              className={`${
                isActive('/') ? 'text-[#F1C84F] text-[24px]' : 'text-gray-300'
              } hover:text-[#A1883B] text-[16px] transition-all duration-500 ease-in-out hover:text-[24px]`}
            >
              Home
            </Link>
            <Link
              to="/list"
              className={`${
                isActive('/list') ? 'text-[#F1C84F] text-[24px]' : 'text-gray-300'
              } hover:text-[#A1883B] text-[16px] transition-all duration-500 ease-in-out hover:text-[24px]`}
            >
              Foods
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-[#F1C84F] text-[24px]' : 'text-gray-300'
              } hover:text-[#A1883B] text-[16px] transition-all duration-500 ease-in-out hover:text-[24px]`}
            >
              About
            </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar