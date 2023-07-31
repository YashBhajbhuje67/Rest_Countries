import React from "react";
import { useNavigate } from 'react-router-dom'

const Country = ({ country, changeCountryName }) => {
  const nav = useNavigate();
  const navigateDisplay = ()=>{
    nav('/country');
    changeCountryName(country.name.common);
  }
  return (
    <div className="transition ease-in-out duration-500 border-2 w-54 rounded-lg cursor-pointer hover:drop-shadow-xl" onClick={()=>{navigateDisplay()}}>
      <img
        src={country.flags.svg}
        alt={country.flags.png}
        className="h-40 w-full bg-white rounded-t-md border-b "
      />
      <div className="px-4 py-2 bg-white h-36">
        <div className="font-semibold p-2 text-lg">{country.name.common}</div>
        <div className="flex text-sm gap-2">
          <div className="font-medium ">Population:</div>
          <div className="text-slate-500">{country.population}</div>
        </div>
        <div className="flex text-sm gap-2">
          <div className="font-medium">Region:</div>
          <div className="text-slate-500">{country.region}</div>
        </div>
        <div className="flex text-sm gap-2">
          <div className="font-medium">Capital:</div>
          <div className="text-slate-500 mb-4">{country.capital}</div>
        </div>
      </div>
    </div>
  );
};

export default Country;
