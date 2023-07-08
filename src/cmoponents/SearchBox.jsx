import React from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'

function SearchBox() {
  return (
    <>
        <div className='mt-5 mb-8 mx-4 rounded-sm bg-white-dark-mode-text-light-mode-elements py-4 px-7 flex gap-5'>
            <HiMagnifyingGlass className='text-lg text-dark-gray-light-mode-input'/>
            <input className='w-full text-dark-gray-light-mode-input' type="text" name="" id="" placeholder='Search for a country...' />
        </div>
    </>
  )
}

export default SearchBox