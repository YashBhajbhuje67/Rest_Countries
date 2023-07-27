import axios from "axios";
import React, { useEffect, useState } from "react";
import search from '../assets/search.png'
import Country from "./Country";

const Display = () => {
  const [data, setData] = useState([]);
  const [inputCountry, setInputCountry] = useState('');
  const [region, setRegion] = useState('');

  const fetchAllData = async () => {
    const msg = await axios.get(
      `https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population`
    );
    setData(msg.data);
  };

  const fetchRegion = async ()=>{
    const msg = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    setData(msg.data);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(()=>{
    fetchRegion();
  },[region]);

  const handleChangeInput = (e)=>{
    setInputCountry(e.target.value);
    
  };

  const handleChangeRegion = (e)=>{
    setRegion(e.target.value)
  }

  return (
    <div className="bg-zinc-50">
      <div className=" flex justify-around px-8 py-4 items-center">
        <div className="border flex bg-white p-2 gap-6 rounded-md w-1/5 items-center">
          <img src={search} alt="S" className="h-6" id="search_input" />
          <input
            htmlFor="search_input"
            className="focus:outline-none w-full text-lg"
            placeholder="Search for a Country..."
            onChange={()=>{handleChangeInput(e)}}
          />
        </div>
        
        <div className="p-2 rounded-md border bg-white">Filter By Region</div>
        {/* same rutu */}
      </div>
      <div className="flex flex-wrap mx-32 py-4 gap-14 pl-32 py-8">
        {data.length !== 0
          ? data.map((country, index) => {
              return <Country country={country} key={index} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Display;
