import React from 'react'
import GermanyFlag from '../assets/images/germany-flag.png'
function CountryBox() {
  return (
    <>
        <div className='flex flex-col bg-white-dark-mode-text-light-mode-elements shadow-sm rounded-t-md'> 
            <img className=' rounded-t-md' src={GermanyFlag} alt="" />
            <div className='flex flex-col p-8'>
                <h3 className='font-semibold text-lg'>Germany</h3>
                <p>Population: <span className=' text-dark-gray-light-mode-input'>81,770,900</span></p>
                <p>Region: <span className=' text-dark-gray-light-mode-input'>Europe</span></p>
                <p>Capital: <span className=' text-dark-gray-light-mode-input'>Berlin</span></p>
            </div>
        </div>   

    </>
  )
}

export default CountryBox