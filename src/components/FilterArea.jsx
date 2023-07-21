import React from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import Filter from './Filter'

function FilterArea() {
  return (
    <>
      <div className='flex flex-col lg:mx-20 lg:flex-row gap-10 mt-[1.5rem] mb-[2rem] lg:py-12 lg:justify-between'>
        <div className='h-12 mx-4 lg:mx-0 rounded-sm bg-white-dark-mode-text-light-mode-elements flex justify-center items-center'>
            <HiMagnifyingGlass className='text-lg ml-8 mr-[1.63rem] text-dark-gray-light-mode-input'/>
            <input className='w-full lg:w-[30rem] rounded-lg mr-6 lg:mr-0 text-dark-gray-light-mode-input border-none' type="text" name="" id="" placeholder='Search for a country...' />
        </div>
        <Filter />
      </div>
        
    </>
  )
}

export default FilterArea