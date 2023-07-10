import React from 'react'
import { HiOutlineMoon } from "react-icons/hi2";

function Header() {
  return (
    <>
        <div className=' bg-white-dark-mode-text-light-mode-elements w-full h-[5rem] flex justify-between items-center px-4 py-6 lg:px-[5.6rem] mb-6 shadow-md'>
            <h1 className=' text-dark-blue-dark-mode-elements text-sm lg:text-2xl font-semibold x'>Where in the world?</h1>
            <div className='flex items-center gap-2 text-dark-blue-dark-mode-elements'>
                <HiOutlineMoon className='text-base' />
                <h6 className='text-[0.75rem] lg:text-base'>Dark Mode</h6>
            </div>
        </div>
    </>
    
  )
}

export default Header