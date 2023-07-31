import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CountryDetail = ({countryName}) => {
  const [data, setData] = useState([]);

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
    <div>
      {countryName}
    </div>
  )
}

export default CountryDetail