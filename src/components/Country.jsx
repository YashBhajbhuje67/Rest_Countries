import React from 'react'

const Country = ({country}) => {
  return (
    <div className='border m-2 w-[20%]'>
      <img src={country.flags.svg} alt={country.flags.png} className='w-full'/>
      <div className='font-semibold'>{country.name.common}</div>
      <div className=''>Population: {country.population}</div>
      <div className=''>Region: {country.region}</div>
      <div className=''>Capital: {country.capital}</div>
      </div>
  )
}

export default Country