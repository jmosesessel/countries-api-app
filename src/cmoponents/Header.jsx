import React from 'react'
import { HiOutlineMoon } from "react-icons/hi2";

function Header() {
  return (
    <>
        <div className=' bg-white-dark-mode-text-light-mode-elements w-full flex justify-between items-center px-5 py-6 shadow-md'>
            <h1 className=' text-dark-blue-dark-mode-elements text-lg font-semibold'>Where in the world?</h1>
            <div className='flex items-center gap-2 text-dark-blue-dark-mode-elements'>
                <HiOutlineMoon />
                <h6>Dark Mode</h6>
            </div>
        </div>
    </>
    
  )
}

export default Header