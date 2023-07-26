import React from "react";

const Country = ({ country }) => {
  return (
    <div className="transition ease-in duration-300 border m-2 rounded-md w-1/6 h-72 drop-shadow-md  hover:cursor-pointer hover:drop-shadow-xl">
      <img
        src={country.flags.svg}
        alt={country.flags.png}
        className="w-full h-40 bg-white rounded-t-md "
      />
      <div className="px-4 py-2 bg-white">
        <div className="font-semibold p-2 text-lg">{country.name.common}</div>
        <div className="flex text-sm gap-2">
          <div className="font-medium ">Population:</div>
          <div className="text-slate-400">{country.population}</div>
        </div>
        <div className="flex text-sm gap-2">
          <div className="font-medium">Region:</div>
          <div className="text-slate-400">{country.region}</div>
        </div>
        <div className="flex text-sm gap-2">
          <div className="font-medium">Capital:</div>
          <div className="text-slate-400 mb-4">{country.capital}</div>
        </div>
      </div>
    </div>
  );
};

export default Country;
