import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CountryDetail = ({countryName}) => {
  const [data, setData] = useState([]);

  console.log(data)
  const fetchData = async()=>{
    try{
      const msg = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      setData(msg.data);
      console.log(msg.data)
    }
    catch{
      alert('Axios error !')
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      {data.length !== 0 ? (
        <div className='flex bg-zinc-50'>
          <div id="left" className='w-1/2 p-2 border-r-2 border-black flex flex-col items-center'>
            <div className='text-3xl font-semibold underline underline-offset-4 p-2'>{data[0].name.common}</div>
            <img src={data[0].flags.svg} alt={data[0].flag} className='px-24 py-8 '/>
          </div>

          <div id="right" className='w-1/2 p-4 text-xl'>
            <div className='flex justify-center'> 
              <div className='text-3xl font-semibold p-2 underline underline-offset-4'>{data[0].name ? data[0].name.official : ''}</div>
            </div>

            <div className='flex gap-2 px-4 py-2'> 
              <div>Capital :</div>
              <div>{data[0].capital ? data[0].capital[0] : ''}</div>
            </div>
            
            <div className='flex gap-2 px-4 py-2'> 
              <div>Region :</div>
              <div>{data[0].region ? data[0].region : ''}</div>
            </div>

            <div className='flex gap-2 px-4 py-2'> 
              <div>Sub Region :</div>
              <div>{data[0].subregion ? data[0].subregion : ''}</div>
            </div>

            <div className='flex gap-2 px-4 py-2'> 
              <div>Timezone :</div>
              <div>{data[0].timezones ? data[0].timezones[0]: ''}</div>
            </div>

            <div className='flex gap-2 px-4 py-2'> 
              <div>Flag :</div>
              <div>{data[0].flag ? data[0].flag : ''}</div>
            </div>

            <div className='flex gap-2 px-4 py-2'> 
              <div>Location :</div>
              <a href={data[0].maps.googleMaps} target="_blank"  className='text-cyan-500 underline'>{data[0].maps ? data[0].maps.googleMaps: ''}</a>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center text-4xl font-semibold'>
          Loading . . .
        </div>
      )}
    </>
  );
}

export default CountryDetail