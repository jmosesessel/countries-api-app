import React from 'react'
import CountryBox from './CountryBox'

function CountryList() {
  return (
    <div className='grid grid-flow-row grid-cols-1 lg:grid lg:grid-flow-cols lg:grid-cols-4 lg:gap-[4.69rem] gap-10 lg:mx-20 mx-[3.5rem]'>
        <CountryBox countryDetail="" />
        <CountryBox countryDetail="" />
        <CountryBox countryDetail="" />
        <CountryBox countryDetail="" />
        <CountryBox countryDetail="" />
        <CountryBox countryDetail="" />
        <CountryBox countryDetail="" />

    </div>
  )
}

export default CountryList