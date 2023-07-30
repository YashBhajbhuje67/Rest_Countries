import axios from "axios";
import React, { useEffect, useState } from "react";
import search from "../assets/search.png";
import swipe from '../assets/swipe.png'
import Country from "./Country";

const Display = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [inputCountry, setInputCountry] = useState('');
  const [rotation, setRotation] = useState(0);
  const [region, setRegion] = useState("");
  const [showFilter, setShowFilter] = useState('hidden');

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    if (inputCountry === "") {
      setDisplayData(data);
    } else {
      searchInput();
    }
  }, [inputCountry])

  useEffect(() => {
    if (region == "") {
      fetchAllData();
    } else {
      fetchRegion();
    }
  }, [region])

  const fetchAllData = async () => {
    try {
      const msg = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population`
      );

      setData(msg.data);
      setDisplayData(msg.data);
    } catch {
      alert("Axios Error !");
    }
  };

  const fetchRegion = async () => {
    try {
      const msg = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setDisplayData(msg.data);
      setData(msg.data);
    } catch {
      alert("Axios Error !");
    }
  };

  const searchInput = () => {
    let result = [];
    if (data) {
      result = data.filter((e) => {
        const name = `${e.name.common}`.toLowerCase();
        return name.startsWith(inputCountry);
      })
      setDisplayData(result);
    }

  }

  const handleChangeInput = (e) => {
    setInputCountry(e.target.value.toLowerCase());
  };

  const handleChangeRegion = (e) => {
    setRegion(e.target.id);

  };

  const rotateArrow = () => {
    setRotation(rotation + 180);
    if (showFilter === '') {
      setShowFilter('hidden')
    }
    else {
      setShowFilter('')
    }
  }

  return (
    <div className="bg-zinc-50">
      <div className=" flex justify-between px-32 mx-24 py-4 items-center">
        <div
          className="border flex bg-white p-2 px-4 gap-4 rounded-md w-[20vw] items-center drop-shadow"
          htmlFor="search_input"
        >
          <img src={search} alt="S" className="h-5" />
          <input
            id="search_input"
            className="focus:outline-none w-full text-lg"
            placeholder="Search for a country . . ."
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>

        <div className="relative border cursor-pointer rounded-md drop-shadow" onClick={() => rotateArrow()}>
          <div className="flex p-2 pl-4 items-center gap-6">
            <div>Filter By Region</div>
            <img src={swipe} alt='img' className="w-[2vw] transition duration-500 transform rotate-0" style={{ transform: `rotate(${rotation}deg)` }} />
          </div>
          <div className={`absolute border rounded-md w-full bg-white mt-0.5 ${showFilter} drop-shadow`}>
            <div className="p-2 px-6 hover:bg-slate-200" id="africa" onClick={(e) => { handleChangeRegion(e) }}>Africa</div>
            <div className="p-2 px-6 hover:bg-slate-200" id="america" onClick={(e) => { handleChangeRegion(e) }}>America</div>
            <div className="p-2 px-6 hover:bg-slate-200" id="asia" onClick={(e) => { handleChangeRegion(e) }}>Asia</div>
            <div className="p-2 px-6 hover:bg-slate-200" id="europe" onClick={(e) => { handleChangeRegion(e) }}>Europe</div>
            <div className="p-2 px-6 hover:bg-slate-200" id="oceania" onClick={(e) => { handleChangeRegion(e) }}>Oceania</div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-4 gap-14 my-12 px-32 mx-24">
        {data.length !== 0 ? (
          displayData.map((country, index) => {
            return <Country country={country} key={index} />;
          })
        ) : (
          <div className="text-4xl font-semibold w-screen">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Display;
