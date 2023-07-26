import React from 'react'

const Country = ({country}) => {
  return (
    <div className='border p-2 m-2 w-1/5'>
      <img src={country.flags.svg} alt={country.flags.png} className='aspect-auto w-72 border'/>
      <div className=''>{country.name.common}</div>
      <div className=''>Population: {country.population}</div>
      <div className=''>Region: {country.region}</div>
      <div className=''>Capital: {country.capital}</div>
      </div>
  )
}

export default Country