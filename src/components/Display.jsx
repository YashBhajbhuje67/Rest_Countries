import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Country from './Country';

const Display = () => {
  const [data , setData] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
    const msg = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population`)
    setData(msg.data);
    }
    fetchData()
  },[])

  return (
    <div>
      <div className='top'>
        <input />
        {/* Look from my pc */}
        <div>Filter By Region</div>
        {/* same rutu */}
      </div>
      <div className='flex flex-wrap p-12 gap-8'>
       {data.length!==0 ? data.map((country, index)=>{
        return(<Country country={country} key={index}/>)
       })
      : null
      }
      </div>
    </div>
  )
}

export default Display