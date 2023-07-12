import React from 'react'
import {Link} from 'react-router-dom'
import CountryBox from './CountryBox'

function CountryList() {
  return (
    <div className='grid grid-flow-row grid-cols-1 lg:grid lg:grid-flow-cols lg:grid-cols-4 lg:gap-[4.69rem] gap-10 lg:mx-20 mx-[3.5rem]'>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>
        <Link to="country-details"><CountryBox countryDetail=""  /></Link>


    </div>
  )
}

export default CountryList