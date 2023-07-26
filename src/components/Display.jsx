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
      <div className=' flex justify-around px-8 py-4'>
        <input className='border focus:outline-none w-1/5 p-2 rounded-md' placeholder='Search Here...'/>
        {/* Look from my pc */}
        <div>Filter By Region</div>
        {/* same rutu */}
      </div>
      <div className='flex flex-wrap mx-8 px-8 py-4 border gap-8'>
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